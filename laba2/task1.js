function getWords(words) {
  return words.split(" ").filter(function (n) {
    if (n.includes("#")) {
      return n;
    }

  }).map(word => word.replace(/#/, ''));

}
console.log(
  getWords('Прохожу курс в компании #senla по #javascript')
)