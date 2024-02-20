/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    var len1 = str1.length
    var len2 = str2.length
    var gcd_length = gcd(len1, len2)
    var gcd_string = str1.substring(0, gcd_length)

    for (var index = 0 ; index < len1 / gcd_length ; index++) {
        var start_index = index * gcd_length;
        var end_index = start_index + gcd_length;
        if (str1.substring(start_index, end_index) != gcd_string) {
            return ""
        }
    }
    for (var index = 0 ; index < len2 / gcd_length ; index++) {
        var start_index = index * gcd_length;
        var end_index = start_index + gcd_length;
        if (str2.substring(start_index, end_index) != gcd_string) {
            return ""
        }
    }

    return gcd_string

};

function gcd(a, b) {
    if (b == 0) return a
    return gcd(b, a % b)
}

console.log(gcdOfStrings("LEET", "CODE"))