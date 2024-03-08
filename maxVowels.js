/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const v = new Set(['a', 'e', 'i', 'o', 'u']);
  let cur = 0;

  for (let i = 0; i < k; i++) {
    if (v.has(s[i])) {
      cur++;
    }
  }

  let max = cur;

  for (let i = k; i < s.length; i++) {
    if (v.has(s[i])) {
      cur++;
    }

    if (v.has(s[i - k])) {
      cur--;
    }

    max = Math.max(max, cur);
  }

  return max;
};
