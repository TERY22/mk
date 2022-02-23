import createElement from '../modules/createElement.js';

class Player {
   constructor(props) {
      this.name = props.name;
      this.hp = props.hp;
      this.img = props.img;
      this.player = props.player;
      this.selector = `player${this.player}`;
      this.weapon = props.weapon;
      this.rootSelector = props.rootSelector;
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
      const $root = document.querySelector(`.${this.rootSelector}`);
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