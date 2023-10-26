/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElementV1 = function (nums) {
  const countMap = {};
  for (let i = 0; i < nums.length; i++) {
    countMap[nums[i]] = (countMap[nums[i]] || 0) + 1;
    if (countMap[nums[i]] > nums.length / 2) {
      return nums[i];
    }
  }
};

// *** *** *** *** *** //
// Boyer-Moore Voting Algorithm
// -> Initialize two variables, 'candidate' and 'count'. The 'candidate' will store the current candidate for the majority element, and 'count' will store the count of this candidate.
// This solution is more efficient than the previous one, because it only requires a single pass through the array and uses constant space.

const majorityElementV2 = function (nums) {
  let count = 0;
  let candidate = null;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }
  return candidate;
};
