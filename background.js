class Background {
  constructor() {
    // this.random = 0;
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
        speed: 0,
      },
      {
        src: loadImage("game-resources/Background/05_Particles.png"),
        x: 0,
        speed: 0,
      },
      {
        src: loadImage("game-resources/Background/04_Forest.png"),
        x: 0,
        speed: 0,
      },
      {
        src: loadImage("game-resources/Background/03_Particles.png"),
        x: 0,
        speed: 0,
      },
      {
        src: loadImage("game-resources/Background/02_Bushes.png"),
        x: 0,
        speed: 0,
      },
      {
        src: loadImage("game-resources/Background/01_Mist.png"),
        x: 0,
        speed: 0,
      },
    ];
  }
  display() {
    this.imgs.forEach((singleImage) => {
      /*   this.move(image); */
      // console.log("image");
      console.log(singleImage);
      image(singleImage.src, 0, 0, 1920, 500);
    });
  }
}

const array = [1, 2, 3];
function dupla(arrayExample) {
  return arrayExample.map((number) => (number *= 2));
}
let arr2 = dupla(array);
