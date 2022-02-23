import Player from '../classes/Player.js';

const player1 = new Player({
   player: 1,
   name: 'Scorpion',
   hp: 100,
   img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
   weapon: ['Kunai', 'Long Sword', 'Ninja Sword', 'Mugai Ryu', 'Tanto'],
   rootSelector: 'arenas'
});

const player2 = new Player({
   player: 2,
   name: 'Sub-Zero',
   hp: 100,
   img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
   weapon: ['Kunai', 'Long Sword', 'Ninja Sword', 'Mugai Ryu', 'Tanto'],
   rootSelector: 'arenas'
});

export {player1, player2};