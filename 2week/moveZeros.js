/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let z = 0;
  let n = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      n++;
    } else {
      if (z < n) {
        nums[z] = nums[n];
        nums[n] = 0;
        z++;
        n++;
      } else {
        z++;
        n++;
      }
    }
  }
};
