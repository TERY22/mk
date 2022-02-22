import createElement from './createElement.js';

/**
 * Show Winner player title
 * @param {string} characterName 
 * @returns {HTMLElement}
 */
function showWinner(characterName) {
   const $winnerTitle = createElement('div', 'winnerTitle');

   if (characterName) {
      $winnerTitle.innerText = `${characterName} wins!`
   } else {
      $winnerTitle.innerText = `Draw`
   }

   return $winnerTitle;
}

export default showWinner;