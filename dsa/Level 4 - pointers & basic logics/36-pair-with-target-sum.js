let sortedArr = [1, 2, 3, 4, 6];

let target = 6;

function hasPairEqualtoTargetSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return true;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

let hasPair = hasPairEqualtoTargetSum(sortedArr);

console.log(hasPair);
