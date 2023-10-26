import { twoSum } from '../exercises/twoSum';

test('find indices of two numbers that add up to the target', () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  expect(twoSum(nums, target)).toEqual([0, 1]);
});

test('return undefined if no solution is found', () => {
  const nums = [1, 2, 3, 4];
  const target = 10;
  expect(twoSum(nums, target)).toBeUndefined();
});
