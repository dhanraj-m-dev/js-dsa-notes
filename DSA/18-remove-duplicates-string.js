let input = "aabbccdde";

const output = [...new Set(input)].join("");

console.log(output);

//Another way
function removeDuplicates(input) {
  let temp = {};
  let output = "";

  for (let char of input) {
    if (!temp[char]) {
      temp[char] = true;
      output += char;
    }
  }

  return output;
}
