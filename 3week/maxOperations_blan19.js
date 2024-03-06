// const nums = [1, 2, 3, 4],
//   k = 5;

// const nums = [3, 1, 3, 4, 3],
//   k = 6;

const nums = [2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2],
  k = 3;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const hash = {};
  let operation = 0;

  nums.forEach((num) => {
    if (hash[num]) hash[num] = hash[num] + 1;
    else hash[num] = 1;
  });

  nums.forEach((num) => {
    if (hash[k - num] && hash[k - num] > 0 && hash[num] > 0) {
      if (k - num === num && hash[num] <= 1) return;
      operation++;
      hash[num]--;
      hash[k - num]--;
    }
  });

  return operation;
};

console.log(maxOperations(nums, k));

// todo: [2,5,4,4,1,3,4,4,1,4,4,1,2,1,2,2,3,2,4,2]
// todo: [5,4,4,3,4,4,1,4,4,1,2,1,2,2,3,2,4,2]  => 1
// todo: [5,4,4,3,4,4,4,4,1,1,2,2,3,2,4,2]  => 2
// todo: [5,4,4,3,4,4,4,4,1,2,3,2,4,2]  => 3
// todo: [5,4,4,3,4,4,4,4,3,2,4,2]  => 4
