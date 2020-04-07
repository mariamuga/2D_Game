class Lives {
  constructor() {
    this.img = loadImage("game-resources/HP/hp.png");

    /* this.imgs = [
            {
              src: loadImage("game-resources/HP/hp.png"),
              x: 0,
              speed: 0,
            },
            {
              src: loadImage("game-resources/HP/hp.png"),
              x: 0,
              speed: 0,
            },
            {
                src: loadImage("game-resources/HP/hp.png"),
                x: 0,
                speed: 0,
              },
          ]; */
  }

  /* setup() {
    this.height = this.img.height;
    this.width = this.img.width;
    this.x = 0;
    this.y = 0;
  }  */

  display() {
    image(this.img, 0, 0);
  }
}
