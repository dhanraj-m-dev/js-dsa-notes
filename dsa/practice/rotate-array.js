function rotateRight(arr, k) {
  if (arr.length === 0) return arr;

  k = k % arr.length;

  for (let r = 0; r < k; r++) {
    let last = arr[arr.length - 1];

    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }

    arr[0] = last;
  }

  return arr;
}

console.log(rotateRight([1, 2, 3, 4, 5], 2));
