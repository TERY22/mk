const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
   player: 1,
   name: 'Scorpion',
   hp: 100,
   changeHP,
   elHP,
   renderHP,
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
   changeHP,
   elHP,
   renderHP,
   img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
   weapon: ['Ice Scepter', 'Kori Blade', 'Cybernetic Weapons', 'Ice Daggers', 'Ice Pollaxe'],
   attack: function() {
      console.log(`${this.name} fight...`);
   }
}

function elHP() {
   return document.querySelector(`.player${this.player} .health`);
}

function renderHP() {
   return this.elHP().style.width = this.hp + '%';
}

function changeHP(hpValue) {
   
   this.hp -= hpValue;

   if (this.hp <= 0) {
      this.hp = 0;
   }
}

function createElement(tag, className) {
   const $tag = document.createElement(tag);

   className ? $tag.classList.add(className) : undefined;
   
   return $tag;
}

function getRandom(num) {
   return Math.ceil(Math.random() * num);
}

function showWinner(characterName) {
   const $winnerTitle = createElement('div', 'winnerTitle');

   if (characterName) {
      $winnerTitle.innerText = `${characterName} wins!`
   } else {
      $winnerTitle.innerText = `Draw`
   }

   return $winnerTitle;
}

function createReloadButton() {
   const $reloadWrap = createElement('div', 'reloadWrap');
   const $button = createElement('button', 'button');

   $button.innerText = 'Restart';

   $reloadWrap.appendChild($button);

   return $reloadWrap;
}

$randomButton.addEventListener('click', function() {
     player1.changeHP(getRandom(20));
     player2.changeHP(getRandom(20));
     player1.renderHP();
     player2.renderHP();

     if (player1.hp === 0 || player2.hp === 0) {
         $randomButton.disabled = true;

         const $reloadButton = createReloadButton();

         $reloadButton.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.reload();
         })

         $arenas.appendChild($reloadButton);
     }

     if (player1.hp === 0 && player1.hp < player2.hp) {
         $arenas.appendChild(showWinner(player2.name));
     } else if (player1.hp === 0 && player2.hp === 0) {
         $arenas.appendChild(showWinner());
     } else if (player2.hp === 0 && player2.hp < player1.hp) {
         $arenas.appendChild(showWinner(player1.name));
     }
});

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
