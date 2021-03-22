/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Attempt - 1
var findErrorNums = function (nums) {
  let missingArr = [];
  let seen = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === seen) {
      missingArr.push(nums[i], nums[i] + 1);
    } else if (nums[i] != seen) {
      seen = nums[i];
    }
  }
  return missingArr;
};

// Working Solution

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const results = [];
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    if (set.has(currentNum)) {
      // found duplicate
      results.push(currentNum);
    } else {
      set.add(currentNum);
    }
  }

  // now numSet will have only unique numbers
  const numSet = new Set(nums);
  let i = 1;
  while (i <= nums.length + 1) {
    if (!numSet.has(i)) {
      // found missing number
      results.push(i);
      return results;
    }
    i += 1;
  }
};
