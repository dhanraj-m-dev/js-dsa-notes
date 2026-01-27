//Find max
let array = [5, 4, 6, 20];
let temp = array[0];

for (let i = 1; i < array.length; i++) {
  if (temp < array[i]) {
    temp = array[i];
  }
}
