import { player1, player2 } from '../modules/players.js';
import generateLogs from '../modules/generateLogs.js';
import showFightResult from '../modules/showFightResult.js';
import { playerAttack, enemyAttack } from '../modules/attacks.js';
import {showStart, showEnd} from '../modules/showStartAndEnd.js';

class Game {
   constructor(props) {

   }

   start = () => {
      const $formFight = document.querySelector('.control');

      player1.createPlayer();
      player2.createPlayer();

      document.addEventListener('DOMContentLoaded', showStart());

      $formFight.addEventListener('submit', function (e) {
         e.preventDefault();

         const enemy = enemyAttack();
         const player = playerAttack();

         if (player.defence !== enemy.hit) {
            player1.changeHP(enemy.value);
            player1.renderHP();
            generateLogs('hit', player2, player1, enemy.value);
         } else {
            generateLogs('defence', player2, player1)
         }

         if (enemy.defence !== player.hit) {
            player2.changeHP(player.value);
            player2.renderHP();
            generateLogs('hit', player1, player2, player.value);
         } else {
            generateLogs('defence', player1, player2)
         }

         showEnd();

         showFightResult();
      })
   }
}

export default Game;