import { LOGS } from './constants.js';
import getRandom from './getRandom.js';

const $chat = document.querySelector('.chat');
const time = new Date().toLocaleTimeString();

const getLogs = (type, playerName1, playerName2) => {
   switch (type) {
      case 'start':
         return LOGS[type]
            .replace('[player1]', playerName1)
            .replace('[player2]', playerName2)
            .replace('[time]', time);
         break;
      case 'hit': 
         return LOGS[type][getRandom(LOGS[type].length - 1)]
            .replace('[playerKick]', playerName1)
            .replace('[playerDefence]', playerName2);
         break;
      case 'defence':
         return LOGS[type][getRandom(LOGS[type].length - 1)]
            .replace('[player1]', playerName1)
            .replace('[player2]', playerName2);
         break;
      case 'end':
         return LOGS[type]
            .replace('[player1]', playerName1)
            .replace('[player2]', playerName2);
         break;
      case 'end':
         return LOGS[type][getRandom(LOGS[type].length - 1)]
            .replace('[player1]', playerName1)
            .replace('[player2]', playerName2);
         break;
      default:
         break;
   }
};

const generateLogs = (type, player1, player2, valueAttack) => {
   let text = getLogs(type, player1.name, player2.name)

   switch (type) {
      case 'hit':
         text = `${time} ${text} [-${valueAttack}] - [${player2.hp}/100]`;
         break;
      case 'defence': 
      case 'end': 
      case 'draw': 
         text = `${time} ${text}`;
         break;
      default: 
         break;
   }

   const element = `<p>${text}</p>`;

   $chat.insertAdjacentHTML('afterbegin', element);
}

export default generateLogs;