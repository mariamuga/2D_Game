let game = new Game();
function preload() {
  game.init();
}
function setup() {
  createCanvas(1920, 1080);
}
function draw() {
  game.display();
  
 fill(204, 101, 192, 127);
  stroke(127, 63, 120);
  rect(40, 120, 120, 40); 
}
