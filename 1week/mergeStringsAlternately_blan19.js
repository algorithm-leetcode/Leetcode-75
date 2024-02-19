/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
  return Array.from(
    { length: Math.max(word1.length, word2.length) },
    (_, i) => i
  ).reduce((acc, cur) => {
    return (
      acc + `${word1[cur] ? word1[cur] : ""}${word2[cur] ? word2[cur] : ""}`
    );
  }, "");
};
