class Player {
  constructor() {
    this.img = loadImage("game-resources/Hero/running.gif");
    this.gravity = 0.2;
    this.speed = 0;
  }
  setup() {
    this.height = this.img.height;
    console.log(this.height);
    this.width = this.img.width;
    this.x = 200;
    this.y = 200;
  }
  jump() {
    this.speed = -5;
  }
  display() {
    this.speed += this.gravity;
    this.y += this.speed;

    if (this.y > height - this.height) {
      this.y = height - this.height;
    }
    image(this.img, this.x, this.y, 100, 100);
  }
}
