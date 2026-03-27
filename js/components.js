/**
 *	@param {string} css_file_name
 *	@returns {HTMLStyleElement}
 */
async function load_style(css_file_name) {
  try {
    const response = await fetch("./js/components.css");
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
  async connectedCallback() {
    this.appendChild(await load_style("components.css"));
  }
}
/**
 * @description A page container with border.
 */
class PageContainer extends HTMLElement {
  constructor() {
    super();
  }
  async connectedCallback() {
    this.appendChild(await load_style("components.css"));
  }
}
customElements.define("hover-text", HoverText);
customElements.define("page-container", PageContainer);
