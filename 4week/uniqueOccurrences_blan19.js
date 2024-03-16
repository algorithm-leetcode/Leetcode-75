const arr = [1, 2, 2, 1, 1, 3];

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const hash = {};

  arr.forEach((num) => {
    if (hash[num]) hash[num]++;
    else hash[num] = 1;
  });

  return new Set(Object.values(hash)).size === Object.values(hash).length;
};

console.log(uniqueOccurrences(arr));
