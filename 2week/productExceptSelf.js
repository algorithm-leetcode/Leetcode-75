/**
 * @param {number[]} nums
 * @return {number[]}
 */

function productExceptSelf(nums) {
  let left = new Array(5).fill(1);
  let right = new Array(5).fill(1);
  let answer = new Array(5).fill(1);

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * num[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    answer[i] = left[i] * right[i];
  }

  return answer;
}
