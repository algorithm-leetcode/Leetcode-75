/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let first = Number.MAX_SAFE_INTEGER,
    second = Number.MAX_SAFE_INTEGER;
  for (let num of nums) {
    if (num < first) {
      first = num;
    }
    if (num > first) {
      second = Math.min(num, second);
    }
    if (num > second) {
      return true;
    }
  }
  return false;
};
