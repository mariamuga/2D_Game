class Game {
  constructor() {
    this.obstacles = [];
    this.groundobstacles = [];
    
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
    this.player.display();
    

   /*  if (frameCount % 100 === 0) {
      this.obstacles.push(new Obstacles());
    }

    this.obstacles.forEach((obstacle) => {
      obstacle.display();
    });

    this.obstacles = this.obstacles.filter((obstacle) => {
      return !obstacle.checkCollision(this.player);
    }); */


    if (frameCount % 100 === 0) {
      this.groundobstacles.push(new GroundObstacles());
    }

    this.groundobstacles.forEach((ground) => {
      ground.display();
    });

   

    this.frontlayer.display();
    this.lives.display();
  }
}
