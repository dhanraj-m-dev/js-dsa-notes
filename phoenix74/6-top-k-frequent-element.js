const nums = [5, 5, 5, 2, 2, 7];
const k = 2;

function findTopKthFreqElement(nums, k) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];

    if (hashMap[value]) {
      hashMap[value] += 1;
    } else {
      hashMap[value] = 1;
    }
  }

  const convertedHashMap = Object.entries(hashMap);

  let orderedValue = convertedHashMap
    .sort((val1, val2) => val2[1] - val1[1])
    .slice(0, k);

  return orderedValue.map((value) => value[0]);
}

let topKthFreqElement = findTopKthFreqElement(nums, k);

console.log(topKthFreqElement, "Output");
