/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const words = [];
  let word = "";

  s.split("").forEach((char, index) => {
    if (isBlank(char)) {
      words.push(word);
      word = "";
      return;
    }

    word += char;

    if (index === s.length - 1) words.push(word);
  });

  return words
    .filter((word) => word.length)
    .reverse()
    .join(" ");
};

function isBlank(char) {
  if (char.charCodeAt() === 32) return true;
  return false;
}
