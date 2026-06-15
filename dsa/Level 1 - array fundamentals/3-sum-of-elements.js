const arr = [3, 1, 7, 2, 9, 4];
let sum = arr[0];
// Expected output: 26

for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}

console.log(sum, "SUM");
