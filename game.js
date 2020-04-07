class Game {
  constructor() {
    this.obstacles = [];
  }

  init() {
    this.background = new Background();
    this.player = new Player();
  }

  setup() {
    this.player.setup();
  }

  display() {
    clear();
    this.background.display();
    this.player.display();
    
    if (frameCount % 70 === 0) {
      this.obstacles.push(new Obstacles());
    } 

    this.obstacles.forEach((obstacle) => {
      obstacle.display();
    }); 

    this.obstacles = this.obstacles.filter((obstacle) => {
      return !obstacle.checkCollision(this.player);
    }); 
  
}
}