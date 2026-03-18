import * as THREE from "three";
import { load_text } from "./utilities.js";

export class AssetManager {
  constructor() {
    /** @type {THREE.TextureLoader} */
    this.texture_loader = new THREE.TextureLoader();
    /** @type {Map<string, {vertexShader: string, fragmentShader: string}>} */
    this.shader_cache = new Map();
    /** @type {Map<string, THREE.Texture>} */
    this.texture_cache = new Map();
  }
  /**
   * @param {string} shader_name - The file name of the shader pair under /assets/shader/ without .vert/.glsl extension.
   * @returns {{vertexShader: string, fragmentShader: string}}
   */
  async load_shader_pair(shader_name) {
    if (this.shader_cache.has(shader_name)) {
      return this.shader_cache.get(shader_name);
    }
    const [vertex_shader_string, frag_shader_string] = await Promise.all([
      load_text(`/assets/shader/${shader_name}.vert`),
      load_text(`/assets/shader/${shader_name}.frag`),
    ]);

    /** @param {string} shader_name - The file name of the shader pair without .vert/.glsl extension. */
    const shaders = {
      vertexShader: vertex_shader_string,
      fragmentShader: frag_shader_string,
    };
    this.shader_cache.set(shader_name, shaders);

    return shaders;
  }

  /**
   * @param {string} path - The absolute path of the texture.
   * @returns {Promise<THREE.Texture>}
   */
  async load_texture(path) {
    if (this.texture_cache.has(path)) {
      return this.texture_cache.get(path);
    }
    return new Promise((resolve, reject) => {
      this.texture_loader.load(
        path,
        // onLoad
        (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.anisotropy = 16;
          texture.magFilter = THREE.LinearFilter;
          texture.minFilter = THREE.LinearMipMapLinearFilter;
          this.texture_cache.set(path, texture);
          resolve(texture);
        },
        // onProgress
        undefined,
        // onError
        reject,
      );
    });
  }
}
