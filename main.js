const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
   player: 1,
   name: 'Scorpion',
   hp: 100,
   img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
   weapon: ['Kunai', 'Long Sword', 'Ninja Sword', 'Mugai Ryu', 'Tanto'],
   attack: function() {
      console.log(`${this.name} fight...`);
   }
}

const player2 = {
   player: 2,
   name: 'Sub-Zero',
   hp: 100,
   img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
   weapon: ['Ice Scepter', 'Kori Blade', 'Cybernetic Weapons', 'Ice Daggers', 'Ice Pollaxe'],
   attack: function() {
      console.log(`${this.name} fight...`);
   }
}

function createElement(tag, className) {
   const $tag = document.createElement(tag);

   className ? $tag.classList.add(className) : undefined;
   
   return $tag;
}

function changeHP(player) {
   const $playerHP = document.querySelector(`.player${player.player} .health`);

   if (player.hp > 0) {
      player.hp -= Math.ceil(Math.random() * 20);

      $playerHP.style.width = player.hp + '%';

      console.log(player.hp);
   } else {   
      $arenas.appendChild(showWinner(player.name));

      $randomButton.disabled = true;

      $playerHP.style.width = 0 + '%';
   }
}

$randomButton.addEventListener('click', function() {
     changeHP(player1);
     changeHP(player2);
});

function showWinner(characterName) {
   const $winnerTitle = createElement('div', 'winnerTitle');
   $winnerTitle.innerText = `${characterName} wins!`

   return $winnerTitle;
}

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

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));


