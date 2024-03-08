const s = "abciiidef",
  k = 3;

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let max = Number.MIN_SAFE_INTEGER;
  let count = 0;
  let left = 0,
    right = k - 1;

  for (let i = 0; i < k; i++) {
    if (isVowels(s[i])) count++;
  }

  max = Math.max(max, count);

  while (right <= s.length - 1) {
    left++;
    right++;

    if (isVowels(s[left - 1])) count--;
    if (isVowels(s[right])) count++;

    max = Math.max(max, count);
  }

  return max;
};

function isVowels(char) {
  return ["a", "e", "i", "o", "u"].includes(char);
}

console.log(maxVowels(s, k));
