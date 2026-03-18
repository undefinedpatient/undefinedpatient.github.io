"use strict";
import * as THREE from "three";
import { BackgroundPlane, RenderManager, SceneManager } from "./core.js";
import { AssetManager } from "./asset_manager.js";
import "./components.js";

const canvas = document.querySelector("#render");
const scene_manager = new SceneManager();
const render_manager = new RenderManager(scene_manager, canvas);
const asset_manager = new AssetManager();

async function init() {
  /** @type{BackgroundPlane} */
  const background_plane = await BackgroundPlane.create(
    asset_manager,
    "test",
    "/assets/img/lighting.jpg",
  );
  background_plane.mesh.position.set(0, 0, -0.5);
  background_plane.mesh.updateMatrixWorld();
  scene_manager.add(background_plane);

  // Window event
  window.addEventListener("resize", () => {
    render_manager.on_resize();
    background_plane.update_fill_scale(render_manager.camera);
  });
  render_manager.start();
}

init();
// Document event
document.addEventListener("mousemove", (mouse_event) => {
  render_manager.on_mouse_move(mouse_event);
});
