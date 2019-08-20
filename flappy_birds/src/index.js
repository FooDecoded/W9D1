import FlappyBird from './game';

const canvas = document.getElementById('bird-game');
let fp = new FlappyBird(canvas);

fp.restart();