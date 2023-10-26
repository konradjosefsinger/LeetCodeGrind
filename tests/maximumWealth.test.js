import { maximumWealth } from '../exercises/maximumWealth.js';

test('return the highest accumulated sum in an array of arrays', () => {
  const accounts = [[2,8,7],[7,1,3],[1,9,5]];
  expect(maximumWealth(accounts)).toEqual(17);
});