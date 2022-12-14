import CanvasUtil from './CanvasUtil.js';
import ScoreItem from './ScoreItem.js';

export default class Car extends ScoreItem {
  public constructor(startX: number) {
    super();

    // Create variables to hold properties
    let image = null;
    let score = 0;

    // Check which car to use
    const randomCarChance = Math.random();
    if (randomCarChance < 0.6) {
      image = CanvasUtil.loadNewImage('./assets/car_10.png');
      score = -10;
    } else if (randomCarChance < 0.8) {
      image = CanvasUtil.loadNewImage('./assets/car_25.png');
      score = -25;
    } else if (randomCarChance < 0.95) {
      image = CanvasUtil.loadNewImage('./assets/car_50.png');
      score = -50;
    } else {
      image = CanvasUtil.loadNewImage('./assets/car_100.png');
      score = -100;
    }

    // Set the values
    this.image = image;
    this.posX = startX;
    this.posY = -this.image.height;
    this.score = score;
    this.speed = 0.3;
  }
}
