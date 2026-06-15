const arr1 = [1, 2, 3, 2];
const arr2 = [2, 1, 2, 3];

function getHashMap(arr) {
  let temp = {};

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (temp[value]) {
      temp[value]++;
    } else {
      temp[value] = 1;
    }
  }

  return temp;
}

function checkArraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let hashMap1 = getHashMap(arr1);
  let hashMap2 = getHashMap(arr2);

  for (let key in hashMap1) {
    if (hashMap1[key] !== hashMap2[key]) {
      return false;
    }
  }

  return true;
}

let isEqual = checkArraysAreEqual(arr1, arr2);

console.log(isEqual, "Is equal");
