function mergeAlternately(word1: string, word2: string): string {
  const w1 = word1.split('');
  const w2 = word2.split('');
  const merged = [''];

  w1.map((c, idx) => {
    merged.push(
      c,
      idx < w1.length - 1 ? w2[idx] || '' : w2.slice(idx).join('')
    );
  });

  return merged.join('');
}
