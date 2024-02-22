/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (isCanPlaceFlower(flowerbed, i)) {
      count++;
      flowerbed[i] = 1;
    }
  }

  return count >= n;
};

function isCanPlaceFlower(flowerbed, pos) {
  if (
    flowerbed[pos] === 0 &&
    (pos === 0 || flowerbed[pos - 1] === 0) &&
    (pos === flowerbed.length - 1 || flowerbed[pos + 1] === 0)
  )
    return true;
  return false;
}
