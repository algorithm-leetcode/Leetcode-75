/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const pre = Array.from({ length: nums.length }, () => 1);
  const post = Array.from({ length: nums.length }, () => 1);

  let multi = 1;

  nums.forEach((num, index) => {
    pre[index] = multi;
    multi *= num;
  });

  multi = 1;

  nums.reverse().forEach((num, index) => {
    post[index] = multi;
    multi *= num;
  });

  return post.reverse().map((postNum, index) => postNum * pre[index]);
};
