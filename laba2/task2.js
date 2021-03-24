function normalizeWords(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i - 1]) {
      words.splice(i, 1);
      i--;
      str = words.join(', ');
    }
  }
  str = str.toLowerCase();
  return str;
}
console.log(normalizeWords(['web', 'web', 'JavaScript', 'script', 'programming', 'programming']))
