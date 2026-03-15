"use strict";
import { Entity, RenderManager, SceneManager } from "./core.js";
import * as THREE from "three";
import "./components.js";

const canvas = document.querySelector("#render");
const scene_manager = new SceneManager();
const render_manager = new RenderManager(scene_manager, canvas);

const loader = new THREE.TextureLoader();
loader.load("../assets/img/rigging.jpg", (texture) => {
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = render_manager.renderer.capabilities.getMaxAnisotropy(); // usually 16
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipMapLinearFilter;
  const material = new THREE.MeshBasicMaterial({
    map: texture,
  });
  const geometry = new THREE.PlaneGeometry(texture.width / texture.height, 1);
  geometry.translate(0, 0, -0.4);
  /** @type{Entity} */
  const background_entity = new Entity(geometry, material);
  scene_manager.add(background_entity);

  window.addEventListener("resize", () => {
    if (!texture.image) return;
    /** @type{THREE.Vector4[]} */
    const ndcs = [];
    const positions = geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const [x, y, z] = positions.slice(i, i + 3);
      /** @type{THREE.Vector4} */
      const position_vec = new THREE.Vector4(x, y, z, 1);
      const projected = position_vec.applyMatrix4(
        render_manager.camera.projectionMatrix,
      );
      ndcs.push(projected.divideScalar(projected.getComponent(3)));
    }
    let scale_factor_x = 1.1 / Math.abs(ndcs[0].getComponent(0)); // The extra x0.2 account for panning mousemove
    let scale_factor_y = 1.1 / Math.abs(ndcs[0].getComponent(1)); // The extra x0.2 account for panning mousemove
    let scalar_scale_factor = Math.max(scale_factor_x, scale_factor_y);
    background_entity.mesh.scale.set(
      scalar_scale_factor,
      scalar_scale_factor,
      1,
    );
  });
});

render_manager.start();

// Document event
document.addEventListener("mousemove", (mouse_event) => {
  render_manager.on_mouse_move(mouse_event);
});

// Window event
window.addEventListener("resize", () => {
  render_manager.on_resize();
});
