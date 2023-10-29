/**
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = function(nums) {
  const count = {};
  for (let i = 0; i < nums.length; i++) {
    if (!count[nums[i]]) {
      count[nums[i]] = true;
    } else {
      delete count[nums[i]];
    };
  };
  return parseInt(Object.keys(count)[0]);
};

// solution with bitwise operation
// -> This solution has a time complexity of O(n) and a space complexity of O(1)
// => I you XOR every number in the list, all the numbers that appear twice will cancel each other out, and you'll be left with the single number that appears only once

const singleNumberBitwise = function(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
  }
  return result;
};