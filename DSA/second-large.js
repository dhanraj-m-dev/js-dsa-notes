let array = [2, 4, 5, 6];

let max = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    secondMax = max;
    max = array[i];
  } else if (array[i] > secondMax && array[i] !== max) {
    secondMax = array[i];
  }
}

console.log(secondMax);
