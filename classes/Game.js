import { getRandom, createElement } from '../utils/index.js';
import { ATTACK, HIT } from '../modules/constants.js';
import Player from './Player.js';
import Logs from './Logs.js';

let player1;
let player2;

class Game {
   constructor({
      root, 
      chat,
   }) {
      this.root = root;
      this.form = root.querySelector('.control');
      this.logs = new Logs({chat,})
   }

   start = async () => {
      // this.root.appendChild(this.player1.createPlayer());
      // this.root.appendChild(this.player2.createPlayer());

      // this.logs.generate(this.player1.name, this.player2.name);
      
      this.submitResult();

      const players = await this.getPlayersFromApi();

      let p1 = players[getRandom(players.length) - 1];
      let p2 = players[getRandom(players.length) - 1];

      player1 = new Player({
         ...p1, 
         player: 1,
      });

      player2 = new Player({
         ...p2,
         player: 2,
      });

      player1.createPlayer();
      player2.createPlayer();

      this.logs.generate(player1.name, player2.name);
      this.sound()
   }

   getPlayersFromApi = async () => {
      const body = await fetch('https://reactmarathon-api.herokuapp.com/api/mk/players')
         .then(res => res.json());

      return body;
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
            player1.doAttack(attackPlayer2);
            player2.doAttack(attackPlayer1);
         }

         if (player1.hp === 0 || player2.hp === 0) {
            this.showFightResult();
            this.createReloadButton();

         }
      })
   }

   sound = () => {
      const control = document.querySelector('.audio-control')
      const audio = document.querySelector('.audio')
      control.addEventListener('click', () => {
         if (audio.pause()) {
            audio.play();
            control.classList.remove('disabled');
         } else {
            audio.pause();
            control.classList.add('disabled');
         }
      })
   }

   getBattleLog = (attackPlayer2, attackPlayer1) => {
      if (attackPlayer2) {
         this.logs.hit(player2.name, player1.name, attackPlayer2, player1.hp);
      } else {
         this.logs.defence(player1.name, player2.name, 0, player1.hp);
      }

      if (attackPlayer1) {
         this.logs.hit(player1.name, player2.name, attackPlayer1, player2.hp);
      } else {
         this.logs.defence(player2.name, player1.name, 0, player2.hp);
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
      if (player1.hp === 0 && player2.hp === 0) {
         this.logs.draw();
         this.root.appendChild(this.showWinner());
      } else if (player1.hp === 0) {
         this.logs.end(player2.name, player1.name);
         this.root.appendChild(this.showWinner(player2.name));
      } else if (player2.hp === 0) {
         this.logs.end(player1.name, player2.name);
         this.root.appendChild(this.showWinner(player1.name));
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