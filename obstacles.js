class Obstacles {
  constructor() {
    this.height = 25;
    this.width = 25;
    this.x = width;
    //GIVING RANDOM NUMBER TO THE this.y
    this.y = random(0, height - this.height);
    //this.y = random(0, height - this.height);
    this.img = loadImage("game-resources/Obstacles/spiky_wood.png");
  }

  checkCollision(player) {
    let left = this.x;
    let right = this.x + this.width;
    let playerLeft = player.x;
    let playerRight = player.x + player.width;

    let top = this.y;
    let bottom = this.y + this.height;

    let playerTop = player.y;
    let playerBottom = player.y + player.height;

    let xCollision =
      (left > playerLeft && left < playerRight) ||
      (right > playerLeft && right < playerRight);

    let yCollision =
      (top > playerTop && top < playerBottom) ||
      (bottom > playerTop && bottom < playerBottom);

    let collision = xCollision && yCollision;
    return collision;
  }

  display() {
    //Moving the OBSTACLE TO THE LEFT
    this.x--;
    image(this.img, this.x, this.y, 35, 35);
  }
}
