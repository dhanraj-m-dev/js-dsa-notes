const arr = [1, 2, 3, 2, 2, 4, 1];

function getMaxFreq(arr) {
  let freqMap = {};

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (freqMap[value]) {
      freqMap[value]++;
    } else {
      freqMap[value] = 1;
    }
  }

  let maxFreq = Math.max(...Object.values(freqMap));

  for (let key in freqMap) {
    if (freqMap[key] === maxFreq) {
      return Number(key);
    }
  }
}

console.log(getMaxFreq(arr));
