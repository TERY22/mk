/**
 * Create HTMLElement
 * @param {HTMLElement} tag 
 * @param {string} className 
 * @returns {HTMLElement}
 */
const createElement = (tag, className) => {
   const $tag = document.createElement(tag);

   className ? $tag.classList.add(className) : undefined;
   
   return $tag;
}

const getRandom = (num) => {
   return Math.ceil(Math.random() * num);
}

export {createElement, getRandom};