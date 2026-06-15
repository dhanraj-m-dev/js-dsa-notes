let input = "aabbcdde";

function getNonRepeatingFirstChar(input) {
  let temp = {};

  for (let i = 0; i < input.length; i++) {
    let value = input[i];

    if (temp[value]) {
      temp[value] = temp[value] + 1;
    } else {
      temp[value] = 1;
    }
  }

  for (let char of input) {
    if (temp[char] === 1) {
      return char;
    }
  }

  return null;
}

let nonRepeatingChar = getNonRepeatingFirstChar(input);

console.log(nonRepeatingChar, "nonRepeatingChar");
