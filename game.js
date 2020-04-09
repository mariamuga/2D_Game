class Game {
  constructor() {
    this.ground = [];
    this.obstacles = [];
    //this.lives = 3;
    this.finished = false;
    this.start = false;
    this.sound;
    this.jumpSound;
    this.endcover;
  }

  init() {
    this.startcover = loadImage("game-resources/LP/zell.jpg");
    this.endcover = loadImage("game-resources/Cover/CoverEnd.png");
    this.jumpSound = loadSound("game-resources/Music/jump.mp3");
    this.sound = loadSound("game-resources/Music/mistery.mp3");
    this.background = new Background();
    this.player = new Player();
    this.frontlayer = new Frontlayer();
    //this.lives = new Lives();
   
  }

  setup() {
    this.player.setup();
  }

  display() {
    clear();

    this.background.display();
    //this.lives.display();

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

    this.player.display();
    this.frontlayer.display();

    if (this.finished) {
      image(this.endcover, 0, 0, WIDTH, HEIGHT);
      localStorage.setItem("gameScore", score);
      noLoop();
    }
  }
}
