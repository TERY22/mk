import createElement from './createElement.js';

/**
 * Create Player
 * @param {object} playerObj 
 * @returns {HTMLElement}
 */
function createPlayer(playerObj) {
   const $player = createElement('div', `player${playerObj.player}`);
   const $progressbar = createElement('div', 'progressbar');
   const $character = createElement('div', 'character'); 
   const $health = createElement('div', 'health');
   const $name = createElement('div', 'name');
   const $img = createElement('img');

   $img.src = playerObj.img;

   $health.style.width = playerObj.hp + '%';
   $name.innerText = playerObj.name;
   
   $player.appendChild($progressbar);
   $player.appendChild($character);

   $progressbar.appendChild($health);
   $progressbar.appendChild($name);

   $character.appendChild($img);

   return $player;
}

export default createPlayer;