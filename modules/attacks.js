import getRandom from './getRandom.js';
import { ATTACK, HIT } from './constants.js';

const $formFight = document.querySelector('.control');

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

export {playerAttack, enemyAttack};