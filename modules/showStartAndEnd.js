import { LOGS } from './constants.js';
import { player1, player2 } from './players.js';
import getRandom from './getRandom.js';

const $chat = document.querySelector('.chat');
const time = new Date().toLocaleTimeString();

const showStart = () => {
   const start = LOGS.start.replace('[time]', time).replace('[player1]', player1.name).replace('[player2]', player2.name);
   const element = `<p>${start}</p>`;

   $chat.insertAdjacentHTML('afterbegin', element);
}

const showEnd = () => {
   if (player1.hp > 0 && player2.hp === 0) {
      const text = LOGS.end[getRandom(2)].replace('[playerWins]', player1.name).replace('[playerLose]', player2.name);
      const element = `<p>[${time}] ${text}</p>`;

      $chat.insertAdjacentHTML('afterbegin', element);
   } else if (player1.hp === 0 && player2.hp === 0) {
      const text = LOGS.draw;
      const element = `<p>${text}</p>`;

      $chat.insertAdjacentHTML('afterbegin', element);
   }
}

export {showStart, showEnd};