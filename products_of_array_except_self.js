/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var prefix = [];
    var suffix = [];

    for (var number in nums) {
        if (number == 0) {
            prefix.push(nums[0])
        } else {
            prefix.push(nums[number] * prefix[number - 1]);
        }
    }

    nums.reverse()
    for (var number in nums) {
        if (number == 0) {
            suffix.push(nums[0])
        } else {
            suffix.push(nums[number] * suffix[number - 1]);
        }
    }
    var n = nums.length
    prefix.push(1)
    prefix.unshift(1)
    suffix.push(1)
    suffix.unshift(1)

    answer = []
    for (var i = 1 ; i <= n ; i++) {
        answer.push(prefix[i - 1] * suffix[n - i])
    }
    return answer;
};
