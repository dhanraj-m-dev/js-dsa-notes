// Input: [0, 1, 0, 3, 12];
// Output: [1, 3, 12, 0, 0];

let input = [0, 1, 0, 3, 12];
let output = [];

for (let i = input.length - 1; i >= 0; i--) {
  let value = input[i];

  value === 0 ? output.push(value) : output.unshift(value);
}

console.log(output);

//Approach 2
let arr = [0, 1, 0, 3, 12];
let last = arr[arr.length - 1];
let first;

for (let i = 0; i < arr.length; i++) {
  let value = arr[i];

  if (value === 0) {
    arr.push(0);
  }
}

console.log(arr);
