/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (!(s.length || t.length)) return true;

  const chars = s.split("").reverse();

  for (const c of t.split("")) {
    if (chars[chars.length - 1] === c) chars.pop();
    if (!chars.length) return true;
  }

  return false;
};
