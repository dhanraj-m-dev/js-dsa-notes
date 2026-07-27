const string = "anagram";
const string2 = "nagaram";

function getHashMap(string) {
  let temp = {};

  for (let i = 0; i < string.length; i++) {
    let value = string[i];

    if (temp[value]) {
      temp[value] += 1;
    } else {
      temp[value] = 1;
    }
  }

  return temp;
}

function findAnagram(string, string2) {
  let string1Hashmap = getHashMap(string);
  let string2Hashmap = getHashMap(string2);

  if (string.length !== string2.length) {
    return false;
  }

  for (const key in string1Hashmap) {
    if (string1Hashmap[key] !== string2Hashmap[key]) {
      return false;
    }
  }

  return true;
}

let isAnagram = findAnagram(string, string2);
console.log(isAnagram, "IS ANAGRAM");
