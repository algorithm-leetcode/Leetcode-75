/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    var index = 0
    var answer = ""
    for (index = 0 ; index < Math.max(word1.length, word2.length) ; index++) {
        if (index < word1.length) {
            answer = answer + word1.charAt(index)
        }
        if (index < word2.length) {
            answer = answer + word2.charAt(index)
        }
    }
    return answer
};