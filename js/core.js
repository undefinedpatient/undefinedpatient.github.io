import * as THREE from "three";
import { AssetManager } from "./asset_manager.js";

export class RenderManager {
  /** @type {SceneManager} */
  scene_manager = undefined;
  /** @type {THREE.Timer} */
  timer = new THREE.Timer();
  /** @type {boolean} */
  is_running = false;
  /** @type {THREE.PerspectiveCamera} */
  camera = undefined;
  /** @type {THREE.WebGLRenderer} */
  renderer = undefined;

  /**
   * @param {SceneManager} scene_manager
   * @param {Element} canvas - The canvas element to be rendered on.
   */
  constructor(scene_manager, canvas) {
    this.scene_manager = scene_manager;
    let aspect_ratio = canvas.clientWidth / canvas.clientHeight;
    this.camera = new THREE.PerspectiveCamera(90, aspect_ratio, 0.1, 100);
    this.renderer = new THREE.WebGLRenderer({ canvas: canvas });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.on_resize();
  }

  start() {
    this.is_running = true;
    this.renderer.setAnimationLoop(() => this.render());
  }

  stop() {
    this.renderer.setAnimationLoop(null);
    this.is_running = false;
  }

  render() {
    this.timer.update();
    const delta = this.timer.getDelta(); // In second
    this.scene_manager.update(delta);
    this.renderer.render(this.scene_manager.scene, this.camera);
  }
  /** Callback function to call on resizing the window. */
  on_resize = () => {
    let element = this.renderer.domElement; // Get the element renderer attached to.
    this.camera.aspect = element.clientWidth / element.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(element.clientWidth, element.clientHeight, false);

    // Update all entities uniform value
    if (this.scene_manager == null) return;
    this.scene_manager.entities.forEach((entity) => {
      entity.set_uniform(
        "u_resolution",
        new THREE.Vector2(element.clientWidth, element.clientHeight),
      );
    });
  };

  /**
   * @type {(mouse_event: MouseEvent) => void}
   */
  on_mouse_move = (mouse_event) => {
    let [width, height] = [
      this.renderer.domElement.width,
      this.renderer.domElement.height,
    ];

    let relative_x = mouse_event.clientX / width - 0.5;
    let relative_y = mouse_event.clientY / height - 0.5;

    this.camera.position.set(relative_x / 17, -relative_y / 17, 0.0);
    if (this.scene_manager == null) return;
    this.scene_manager.entities.forEach((entity) => {
      entity.set_uniform("u_mouse", new THREE.Vector2(relative_x, relative_y));
    });
  };
}

/**
 * Manage the scene tree.
 */
export class SceneManager {
  /** @type {Scene} */
  scene = new THREE.Scene();
  /** @type {Entity[]} */
  entities = [];

  constructor() {}
  /**
   * @param {Entity} entity
   */
  add(entity) {
    this.entities.push(entity);
    if (entity.mesh) this.scene.add(entity.mesh);
  }

  update(delta) {
    for (let i = 0; i < this.entities.length; i++) {
      if (this.entities[i].on_update != null) this.entities[i].on_update(delta);
    }
  }
  /** @returns {Entity[]} */
  get entities() {
    return this.entities;
  }

  dispose() {
    this.entities.forEach((e) => e.dispose?.());
    this.scene.clear();
  }
}

export class Entity {
  /** @type{THREE.Mesh} */
  mesh = undefined;
  /** @type {(delta: number) => void} */
  on_update = null;
  /**
   * @param {(delta: number) => void} update
   */
  constructor(geometry, material, update) {
    this.mesh = new THREE.Mesh(geometry, material);
    this.on_update = update ?? null;
  }
  set_uniform(name, value) {
    if (this.mesh?.material?.uniforms?.[name]) {
      this.mesh.material.uniforms[name].value = value;
    }
  }

  dispose() {
    if (this.mesh != null) {
      this.mesh.geometry?.dispose();
      if (Array.isArray(this.mesh.material)) {
        this.mesh.material.forEach((m) => m.dispose());
      } else {
        this.mesh.material.dispose();
      }
    }
  }
}

export class BackgroundPlane extends Entity {
  /** @type {THREE.Texture} */
  texture = null;
  /**
   * @param {AssetManager} asset_manager
   */
  static async create(asset_manager, shader_name, texture_abs_path) {
    const [texture, shaders] = await Promise.all([
      asset_manager.load_texture(texture_abs_path),
      asset_manager.load_shader_pair(shader_name),
    ]);
    if (texture == null) {
      throw Error("Texture cannot be loaded");
    }
    if (shaders == null) {
      throw Error("Shaders cannot be loaded");
    }

    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_texture: { value: texture },
        u_mouse: { value: new THREE.Vector2() },
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2() },
      },
      vertexShader: shaders.vertexShader,
      fragmentShader: shaders.fragmentShader,
    });
    const aspect = texture.image.width / texture.image.height;
    const geometry = new THREE.PlaneGeometry(aspect, 1);
    const entity = new BackgroundPlane(geometry, material);
    entity.texture = texture;

    entity.on_update = (delta) => {
      material.uniforms.u_time.value += delta;
    };
    return entity;
  }

  /**
   * @description Update self to cover the whole canvas.
   * @param {THREE.Camera} camera
   */
  update_fill_scale(camera) {
    this.mesh.updateMatrixWorld();
    if (!this.texture.image) return;
    /** @type{THREE.Vector4[]} */
    const ndcs = [];
    const positions = this.mesh.geometry.attributes.position.array;
    const world_matrix = this.mesh.matrixWorld;
    const position = new THREE.Vector3();
    const quaternion = new THREE.Quaternion();
    const scale = new THREE.Vector3();
    world_matrix.decompose(position, quaternion, scale);
    const uniform_world_matrix = new THREE.Matrix4().compose(
      position,
      quaternion,
      new THREE.Vector3(1, 1, 1),
    );
    const combined_matrix = new THREE.Matrix4().multiplyMatrices(
      camera.projectionMatrix,
      uniform_world_matrix,
    );

    for (let i = 0; i < positions.length; i += 3) {
      const [x, y, z] = positions.slice(i, i + 3);
      /** @type{THREE.Vector4} */
      const loc_poc = new THREE.Vector4(x, y, z, 1);

      const projected = loc_poc.applyMatrix4(combined_matrix);

      ndcs.push(projected.divideScalar(projected.getComponent(3)));
    }
    let scale_factor_x = 1.2 / Math.abs(ndcs[0].getComponent(0)); // The extra x0.2 account for panning mousemove
    let scale_factor_y = 1.2 / Math.abs(ndcs[0].getComponent(1)); // The extra x0.2 account for panning mousemove
    let scalar_scale_factor = Math.max(scale_factor_x, scale_factor_y);
    this.mesh.scale.set(scalar_scale_factor, scalar_scale_factor, 1);
  }
}
