/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) return true;

  let now = 0;
  let a = [...s];
  let b = [...t];

  for (let i = 0; i < b.length; i++) {
    if (b[i] === a[now]) {
      if (now === a.length - 1) return true;
      now++;
    }
  }

  return false;
};
