/**
 * stack으로 풀이 실패 -> 힌트 참고
 */

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var increasingTriplet = function (nums) {
//   const stack = [];

//   for (num of nums) {
//     if (stack.length && stack[stack.length - 1] >= num) {
//       while (stack.length) {
//         if (stack[stack.length - 1] >= num) stack.pop();
//         else break;
//       }
//       stack.push(num);
//     } else stack.push(num);

//     if (stack.length === 3) return true;
//   }

//   return false;
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let left = Infinity,
    right = Infinity;

  for (num of nums) {
    if (num <= left) left = num;
    else if (num <= right) right = num;
    else return true;
  }

  return false;
};
