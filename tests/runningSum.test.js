import runningSum from '../exercises/runningSum';

test('calculate the running sum of an array and return a new array', () => {
  const nums = [1, 2, 3, 4, 5];
  const result = [1, 3, 6, 10, 15];
  expect(runningSum(nums)).toEqual(result);
});
