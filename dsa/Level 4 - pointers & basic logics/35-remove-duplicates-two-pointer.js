let arr = [1, 1, 2, 2, 3, 4, 4];

function removeDuplicates(arr) {
  let write = 0;
  let read = 1;

  while (read < arr.length) {
    if (arr[write] === arr[read]) {
      arr[read] = arr[read + 1];
    } else {
      read++;
    }
  }

  return arr;
}

let duplicatesRemovedArray = removeDuplicates(arr);
console.log(duplicatesRemovedArray, "durem");
