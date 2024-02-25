/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const sArr = s.split(' ');
  const filtered = sArr.filter((el) => el !== '');

  let start = 0;
  let end = filtered.length - 1;

  while (start < end) {
    const temp = filtered[end];
    filtered[end] = filtered[start];
    filtered[start] = temp;
    start++;
    end--;
  }

  return filtered.join(' ');
};
