/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const stack = [];
  return s
    .split("")
    .map((char) => {
      if (isVowel(char)) stack.push(char);
      return char;
    })
    .map((char) => {
      if (isVowel(char)) return stack.pop();
      return char;
    })
    .join("");
};

function isVowel(char) {
  if (["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(char))
    return true;
  return false;
}
