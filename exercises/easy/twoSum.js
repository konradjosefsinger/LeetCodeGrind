/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function (nums, target) {
  let numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap[complement] !== undefined) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }
}
// this solution utilizes a hashmap and has a time complexity of O(n)
// -> We use an object 'numMap' to keep track of numbers we've seen so far and their indices.
// -> For each number in the 'nums' array, we compute its 'complement' (i.e., 'target' minus the current number).
// -> We check if this complement exists in our map. If it does, it means we've found the two numbers that sum up to the target, and we return their indices.
// -> Otherwise, we add the current number and its index to the map and continue.