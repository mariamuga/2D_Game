let game = new Game();
let WIDTH = 960;
let HEIGHT = 540;

function preload() {
  game.init();
}
function setup() {
  createCanvas(WIDTH, HEIGHT);
  game.setup();
}
function draw() {
  game.display();
  frameRate(70);
}

function keyPressed() {
  if (keyCode === 32) {
    game.player.jump();
  }
  if (keyCode === 13) {
    game.start = true;
  }
  if (keyCode === 65 && game.finished === true) {
    window.location.reload();
  }
}
