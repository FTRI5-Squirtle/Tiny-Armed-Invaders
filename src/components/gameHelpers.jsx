export const STAGE_WIDGTH = 12;
export const STAGE_HEIGHT = 20;

export const createSpace = () => 
    Array.from(Array(STAGE_HEIGHT), () => 
      new Array(STAGE_WIDGTH).fill([0, 'clear'])
    )