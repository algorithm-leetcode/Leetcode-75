// Solution
// 메모리랑 런타임이 너무 느림

var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);

  for (let i = 0; i < candies.length; i++) {
    console.log(candies[i]);
    if (candies[i] + extraCandies >= max) {
      candies[i] = true;
    } else {
      candies[i] = false;
    }
  }

  return candies;
};

// Best Solution
// 고차함수 활용
var kidsWithCandies = function (candies, extraCandies) {
  return candies.map((ele) => ele + extraCandies >= Math.max(...candies));
};
