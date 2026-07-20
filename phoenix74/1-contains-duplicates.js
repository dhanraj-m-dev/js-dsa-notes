const arr = [1, 2, 3, 1];

function containsDuplicate(arr) {
  let seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (seen.has(value)) {
      return true;
    } else {
      seen.add(value);
    }
  }

  return false;
}

let haveDuplicate = containsDuplicate(arr);
console.log(haveDuplicate, "haveDuplicate");
