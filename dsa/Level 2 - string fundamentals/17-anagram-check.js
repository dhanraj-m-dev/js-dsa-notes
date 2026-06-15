const string1 = "listen";
const string2 = "silent";

function getHashMapValue(string) {
  let temp = {};

  for (let i = 0; i < string.length; i++) {
    value = string[i];
    if (temp[value]) {
      temp[value] = temp[value] + 1;
    } else {
      temp[value] = 1;
    }
  }

  return temp;
}

function checkAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let temp1 = getHashMapValue(string1);
  let temp2 = getHashMapValue(string2);

  for (let key in temp1) {
    if (temp1[key] !== temp2[key]) {
      return false;
    }
  }

  return true;
}

let isAnagram = checkAnagram(string1, string2);

console.log(isAnagram, "ISANAGRAM");
