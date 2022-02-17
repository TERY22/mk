const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $formFight = document.querySelector('.control');
const $chat = document.querySelector('.chat');

const HIT = {
   head: 30,
   body: 25,
   foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

const logs = {
   start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
   end: [
      'Результат удара [playerWins]: [playerLose] - труп',
      '[playerLose] погиб от удара бойца [playerWins]',
      'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
   ],
   hit: [
      '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
      '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
      '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
      '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
      '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
      '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
      '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
      '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
      '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
      '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
      '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
      '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
      '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
      '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
      '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
      '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
      '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
      '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
   ],
   defence: [
      '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
      '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
      '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
      '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
      '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
      '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
      '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
      '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
   ],
   draw: 'Ничья - это тоже победа!'
};

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

/**
 * Change players heal points
 * @param {number} hpValue 
 */
function changeHP(hpValue) {
   
   this.hp -= hpValue;

   if (this.hp <= 0) {
      this.hp = 0;
   }
}

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

/**
 * Get random number
 * @param {number} num 
 * @returns {number} random num
 */
function getRandom(num) {
   return Math.ceil(Math.random() * num);
}

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

// $randomButton.addEventListener('click', function() {
//      player1.changeHP(getRandom(20));
//      player2.changeHP(getRandom(20));
//      player1.renderHP();
//      player2.renderHP();

//      if (player1.hp === 0 || player2.hp === 0) {
//          $randomButton.disabled = true;

//          const $reloadButton = createReloadButton();

//          $reloadButton.addEventListener('click', function (e) {
//             e.preventDefault();
//             window.location.reload();
//          })

//          $arenas.appendChild($reloadButton);
//      }

//      if (player1.hp === 0 && player1.hp < player2.hp) {
//          $arenas.appendChild(showWinner(player2.name));
//      } else if (player1.hp === 0 && player2.hp === 0) {
//          $arenas.appendChild(showWinner());
//      } else if (player2.hp === 0 && player2.hp < player1.hp) {
//          $arenas.appendChild(showWinner(player1.name));
//      }
// });

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

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function enemyAttack() {
   const hit = ATTACK[getRandom(3) - 1];
   const defence = ATTACK[getRandom(3) - 1];

   return {
      value: getRandom(HIT[hit]),
      hit,
      defence, 
   }
}

function playerAttack() {
   const attack = {};

   for (let item of $formFight) {
      if (item.checked && item.name === 'hit') {
         attack.value = getRandom(HIT[item.value]);
         attack.hit = item.value;
      }

      if (item.checked && item.name === 'defence') {
         attack.defence = item.value;
      }

      item.checked = false;
   }

   return attack;
}

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

function generateLogs(type, player1, player2) {
   const text = logs[type][getRandom(17)].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
   const element = `<p>${text}</p>`;
   
   console.log(element);

   $chat.insertAdjacentHTML('afterbegin', element);
}

function start() {
   const date = new Date().toLocaleTimeString();
   const start = logs.start.replace('[time]', date).replace('[player1]', player1.name).replace('[player2]', player2.name);
   const element = `<p>${start}</p>`;

   console.log(element);

   $chat.insertAdjacentHTML('afterbegin', element);
}

document.addEventListener('DOMContentLoaded', start())

$formFight.addEventListener('submit', function (e) {
   e.preventDefault();

   const enemy = enemyAttack();
   const player = playerAttack();

   if (player.defence !== enemy.hit) {
      player1.changeHP(enemy.value);
      player1.renderHP();
      generateLogs('hit', player2, player1);
   }

   if (enemy.defence !== player.hit) {
      player2.changeHP(player.value);
      player2.renderHP();
      generateLogs('hit', player1, player2);
   }

   if (player1.hp > 0 && player2.hp === 0) {
      const text = logs.end[getRandom(2)].replace('[playerWins]', player1.name).replace('[playerLose]', player2.name);
      const element = `<p>${text}</p>`;
      
      console.log(element);

      $chat.insertAdjacentHTML('afterbegin', element);
   } else if (player1.hp === 0 && player2.hp === 0) {
      const text = logs.draw;
      const element = `<p>${text}</p>`;
      
      console.log(element);

      $chat.insertAdjacentHTML('afterbegin', element);
   }

   showFightResult();
})