// /**
//  * @param {character[]} chars
//  * @return {number}
//  */
// var compress = function (chars) {
//   let map = {};

//   for (let i = 0; i < chars.length; i++) {
//     if (!!map[chars[i]]) {
//       map[chars[i]] += 1;
//     } else {
//       map[chars[i]] = 1;
//     }
//   }

//   chars.splice(0);

//   for (const [key, value] of Object.entries(map)) {
//     chars.push(key);
//     if (value === 1) continue;

//     if (value < 10) {
//       chars.push(`${value}`);
//     } else {
//       const formated = value.toString().split('');
//       chars.push(...formated);
//     }
//   }

//   return chars.length;
// };

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  if (!chars.length) return 0;
  let j = 0;
  let cur = chars[0];
  let counter = 0;
  for (let i = 0; i <= chars.length; i++) {
    if (chars[i] === cur) {
      counter++;
    } else {
      chars[j] = cur;
      if (counter > 1) {
        const s = counter.toString();
        for (let k = 0; k < s.length; k++) chars[++j] = s[k];
      }
      j++;
      cur = chars[i];
      counter = 1;
    }
  }
  return j;
};
