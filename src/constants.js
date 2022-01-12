const CANVAS_SIZE = [800, 800];
const SNAKE_START = [
  [10, 0],
//   [8, 8]
];
const TREX_START = [
  [14, 0],
//   [8, 8]
];
const HERO = [10, 19];
const SCALE = 40;
const SPEED = 1000;
const DIRECTIONS = {
//   38: [0, -1], // up
//   40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0] // right
};

export {
  CANVAS_SIZE,
  SNAKE_START,
  HERO,
  SCALE,
  SPEED,
  DIRECTIONS,
  TREX_START
};