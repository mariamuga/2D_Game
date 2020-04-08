class Game {
  constructor() {
    this.ground = [];
    this.obstacles = [];
    this.lives = 3;
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

    if (frameCount % 150 === 0) {
      this.obstacles.push(new Obstacles());
    }

    this.obstacles.forEach((obstacle) => {
      obstacle.display();
    });

    this.obstacles = this.obstacles.filter((obstacle) => {
      return !obstacle.checkCollision(this.player);
    });

    if (frameCount % 300 === 0) {
      this.ground.push(new GroundObstacles());
    }
    this.ground.forEach((obstacle) => {
      obstacle.display();
    });

    this.ground = this.ground.filter((obstacle) => {
      return !obstacle.checkCollision(this.player);
    });

    this.player.display();
    this.frontlayer.display();
  }
}
