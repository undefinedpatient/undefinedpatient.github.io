"use strict";
import { Entity, RenderManager, SceneManager } from "./core.js";
import * as THREE from "three";
import "./components.js";

const canvas = document.querySelector("#render");
const scene_manager = new SceneManager();
const render_manager = new RenderManager(scene_manager, canvas);

const loader = new THREE.TextureLoader();
const texture = loader.load("../assets/img/bookCover.webp", (data) => {
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = render_manager.renderer.capabilities.getMaxAnisotropy(); // usually 16
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipMapLinearFilter;
  const material = new THREE.MeshBasicMaterial({
    map: texture,
  });
  const geometry = new THREE.PlaneGeometry(texture.width / texture.height, 1);
  geometry.translate(0, 0, -0.4);
  const mesh = new Entity(geometry, material);
  scene_manager.add(mesh);
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
