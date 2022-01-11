export const STAGE_WIDTH = 16;
export const STAGE_HEIGHT = 20;
export const EARTH_HEIGHT = 1;

// const counter = 0;
export const createSpace = () => 
    Array.from(Array(STAGE_HEIGHT), () => 
      new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

export const createEarth = () => 
    Array.from(Array(EARTH_HEIGHT), () => 
      new Array(STAGE_WIDTH).fill([0, 'clear'])
    )    

// export const createSpace = (STAGE_WIDTH, STAGE_HEIGHT) => {
//   const outer = [];
//   for (let i = 0; i < STAGE_HEIGHT; i++) {
//     const inner = [];
//     for (let j = 0; j < STAGE_WIDTH; j++) {
//         inner.push([i, 'clear'])
//     }
//     outer.push(inner);
//   }
//   return outer;
// }