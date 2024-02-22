/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    var answer = n;
    var continuous_zeroes = 0;

    flowerbed.unshift(0)
    flowerbed.push(0)

    for (var flower of flowerbed) {
        if (flower == 0) {
            continuous_zeroes += 1;
        }
        else {
            answer -= Math.floor((continuous_zeroes - 1)/2)
            continuous_zeroes = 0;
        }
        //console.log(answer + " " + continuous_zeroes)
    }
    answer -= Math.floor((continuous_zeroes - 1)/2)
    return answer <= 0;
};

console.log(canPlaceFlowers([0, 1, 0], 1))