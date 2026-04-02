const arr = [3, 1, 7, 2, 9, 4];
// Find max → 9
// Find min → 1

let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }

  if (min > arr[i]) {
    min = arr[i];
  }
}

console.log(max, "max");
console.log(min, "min");
