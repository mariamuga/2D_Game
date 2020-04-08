class Game {
  constructor() {
    this.ground = [];
    this.obstacles = [];
    this.lives = 3;
    this.finished = false;
  }

  init() {
    this.background = new Background();
    this.player = new Player();
    this.frontlayer = new Frontlayer();
    this.lives = new Lives();
  }

  setup() {
    this.player.setup();
  }

  display() {
    clear();

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
      fill("blue");
      textSize(20);
      text("U DED BRUH, press A to restart", 200, 130);
      localStorage.setItem("gameScore", score);
      noLoop();
    }

    this.player.display();
    this.frontlayer.display();
  }
}
