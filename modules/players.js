const player1 = {
   player: 1,
   name: 'Scorpion',
   hp: 100,
   changeHP,
   elHP,
   renderHP,
   img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
   weapon: ['Kunai', 'Long Sword', 'Ninja Sword', 'Mugai Ryu', 'Tanto'],
}

const player2 = {
   player: 2,
   name: 'Sub-Zero',
   hp: 10,
   changeHP,
   elHP,
   renderHP,
   img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
   weapon: ['Ice Scepter', 'Kori Blade', 'Cybernetic Weapons', 'Ice Daggers', 'Ice Pollaxe'],
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

export {player1, player2};