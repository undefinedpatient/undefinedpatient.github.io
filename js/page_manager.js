export class PageManager {
  /** @type{Map<string, HTMLElement>} */
  pages = new Map();
  /** @type{string} */
  active_page_id = null;
  /**
   * @param {...string} page_id
   */
  constructor(...page_ids) {
    page_ids.forEach((id, idx, _) => {
      let element = document.getElementById(id);
      if (element == null) throw new Error(`Page ${id} not exist`);
      this.pages.set(id, element);
    });

    if (this.pages.length == 0) return;
    this.set_active_page(0);
  }
  /**
   * @description Set active page without transition.
   */
  set_active_page(page_id) {
    if (this.pages.length == 0) return;
    this.active_page_id = page_id;
    this.pages.forEach((page_element, id, _) => {
      if (id == page_id) {
        page_element.style.display = "flex";
        return;
      }
      page_element.style.display = "none";
    });
  }
  /**
   * @returns {HTMLElement}
   */
  get_page(page_id) {
    return this.pages.get(page_id);
  }
  /**
   * @description Set active page with transition.
   */
  async transit_to(page_id) {
    if (this.active_page_id == page_id) return;

    const prev_page_id = this.active_page_id;
    const prev_page = this.pages.get(prev_page_id);
    const next_page = this.pages.get(page_id);

    if (!prev_page || !next_page) return;

    prev_page.classList.add("on-exit");
    const result = await new Promise((resolve, reject) => {
      // Start exit animation
      setTimeout(resolve, 800);
    });

    this.set_active_page(page_id);
    // Start enter animation
    next_page.offsetHeight; // force reflow
    next_page.classList.add("on-enter");

    // Cleanup after enter animation
    const cleanup = () => {
      prev_page.classList.remove("on-exit");
      next_page.classList.remove("on-enter");
    };
  }
}
