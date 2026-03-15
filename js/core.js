import * as THREE from "three";

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
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    this.renderer.setPixelRatio(window.devicePixelRatio);
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
    this.renderer.setPixelRatio(window.devicePixelRatio);
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
    this.camera.position.set(relative_x / 10, -relative_y / 10, 0.0);
    // console.log(`${relative_x}, ${relative_y}`);
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
      if (this.entities[i].update != null) this.entities[i].update(delta);
    }
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
  tick = () => {};

  constructor(geometry, material, on_tick) {
    this.mesh = new THREE.Mesh(geometry, material);
    this.tick = on_tick ?? null;
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
