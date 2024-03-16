/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  return Math.max(
    ...gain.reduce((acc, cur) => [...acc, acc[acc.length - 1] + cur], [0])
  );
};
