const input = "aaabbccccd";

function compressString(input) {
  let output = "";

  let prev = input[0];
  let currentCount = 1;

  for (let i = 1; i < input.length; i++) {
    let currentValue = input[i];

    if (prev === currentValue) {
      currentCount++;
    } else {
      output += prev + currentCount;

      prev = currentValue;
      currentCount = 1;
    }
  }

  // last group
  output += prev + currentCount;

  return output;
}

console.log(compressString(input));
