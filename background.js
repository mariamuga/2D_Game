class Background {
  constructor() {
    this.random = 0;
    this.imgs = [
      //here we set up the background images
      {
        src: loadImage("game-resources/Background/10_Sky.png"),
        x: 0,
        speed: 0,
      },
      {
        src: loadImage("game-resources/Background/09_Forest.png"),
        x: 0,
        speed: 1,
      },
      {
        src: loadImage("game-resources/Background/08_Forest.png"),
        x: 0,
        speed: 2,
      },
      {
        src: loadImage("game-resources/Background/07_Forest.png"),
        x: 0,
        speed: 3,
      },
      {
        src: loadImage("game-resources/Background/06_Forest.png"),
        x: 0,
        speed: 4,
      },
      {
        src: loadImage("game-resources/Background/05_Particles.png"),
        x: 0,
        speed: 5,
      },
      {
        src: loadImage("game-resources/Background/04_Forest.png"),
        x: 0,
        speed: 6,
      },
      {
        src: loadImage("game-resources/Background/03_Particles.png"),
        x: 0,
        speed: 7,
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
    this.imgs.forEach((singleImage) => {
      // console.log("image");
      /* console.log(singleImage);
      image(singleImage.src, 0, 0, 960, 540); */

      this.move(singleImage);
    });
  }


}


