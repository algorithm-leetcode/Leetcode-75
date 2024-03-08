const nums = [5],
  k = 1;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let max = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  let left = 0,
    right = k - 1;

  for (let i = 0; i <= right; i++) {
    sum += nums[i];
  }

  while (right <= nums.length - 1) {
    if (max <= sum) max = sum;

    right++;
    left++;

    sum = sum - nums[left - 1] + nums[right];
  }

  return Number(max / k).toFixed(5);
};

console.log(findMaxAverage(nums, k));
