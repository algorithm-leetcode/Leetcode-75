/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const answer = [];
  const max = Math.max(...candies);

  while (candies.length) {
    const candy = candies.shift();

    if (candy + extraCandies >= max) answer.push(true);
    else answer.push(false);
  }

  return answer;
};
