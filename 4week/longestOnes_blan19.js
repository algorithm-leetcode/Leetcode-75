/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let count = 0,
    left = 0,
    right = 0,
    answer = Number.MIN_SAFE_INTEGER;

  if (k === 0 && nums.every((num) => !num)) return 0;

  while (right < nums.length) {
    console.log(left, right, count);
    if (!nums[right]) count++;
    while (count > k) {
      if (!nums[left]) count--;
      left++;
    }

    answer = Math.max(answer, right - left + 1);

    right++;
  }

  return answer;
};

console.log(longestOnes(nums, k));
