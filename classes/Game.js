import { getRandom, createElement } from '../utils/index.js';
import { ATTACK, HIT } from '../modules/constants.js';
import Player from './Player.js';
import Logs from './Logs.js';

class Game {
   constructor({
      root, 
      chat,
   }) {
      this.root = root;
      this.form = root.querySelector('.control');

      this.player1 = new Player({
         player: 1,
         name: 'Scorpion',
         weapon: ['Kunai', 'Long Sword', 'Ninja Sword', 'Mugai Ryu', 'Tanto'],
         img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
      });

      this.player2 = new Player({
         player: 2,
         name: 'Sub-Zero',
         weapon: ['Kunai', 'Long Sword', 'Ninja Sword', 'Mugai Ryu', 'Tanto'],
         img: 'http://reactmarathon-api.herokuapp.com/assets/sub-zero.gif',
      });

      this.logs = new Logs({chat,})
   }

   start = () => {
      this.root.appendChild(this.player1.createPlayer());
      this.root.appendChild(this.player2.createPlayer());

      this.logs.generate(this.player1.name, this.player2.name);
      
      this.submitResult();
   }
   
   submitResult = () => {
      this.form.addEventListener('submit', (e) => {
         e.preventDefault();

         const enemy = this.enemyAttack();
         const player = this.playerAttack();

         const attackPlayer2 = this.checkPlayer2Attack(player, enemy);
         const attackPlayer1 = this.checkPlayer1Attack(player, enemy);

         this.getBattleLog(attackPlayer2, attackPlayer1);

         if (player.defence !== enemy.hit) {
            this.player1.doAttack(attackPlayer2);
            this.player2.doAttack(attackPlayer1);
         }

         if (this.player1.hp === 0 || this.player2.hp === 0) {
            this.showFightResult();
            this.createReloadButton();
         }
      })
   }

   getBattleLog = (attackPlayer2, attackPlayer1) => {
      if (attackPlayer2) {
         this.logs.hit(this.player2.name, this.player1.name, attackPlayer2, this.player1.hp);
      } else {
         this.logs.defence(this.player1.name, this.player2.name, 0, this.player1.hp);
      }

      if (attackPlayer1) {
         this.logs.hit(this.player1.name, this.player2.name, attackPlayer1, this.player2.hp);
      } else {
         this.logs.defence(this.player2.name, this.player1.name, 0, this.player2.hp);
      }
   }

   checkPlayer2Attack = (attack, enemy) => {
      if (attack.defence !== enemy.hit) {
         return enemy.value;
      } else {
         return 0;
      }
   }

   checkPlayer1Attack = (attack, enemy) => {
      if (enemy.defence !== attack.hit) {
         return attack.value;
      } else {
         return 0;
      }
   }

   showFightResult = () => {
      if (this.player1.hp === 0 && this.player2.hp === 0) {
         this.logs.draw();
         this.root.appendChild(this.showWinner());
      } else if (this.player1.hp === 0) {
         this.logs.end(this.player2.name, this.player1.name);
         this.root.appendChild(this.showWinner(this.player2.name));
      } else if (this.player2.hp === 0) {
         this.logs.end(this.player1.name, this.player2.name);
         this.root.appendChild(this.showWinner(this.player1.name));
      }
   }

   enemyAttack = () => {
      const hit = ATTACK[getRandom(ATTACK.length) - 1];
      const defence = ATTACK[getRandom(ATTACK.length) - 1];

      return {
         value: getRandom(HIT[hit]),
         hit,
         defence, 
      }
   }

   playerAttack = () => {
      const attack = {};

      for (let item of this.form) {
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

   createReloadButton = () => {
      const $reloadWrap = createElement('div', 'reloadWrap');
      const $button = createElement('button', 'button');

      $button.innerText = 'Restart';

      $reloadWrap.appendChild($button);
      this.root.appendChild($reloadWrap);

      $button.addEventListener('click', function () {
         window.location.reload();
      })

      return $reloadWrap;
   }

   showWinner = (characterName) => {
      const $winnerTitle = createElement('div', 'winnerTitle');

      if (characterName) {
         $winnerTitle.innerText = `${characterName} wins!`
      } else {
         $winnerTitle.innerText = `Draw`
      }

      return $winnerTitle;
   }
}

export default Game;