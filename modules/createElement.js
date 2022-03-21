/**
 * Create HTMLElement
 * @param {HTMLElement} tag 
 * @param {string} className 
 * @returns {HTMLElement}
 */
function createElement(tag, className) {
   const $tag = document.createElement(tag);

   className ? $tag.classList.add(className) : undefined;
   
   return $tag;
}

export default createElement;