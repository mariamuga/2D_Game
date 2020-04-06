let game = new Game();
function preload() {
  //let newImg = loadImage("assets/background/plx-2.png");
  game.init();
}
function setup() {
  createCanvas(1920, 1080);
}
function draw() {
  frameRate(40);
  game.display();
}
