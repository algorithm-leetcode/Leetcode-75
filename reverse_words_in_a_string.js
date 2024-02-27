/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var arr = s.split(/\s+/)
    arr.reverse()

    var answer = "";
    for (str of arr) {
        answer += str;
        answer += " "
    }
    return answer.trimEnd()
};

console.log(reverseWords("  ha good   example  "));