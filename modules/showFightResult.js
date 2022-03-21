import createReloadButton from './createReloadButton.js';
import { player1, player2 } from './players.js';
import showWinner from './showWinner.js';

const $randomButton = document.querySelector('.button');
const $arenas = document.querySelector('.arenas');

function showFightResult() {
   if (player1.hp === 0 || player2.hp === 0) {
      $randomButton.disabled = true;

      const $reloadButton = createReloadButton();

      $arenas.appendChild($reloadButton);
   }

   if (player1.hp === 0 && player1.hp < player2.hp) {
      $arenas.appendChild(showWinner(player2.name));
   } else if (player1.hp === 0 && player2.hp === 0) {
      $arenas.appendChild(showWinner());
   } else if (player2.hp === 0 && player2.hp < player1.hp) {
      $arenas.appendChild(showWinner(player1.name));
   }
}

export default showFightResult;