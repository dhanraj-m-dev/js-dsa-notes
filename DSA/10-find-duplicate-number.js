let arr = [1, 3, 4, 2, 2];
let temp = {};
let duplicate = null;

for (let i = 0; i < arr.length; i++) {
  let value = arr[i];
  if (temp[value]) {
    duplicate = value;
    break;
  }
  temp[value] = true;
}

console.log(duplicate, "duplicate");
