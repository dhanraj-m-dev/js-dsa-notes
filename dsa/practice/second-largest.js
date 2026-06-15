const arr = [3, 1, 7, 2, 9, 4];
let max = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    secondLargest = max;
    max = arr[i];
  }

  if (arr[i] < max && arr[i] > secondLargest) {
    secondLargest = arr[i];
  }
}

console.log(secondLargest, "Second Largest");
