let p1 = new Player('Player 1');
let p2 = new Player('Player 2');

const g = new Game(p1, p2);

window.addEventListener('load', g.startGame);

let brd = document.getElementById('board');
brd.addEventListener('click', g.markPosition);

let btn = document.getElementById('btn');
btn.addEventListener('click', g.startGame);