const arr = [1, 2, 3, 4, 5];
let sorted = true;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    sorted = false;
  }
}

console.log(sorted, "SORTED");
