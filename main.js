let game = new Game();
let WIDTH = 960;
let HEIGHT = 540;
let score = 0;


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
    textStyle(BOLD);
    fill(134, 77, 38);
    textSize(20);
    text(`Distance: ${score} meters`, 700, 30);
  } else {
    image(game.startcover, 0, 0, WIDTH, HEIGHT);
    textFont("Helvetica");
    textStyle(BOLD);
    textSize(20);
    text('"Press enter to start the game."', 10, 30);
    text('"Press enter to start the game."', 150, 130);
  }
}

function keyPressed() {
  if (keyCode === 32) {
    game.player.jump();
    game.jumpSound.play();
  }
  if (keyCode === 13) {
    game.start = true;
     //game.sound.play();
  }
  if (keyCode === 65 && game.finished === true) {
    window.location.reload();
  }
}
