const arr = [1, 2, 2, 3, 4, 4, 5];
// Expected output: [1, 2, 3, 4, 5]
let seen = {};
let duplicatesRemovedArr = [];

for (let i = 0; i < arr.length; i++) {
  let value = arr[i];
  if (seen[value] !== true) {
    seen[value] = true;
    duplicatesRemovedArr.push(value);
  }
}

console.log(duplicatesRemovedArr);

//Other approach
let unique = [...new Set(arr)];
console.log(unique, "UNIQUE");
