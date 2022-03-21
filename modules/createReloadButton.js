import createElement from './createElement.js';

/**
 * Create Reload Button
 * @returns HTMLElement
 */
function createReloadButton() {
   const $reloadWrap = createElement('div', 'reloadWrap');
   const $button = createElement('button', 'button');

   $button.innerText = 'Restart';

   $reloadWrap.appendChild($button);

   $button.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.reload();
   })

   return $reloadWrap;
}

export default createReloadButton;