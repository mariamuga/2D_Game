class Game {
  constructor() {
    this.ground = [];
    this.obstacles = [];
    this.lives = 3;
    this.finished = false;
    this.start = false;
    this.sound;
    this.jumpSound;
  }

  init() {
    this.jumpSound = loadSound("game-resources/Music/jump.mp3");
    this.sound= loadSound ("game-resources/Music/mistery.mp3");
    this.background = new Background();
    this.player = new Player();
    this.frontlayer = new Frontlayer();
    this.lives = new Lives();
    //this.startPhoto = loadImage("game-resources/LP/zell.jpg");
  }

  setup() {
    this.player.setup();
  }

  display() {
    clear();
//this.sound.play();
      if (game.start === true){
      this.sound.play();
    }   

   /*  if (!game.sound.playing) {
      game.sound.play();
    }
    //game on
    playing = true; */
    
    this.background.display();
    this.lives.display();

    if (frameCount % 180 === 0) {
      this.obstacles.push(new Obstacles());
    }

    this.obstacles.forEach((obstacle) => {
      obstacle.display();

      if (obstacle.checkCollision(this.player)) {
        this.finished = true;
      }
    });

    if (frameCount % 300 === 0) {
      this.ground.push(new GroundObstacles());
    }

    this.ground.forEach((groundobstacle) => {
      groundobstacle.display();

      if (groundobstacle.checkCollision(this.player)) {
        this.finished = true;
      }
    });

    if (this.finished) {
      //rect(300, 40, 300, 100);
      fill("orange");
      textStyle(BOLD);
      textSize(20);
      text("Sorry, You must try harder.", 300, 130);
      text("PRESS A TO RESTART", 330, 230);
      localStorage.setItem("gameScore", score);
      noLoop();
    }

    this.player.display();
    this.frontlayer.display();
  }
}