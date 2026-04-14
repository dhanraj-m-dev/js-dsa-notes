// Input: ([1, 2, 3, 4, 5], (k = 2));

let arr = [1, 2, 3, 4, 5];
let k = 2;

k = k % arr.length; // edge case

for (let i = 0; i < k; i++) {
  let value = arr.pop();
  arr.unshift(value);
}

console.log(arr);
