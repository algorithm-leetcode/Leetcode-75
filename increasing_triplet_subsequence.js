/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    var minVal = 9999999999999999;
    var possible = false;
    var answer_lower_bound = 9999999999999999;

    for (var num of nums) {
        if (num < minVal) {
            minVal = num;
            continue;
        }
        if (possible && num > answer_lower_bound) {
            return true;
        }
        if (num > minVal) {
            possible = true;
            answer_lower_bound = Math.min(answer_lower_bound, num)
        }
    }
    return false;
};