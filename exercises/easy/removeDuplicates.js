/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [1,1,2,2,3,3,4,5,6,6,6];

const removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  let i = 1;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i-1]) {
      nums[i] = nums[j];
      i++;
    }
  }
  nums.length = i;
  return nums;
};

console.log(removeDuplicates(nums));

// Time Complexity: O(n), where n is the number of elements in the array. This is because we iterate through the array a single time with our 'j' pointer.
// Space Complexity: O(1), as the operation is done in-place and doesn't use additional space proportional to the input size.