/**
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicateV1 = function(nums) {
  let counts = {};
  for (let i = 0; i < nums.length; i++) {
    if (!counts[nums[i]]) {
      count[nums[i]] = 1;
    } else {
      return true; // Found a duplicate
    }
  };
  return false;
};

const containsDuplicatesV2 = function(nums) {
  let uniqueSet = new Set(nums);
  return uniqueSet.size !== nums.length;
};

