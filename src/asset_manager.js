import * as THREE from "three";

/**
 * @typedef {Object} ShaderPair
 * @property {string} vertexShader - The raw text of the vertex shader.
 * @property {string} fragmentShader - The raw text of the fragment shader.
 */

/**
 * Manages the loading and caching of assets such as WebGL shaders and Three.js textures.
 * Utilizing this manager prevents redundant network requests and duplicate memory allocation.
 */
export class AssetManager {
  /**
   * Initializes the asset manager with empty caches and a Three.js texture loader.
   */
  constructor() {
    /**
     * Loader used to fetch image textures.
     * @type {THREE.TextureLoader}
     * @private
     */
    this.textureLoader = new THREE.TextureLoader();

    /**
     * Cache for storing loaded shader pairs.
     * @type {Map<string, ShaderPair>}
     * @private
     */
    this.shaderCache = new Map();

    /**
     * Cache for storing loaded and configured textures.
     * @type {Map<string, THREE.Texture>}
     * @private
     */
    this.textureCache = new Map();
  }

  /**
   * Asynchronously loads a vertex and fragment shader pair.
   * Expects shaders to be located in the `./shaders/` directory and processed using Vite's `?raw` import suffix.
   *
   * @param {string} shaderName - The base name of the shader files (without `.vert` or `.frag` extensions).
   * @returns {Promise<ShaderPair>} A promise that resolves to an object containing the raw shader strings.
   * @throws {Error} If the shader files cannot be found or loaded.
   */
  async load_shader_pair(shaderName) {
    // 1. Return cached shaders if they have already been loaded
    if (this.shaderCache.has(shaderName)) {
      return this.shaderCache.get(shaderName);
    }

    try {
      // 2. Dynamically import raw shader strings
      const vertexModule = await import(`./shaders/${shaderName}.vert?raw`);
      const fragmentModule = await import(`./shaders/${shaderName}.frag?raw`);

      const shaders = {
        vertexShader: vertexModule.default,
        fragmentShader: fragmentModule.default,
      };

      // 3. Cache the result for future requests
      this.shaderCache.set(shaderName, shaders);

      return shaders;
    } catch (error) {
      console.error(
        `[AssetManager] Failed to load shader pair: "${shaderName}"`,
        error,
      );
      throw new Error(`Shader load failed: ${shaderName}`);
    }
  }

  /**
   * Asynchronously loads an image as a Three.js texture.
   * Applies default configurations optimized for modern 3D rendering (sRGB color space, high anisotropy).
   *
   * @param {string} path - The absolute or relative path to the texture image.
   * @returns {Promise<THREE.Texture>} A promise that resolves to the fully configured Three.js texture.
   * @throws {Error} If the texture image fails to load.
   */
  async load_texture(path) {
    // 1. Return cached texture if it has already been loaded
    if (this.textureCache.has(path)) {
      return this.textureCache.get(path);
    }

    // 2. Wrap the callback-based TextureLoader in a modern Promise
    return new Promise((resolve, reject) => {
      this.textureLoader.load(
        path,
        (texture) => {
          // Configure texture settings for optimal rendering quality
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.anisotropy = 16;
          texture.magFilter = THREE.LinearFilter;
          texture.minFilter = THREE.LinearMipMapLinearFilter;

          // 3. Cache the configured texture
          this.textureCache.set(path, texture);
          resolve(texture);
        },
        undefined, // onProgress callback (intentionally left undefined)
        (error) => {
          console.error(
            `[AssetManager] Failed to load texture at path: "${path}"`,
            error,
          );
          reject(error);
        },
      );
    });
  }
}
