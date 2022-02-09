// Task #0
const player1 = {
   name: 'Scorpion',
   hp: 95,
   img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
   weapon: ['Kunai', 'Long Sword', 'Ninja Sword', 'Mugai Ryu', 'Tanto'],
   attack: function() {
      console.log(`${this.name} fight...`);
   }
}

const player2 = {
   name: 'Sub-Zero',
   hp: 75,
   img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
   weapon: ['Ice Scepter', 'Kori Blade', 'Cybernetic Weapons', 'Ice Daggers', 'Ice Pollaxe'],
   attack: function() {
      console.log(`${this.name} fight...`);
   }
}

// Task #1 

function createPlayer(classList, charName, life) {
   const $player = document.createElement('div');
   const $progressbar = document.createElement('div');
   const $character = document.createElement('div');
   const $life = document.createElement('div');
   const $name = document.createElement('div');
   const $img = document.createElement('img');
   const $arenas = document.querySelector('.arenas');

   $player.classList.add(classList);
   $progressbar.classList.add('progressbar');
   $character.classList.add('character');
   $life.classList.add('life');
   $name.classList.add('name');
   $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';

   $life.style.width = life + '%';
   $name.innerText = charName;
   
   $arenas.appendChild($player);
   $player.appendChild($progressbar);
   $player.appendChild($character);
   $progressbar.appendChild($life);
   $progressbar.appendChild($name);
   $character.appendChild($img);
}

// Task #2

createPlayer('player1', 'Scorpion', 80);
createPlayer('player2', 'Sub-Zero', 50);

// Task #3 

function createPlayer2(playerClass, charObj) {
   const $player = document.createElement('div');
   const $progressbar = document.createElement('div');
   const $character = document.createElement('div');
   const $life = document.createElement('div');
   const $name = document.createElement('div');
   const $img = document.createElement('img');
   const $arenas = document.querySelector('.arenas');

   $player.classList.add(playerClass);
   $progressbar.classList.add('progressbar');
   $character.classList.add('character');
   $life.classList.add('life');
   $name.classList.add('name');

   $img.src = charObj.img;

   $life.style.width = charObj.hp + '%';
   $name.innerText = charObj.name;
   
   $arenas.appendChild($player);
   $player.appendChild($progressbar);
   $player.appendChild($character);
   $progressbar.appendChild($life);
   $progressbar.appendChild($name);
   $character.appendChild($img);
}

// createPlayer2('player1', player1)
// createPlayer2('player2', player2)