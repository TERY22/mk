import { createElement } from '../utils/index.js';

class Player {
   constructor({player, name, hp, img}) {
      this.player = player;
      this.name = name;
      this.hp = hp ? hp : 100;
      this.img = img;
      this.selector = `player${this.player}`;
   }

   doAttack = (hpValue) => {
      this.changeHP(hpValue);
      this.renderHP();
   }

   elHP = () => {
      return document.querySelector(`.${this.selector} .health`);
   }

   changeHP = (hpValue) => {
      
      this.hp -= hpValue;

      if (this.hp <= 0) {
         this.hp = 0;
      }
   }

   renderHP = () =>  {
      this.elHP().style.width = this.hp + '%';
   }

   createPlayer = () => {
      const $root = document.querySelector(`.arenas`);
      const $player = createElement('div', this.selector);
      const $progressbar = createElement('div', 'progressbar');
      const $character = createElement('div', 'character'); 
      const $health = createElement('div', 'health');
      const $name = createElement('div', 'name');
      const $img = createElement('img');

      $img.src = this.img;

      $health.style.width = this.hp + '%';
      $name.innerText = this.name;
      
      $player.appendChild($progressbar);
      $player.appendChild($character);

      $progressbar.appendChild($health);
      $progressbar.appendChild($name);

      $character.appendChild($img);

      $root.appendChild($player);

      return $player;
   }
}

export default Player;