let game = new Game();
let WIDTH = 960;
let HEIGHT = 540;

let score = localStorage.getItem("gameScore");

if (!score) {
score = 0;
}

function preload() {
  game.init();
}
function setup() {
  createCanvas(WIDTH, HEIGHT);
  game.setup();
}
function draw() {
  
  if (game.start === true) {
    score++;
    game.display();
    fill("blue");
    textSize(20);
    text(`The Score is: ${score}`, 100, 300);

  } else {
    fill("green");
    rect(0, 0, WIDTH, HEIGHT);
    fill("blue");
    textSize(20);
    text('"Press enter to start the game"', 10, 30);
  }
  //game.display();
  //frameRate(70); 
  
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
