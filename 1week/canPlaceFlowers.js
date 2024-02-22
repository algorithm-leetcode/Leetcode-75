/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = n;

  for (let i = 0; i < flowerbed.length && count > 0; i++) {
    if (
      flowerbed[i] !== 1 &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) &&
      (i === 0 || flowerbed[i - 1] === 0)
    ) {
      flowerbed[i] = 1;
      count--;
      i++;
    }
  }

  return count === 0;
};
