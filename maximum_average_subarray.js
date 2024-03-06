/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var sumArray = Array(nums.length + 1).fill(0)
    for (var index = 0 ; index < nums.length ; index++) {
        sumArray[index + 1] = sumArray[index] + nums[index]
    }

    var answer = -99999999999999.0
    for (var i = 1 ; i <= nums.length ; i++) {
        if (i + k > nums.length) {
            break;
        }
    }

};