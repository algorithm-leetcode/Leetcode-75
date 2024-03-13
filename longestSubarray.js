/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let left = 0;
  let result = 0;
  let zeros = 0;

  for (let right = 0; right < nums.length; i++) {
    if (nums[right] === 0) {
      zeros++;
    }

    if (zeros <= 1) {
      result = Math.max(result, right - left);
    }

    if (zeros > 1) {
      if (nums[left] === 0) {
        zeros--;
      }
      left++;
    }
  }

  return result;
};
