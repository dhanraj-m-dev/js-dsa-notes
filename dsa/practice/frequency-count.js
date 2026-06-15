let array = [1, 2, 2, 3, 1];
let freq = {};

// Input : [1,2,2,3,1]
// Output : {1:2,2:2,3:1}

for (let i = 0; i < array.length; i++) {
  let value = array[i];

  if (freq[value]) {
    freq[value] = freq[value] + 1;
  } else {
    freq[value] = 1;
  }
}

console.log(freq, "FREQ");
