// const functions = {
//     createElement : (tag, classs = [], content = false, source = false, id = false, href = false) => {
//         const element = document.createElement(tag)
//         for (const clas of classs) {
//           element.classList.add(clas)
//         }
//         if (content) {
//           element.textContent = content
//         }
//         if (source) {
//           element.src = source
//         }
//         if (id) {
//           element.id = id
//         }
//         if (href) {
//           element.href = href
//         }
//         return element
//       }
// }

// export default functions

/**
 * Utility functions for DOM manipulation.
 */
const functions = {
  /**
   * Creates a new HTML element with specified attributes.
   * @param {string} tag - The HTML tag name of the element to be created.
   * @param {string[]} classs - An array of CSS class names to be added to the element.
   * @param {string|boolean} content - The content to be added to the element. If `false`, no content is added.
   * @param {string|boolean} source - The source URL for elements like images. If `false`, no source is set.
   * @param {string|boolean} id - The ID attribute to be assigned to the element. If `false`, no ID is set.
   * @param {string|boolean} href - The href attribute for links. If `false`, no href is set.
   * @returns {HTMLElement} - The created HTML element with specified attributes.
   */
  createElement: (tag, classs = [], content = false, source = false, id = false, href = false) => {
      const element = document.createElement(tag);
      
      // Add CSS classes to the element
      for (const clas of classs) {
          element.classList.add(clas);
      }

      // Set content if provided
      if (content) {
          element.textContent = content;
      }

      // Set source URL if provided (e.g., for images)
      if (source) {
          element.src = source;
      }

      // Set ID attribute if provided
      if (id) {
          element.id = id;
      }

      // Set href attribute if provided (e.g., for links)
      if (href) {
          element.href = href;
      }

      return element;
  }
}

export default functions;
