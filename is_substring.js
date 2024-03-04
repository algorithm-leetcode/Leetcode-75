/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var index1 = 0;
    var index2 = 0;

    while(index2 < t.length && index1 < s.length) {
        if (t.charAt(index2) == s.charAt(index1)) {
            index1 += 1;
        }
        index2 += 1;
    }
    return index1 == (s.length)
};