const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = -Infinity,
    left = 0,
    right = height.length - 1;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);

    if (max < area) max = area;

    if (height[left] < height[right]) left += 1;
    else right -= 1;
  }

  return max;
};

console.log(maxArea(height));

// todo:
