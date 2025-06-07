import { randomBytes } from 'crypto';

export const getRandomNumber = (min, max) => {
  const randomValue = randomBytes(1)[0];
  return Math.floor(randomValue / 256 * (max - min + 1)) + min;
};