function getLongestWord(input) {
  let words = input.split(" ");
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    let word = words[i];

    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(getLongestWord("I love frontend engineering"));
