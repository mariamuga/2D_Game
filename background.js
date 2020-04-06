class Background {
  constructor() {
    this.random = 0;
    this.imgs = [
      //here we set up the background images
      {
        src: loadImage("game-resources/Background/01_Mist.png"),
        x: 0,
        speed: 0,
      },
      {
        src: loadImage("game-resources/Background/02_Bushes.png"),
        x: 0,
        speed: 1,
      },
      {
        src: loadImage("game-resources/Background/03_Particles.png"),
        x: 0,
        speed: 2,
      },
      {
        src: loadImage("game-resources/Background/04_Forest.png"),
        x: 0,
        speed: 3,
      },
      {
        src: loadImage("game-resources/Background/05_Particles.png"),
        x: 0,
        speed: 0,
      },
      {
        src: loadImage("game-resources/Background/06_Forest.png"),
        x: 0,
        speed: 0,
      },
      {
        src: loadImage("game-resources/Background/07_Forest.png"),
        x: 0,
        speed: 0,
      },
      {
        src: loadImage("game-resources/Background/08_Forest.png"),
        x: 0,
        speed: 0,
      },
      {
        src: loadImage("game-resources/Background/09_Forest.png"),
        x: 0,
        speed: 0,
      },
      {
        src: loadImage("game-resources/Background/10_Sky.png"),
        x: 0,
        speed: 0,
      },
    ];
  }
 /*  move(img) {
    img.x -= img.speed;

    // image(we get the source of image, x coordinate, y coordinate )
    image(img.src, img.x, 0);
    image(img.src, img.x + width, 0);
    if (img.x <= -width) {
      img.x = 0;
    }
  } */
  display() {
    this.imgs.forEach((image) => {
      this.move(image);
    });
  }
}
