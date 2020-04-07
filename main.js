let game = new Game();

function keyPressed() {
  let spaceBarCode = 32;
  if (keyCode === spaceBarCode) {
    game.player.jump();
  }
}

function preload() {
  game.init();
}
function setup() {
  createCanvas(960, 540);
  game.setup();
}
function draw() {
  frameRate(70);
  game.display();
}
