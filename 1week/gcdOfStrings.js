/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function (str1, str2) {
  function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
  const gcdLength = gcd(str1.length, str2.length);
  const gcdString = str1.slice(0, gcdLength);

  if (str1 + str2 === str2 + str1) {
    return gcdString;
  } else {
    return '';
  }
};
