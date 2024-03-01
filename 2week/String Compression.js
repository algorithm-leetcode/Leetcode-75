/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let i = 0,
    len = 0;

  while (i < chars.length) {
    let cur = chars[i];
    chars[len++] = cur;

    let count = 0;
    while (i < chars.length && cur == chars[i]) {
      count++;
      i++;
    }

    if (count > 1) {
      count = count.toString().split('');
      for (let c of count) {
        chars[len++] = c;
      }
    }
  }

  return len;
};
