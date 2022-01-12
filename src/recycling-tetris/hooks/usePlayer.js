import { useState, useCallback } from 'react';

import { Hero } from '../components/characters/Hero.jsx'


export const usePlayer = () => {
    const [player, setPlayer] = useState({
      pos: { x: 0, y: 0 },
      hero: Hero[0].shape,
      /*collided: false,*/
    });

  const updatePlayerPos = ({ x, y/*, collided */}) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      /*collided,*/
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      collided: false,
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer]
}  