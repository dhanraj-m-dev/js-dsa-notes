const arr = [1, 2, 3, 4, 5];
let reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}

console.log(reversedArr, "RA");

// Two pointers method
const arr2 = [5, 4, 3, 2, 1];
let left = 0;
let right = arr2.length - 1;
while (left < right) {
  let temp = arr2[left];
  arr2[left] = arr2[right];
  arr2[right] = temp;
  left++;
  right--;
}

console.log(arr2, "ARR2");
