/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var max_candies = 0
    for (var candy of candies) {
        max_candies = Math.max(candy, max_candies)
    }
    var answer = []

    for (var candy of  candies) {
        if (candy + extraCandies >= max_candies) {
            answer.push(true)
        } else {
            answer.push(false)
        }
    }
    return answer

};