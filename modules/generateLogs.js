import { LOGS } from './constants.js';
import getRandom from './getRandom.js';

const $chat = document.querySelector('.chat');

function generateLogs(type, player1, player2) {
   const date = new Date().toLocaleTimeString();
   const text = LOGS[type][getRandom(17)]
                                          .replace('[playerKick]', player1.name)    
                                          .replace('[playerDefence]', player2.name)
                                          .replace(`[playerHP]`, `[${player1.hp} / 100]`);
   const element = `<p> [${date}] ${text}</p>`;
   
   console.log(element);

   $chat.insertAdjacentHTML('afterbegin', element);
}

export default generateLogs;