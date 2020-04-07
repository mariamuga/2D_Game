class GroundObstacles {
  constructor() {
    this.img = loadImage("game-resources/Obstacles/spikes_ground.png");

    this.x = width;
    //GIVING RANDOM NUMBER TO THE this.y
    this.y = random(425, 425);
  }

  display() {
    //Moving the OBSTACLE TO THE LEFT
    this.x--;
    image(this.img, this.x, this.y, 35, 35);
  }
}
