/**
 *
 */
class CustomButton extends HTMLButtonElement {
  constructor() {
    super();
    this.textContent = this.getAttribute("label");
  }
  async connectedCallback() {
    await this.load_style();
  }
  async load_style() {
    try {
      const response = await fetch("./js/components.css");
      if (!response.ok) {
        const err_message = await response.text();
        throw new Error(`Fetch Error: ${err_message}`);
      }
      const style = document.createElement("style");
      style.textContent = await response.text();
      this.appendChild(style);
    } catch (err) {
      console.error("Failed to load style: ", err);
    }
  }
}

customElements.define("custom-button", CustomButton, { extends: "button" });
