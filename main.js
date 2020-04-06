let game = new Game();
function preload() {
  game.init();
}
function setup() {
  createCanvas(960, 540);
  game.setup();
}
function draw() {
  game.display();

}
