const str = "aabccdeff";

function getNonRepeatingCharacter(str) {
  let temp = {};

  for (let i = 0; i < str.length; i++) {
    let value = str[i];

    if (temp[value]) {
      temp[value]++;
    } else {
      temp[value] = 1;
    }
  }

  for (let char of str) {
    if (temp[char] === 1) {
      return char;
    }
  }
}

let nonRepeatingChar = getNonRepeatingCharacter(str);
console.log(nonRepeatingChar, "nonRepeatingChar");
