let array = [1, 2, 3, 2, 4, 1];
let freq = {};
let duplicates = [];

// Build frequency map
for (let i = 0; i < array.length; i++) {
  let value = array[i];
  freq[value] = (freq[value] || 0) + 1;
}

// Find duplicates
for (let key in freq) {
  if (freq[key] > 1) {
    duplicates.push(Number(key));
  }
}

console.log(duplicates);
