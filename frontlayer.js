class Frontlayer {
  constructor() {
    this.random = 0;
    this.imgs = [
      //here we set up the background images
      {
        src: loadImage("game-resources/Background/02_Bushes.png"),
        x: 0,
        speed: 8,
      },
      {
        src: loadImage("game-resources/Background/01_Mist.png"),
        x: 0,
        speed: 9,
      },
    ];
  }

  //Function outside of the constructor to move images
  move(img) {
    img.x -= img.speed;

    // image(we get the source of image, x coordinate, y coordinate )
    image(img.src, img.x, 0);
    image(img.src, img.x + width, 0);
    if (img.x <= -width) {
      img.x = 0;
    }
  }

  //Function outside of the constructor to display images

  display() {
    this.imgs.forEach((frontImage) => {
      this.move(frontImage);
    });
  }
}
