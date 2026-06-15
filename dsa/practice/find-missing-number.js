let input = [1, 2, 3, 4];

function findMissingNumber(input) {
  let n = input.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = input[0];

  for (let i = 1; i < input.length; i++) {
    actualSum = actualSum + input[i];
  }

  let missingNumber = expectedSum - actualSum;

  return missingNumber;
}

let value = findMissingNumber(input);
console.log(value, "value");
