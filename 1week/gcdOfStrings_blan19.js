/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function (str1, str2) {
  const gcdLength = gcd(str1.length, str2.length);
  const gcdWord = str1.slice(0, gcdLength);

  if (
    isGcdWord(gcdWord, str1, gcdLength) &&
    isGcdWord(gcdWord, str2, gcdLength)
  )
    return gcdWord;

  return "";
};

function isGcdWord(word, target, gcd) {
  if (word.repeat(target.length / gcd) === target) return true;
  return false;
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
