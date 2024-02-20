var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return '';
  }

  const m = str1.length;
  const n = str2.length;

  const gcd = (x, y) => {
    if (!y) return x;
    return gcd(y, x % y);
  };

  const d = gcd(m, n);
  return str1.slice(0, d);
};
