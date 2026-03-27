import "./components.css";
/**
 *  @description Used for manual fetching, does not needed now due to Vite.
 *	@param {string} css_file_name
 *	@returns {HTMLStyleElement}
 */
async function load_style(css_file_name) {
  try {
    const response = await fetch(new URL(css_file_name, import.meta.url));

    if (!response.ok) {
      const err_message = await response.text();
      throw new Error(`Fetch Error: ${err_message}`);
    }
    const style = document.createElement("style");
    style.textContent = await response.text();
    return style;
  } catch (err) {
    console.error("Failed to load style: ", err);
  }
}
/**
 * @description A text element scale up when hovered.
 */
class HoverText extends HTMLElement {
  constructor() {
    super();
  }
  async connectedCallback() {}
}
/**
 * @description A page container with border.
 */
class PageContainer extends HTMLElement {
  constructor() {
    super();
  }
  async connectedCallback() {}
}
customElements.define("hover-text", HoverText);
customElements.define("page-container", PageContainer);
