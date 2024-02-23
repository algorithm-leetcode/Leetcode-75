var reverseVowels = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const sArr = [...s];

  const vowelIndices = sArr.reduce((acc, cur, idx) => {
    if (vowels.includes(cur.toLowerCase())) {
      acc.push(idx);
    }
    return acc;
  }, []);

  let start = 0;
  let end = vowelIndices.length - 1;

  while (start < end) {
    const temp = sArr[vowelIndices[start]];
    sArr[vowelIndices[start]] = sArr[vowelIndices[end]];
    sArr[vowelIndices[end]] = temp;
    start++;
    end--;
  }

  return sArr.join('');
};
