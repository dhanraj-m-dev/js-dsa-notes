let input = "hello";
let outputObj = {};

for (let i = 0; i < input.length; i++) {
  let char = input[i];
  if (outputObj[char]) {
    outputObj[char]++;
  } else {
    outputObj[char] = 1;
  }
}

console.log(outputObj, "obj");
