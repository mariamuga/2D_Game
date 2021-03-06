class Player {
  constructor() {
    this.img = loadImage("game-resources/Hero/running.gif");
    this.gravity = 0.2;
    this.speed = 0;
  }
  setup() {
    this.height = this.img.height;
    this.width = this.img.width;
    this.heightCheck = height - this.height - this.height / 1.8;
    this.x = 200;
    this.y = 200;
  }
  jump() {
    if (this.y < 150) {
    } else {
      this.speed = -5;
    }
  }
  display() {
    this.speed += this.gravity;
    this.y += this.speed;

    if (this.y > this.heightCheck) {
      this.y = this.heightCheck;
    }
    image(this.img, this.x, this.y, this.width, this.height);
  }
}
