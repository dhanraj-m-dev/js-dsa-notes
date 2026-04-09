const arr = [1, 2, 2, 3, 3, 3, 4];
const frequency = {};

for (let i = 0; i < arr.length; i++) {
  let value = arr[i];

  if (frequency[value]) {
    frequency[value] += 1;
  } else {
    frequency[value] = 1;
  }
}

console.log(frequency); // { 1: 1, 2: 2, 3: 3, 4: 1 }

//Alternative idea for if else
// frequency[value] = (frequency[value] || 0) + 1;
