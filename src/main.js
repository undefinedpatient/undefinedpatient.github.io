"use strct";
import "./components.js";
import { BackgroundPlane, RenderManager, SceneManager } from "./core.js";
import { AssetManager } from "./asset_manager.js";
import { PageManager } from "./page_manager.js";

const canvas = document.querySelector("#render");
const scene_manager = new SceneManager();
const render_manager = new RenderManager(scene_manager, canvas);
const asset_manager = new AssetManager();

// ===============================================================================
// Setup the pages
// ===============================================================================
const page_manager = new PageManager("cover-page", "intro-page", "art-page");
page_manager.set_active_page("cover-page");
page_manager
  .get_page("cover-page")
  .addEventListener("mouseup", async (mouse_event) => {
    await page_manager.transit_to("intro-page");
  });

// ===============================================================================
// Setup the Document event
// ===============================================================================
document.addEventListener("mousemove", (mouse_event) => {
  render_manager.on_mouse_move(mouse_event);
});

/** @type{BackgroundPlane} */
const background_plane = await BackgroundPlane.create(asset_manager, "grid");
background_plane.mesh.position.set(0, 0, -0.3);
background_plane.mesh.updateMatrixWorld();
scene_manager.add(background_plane);
background_plane.update_fill_scale(render_manager.camera);
render_manager.on_resize();

// ===============================================================================
// Window Event
// ===============================================================================
window.addEventListener("resize", () => {
  render_manager.on_resize();
  background_plane.update_fill_scale(render_manager.camera);
});
render_manager.start();
