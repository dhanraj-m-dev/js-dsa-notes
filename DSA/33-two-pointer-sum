let arr = [1, 2, 3, 4, 6, 8, 11];
let target = 10;

function hasPairWithSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) return true;

    if (sum > target) right--;
    else left++;
  }

  return false;
}

let hasTwoPointerSum = hasPairWithSum(arr);
console.log(hasTwoPointerSum, "hasTwoPointerSum");
