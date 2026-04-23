/**
 * Manages the visibility and transitions of multiple HTML pages (elements) within a single-page application.
 */
export class PageManager {
  /**
   * Initializes the page manager with a list of DOM element IDs.
   * Automatically sets the first provided valid page ID as the active page.
   *
   * @param {...string} page_ids - A rest parameter of string IDs corresponding to the HTML elements to manage.
   * @throws {Error} If any of the provided DOM element IDs cannot be found in the document.
   */
  constructor(...page_ids) {
    /**
     * A map storing the page IDs as keys and their corresponding HTMLElements as values.
     * @type {Map<string, HTMLElement>}
     */
    this.pages = new Map();

    /**
     * The ID of the currently active (visible) page.
     * @type {string|null}
     */
    this.active_page_id = null;

    // 1. Populate the map with elements
    page_ids.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) {
        throw new Error(
          `[PageManager] Page ID "${id}" does not exist in the DOM.`,
        );
      }
      this.pages.set(id, element);
    });

    // 2. Set the initial active page if the map is not empty
    if (this.pages.size > 0) {
      this.set_active_page(page_ids[0]);
    }
  }

  /**
   * Immediately sets the active page and updates display styles without any animation.
   * Hides all other registered pages.
   *
   * @param {string} page_id - The ID of the page to make active.
   */
  set_active_page(page_id) {
    if (this.pages.size === 0) return;

    this.active_page_id = page_id;

    this.pages.forEach((page_element, id) => {
      if (id === page_id) {
        page_element.style.display = "flex";
      } else {
        page_element.style.display = "none";
      }
    });
  }

  /**
   * Retrieves the HTMLElement associated with the given page ID.
   *
   * @param {string} page_id - The ID of the page to retrieve.
   * @returns {HTMLElement|undefined} The DOM element, or undefined if not found.
   */
  get_page(page_id) {
    return this.pages.get(page_id);
  }

  /**
   * Asynchronously transitions from the currently active page to a new page using CSS classes.
   *
   * @param {string} page_id - The ID of the page to transition to.
   * @returns {Promise<void>} Resolves when the transition logic has started.
   */
  async transit_to(page_id) {
    // Prevent transitioning to the same page
    if (this.active_page_id === page_id) return;

    const prev_page_id = this.active_page_id;
    const prev_page = this.pages.get(prev_page_id);
    const next_page = this.pages.get(page_id);

    if (!prev_page || !next_page) return;

    // 1. Trigger exit animation on current page
    prev_page.classList.add("on-exit");

    // Wait for exit animation to complete (800ms)
    await new Promise((resolve) => setTimeout(resolve, 800));

    // 2. Swap display states instantly
    this.set_active_page(page_id);

    // 3. Trigger enter animation on the new page
    // Force a DOM reflow using `void` so the browser registers the display change before animating
    next_page.offsetHeight;
    next_page.classList.add("on-enter");

    // 4. Cleanup animation classes after enter animation completes (assuming 800ms match)
    setTimeout(() => {
      prev_page.classList.remove("on-exit");
      next_page.classList.remove("on-enter");
    }, 800);
  }
}
