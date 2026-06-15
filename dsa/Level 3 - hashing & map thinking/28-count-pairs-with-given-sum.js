let input = [1, 5, 7, -1];
let target = 6;
let count = 0;
let seen = {};

//Brute force
// for (let i = 0; i < input.length; i++) {
//   for (let j = i + 1; j < input.length; j++) {
//     if (input[i] + input[j] === target) {
//       count++;
//     }
//   }
// }

// console.log(count, "COUNT");

for (let i = 0; i < input.length; i++) {
  let value = input[i];
  let complement = target - value;

  if (seen[complement]) {
    count++;
  }

  seen[value] = true;
}

console.log(count);
