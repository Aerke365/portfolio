

export const debounce = (func, delay) => {
  let timerId; // Holds a reference to the timeout between calls.
  return (...args) => {
    clearTimeout(timerId); // Clears the current timeout, if any, to reset the debounce timer.
    timerId = setTimeout(() => {
        func.apply(this, args); // Calls the passed function after the specified delay with the correct context and arguments.
    }, delay);
  };
};/**
 * Preloads images specified by the CSS selector.
 * @function
 * @param {string} [selector='img'] - CSS selector for target images.
 * @returns {Promise} - Resolves when all specified images are loaded.
 */
const preloadImages = (selector = 'img') => {
  return new Promise((resolve) => {
      // The imagesLoaded library is used to ensure all images (including backgrounds) are fully loaded.
      imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
  });
};

// Exporting utility functions for use in other modules.
export {
  preloadImages
};