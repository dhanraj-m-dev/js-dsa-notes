let input = ["eat", "tea", "tan", "ate", "nat", "bat"];

// {
//   aet: ["eat", "tea", "ate"],
//   ant: ["tan", "nat"],
//   abt: ["bat"]
// }

function sortWord(word) {
  let temp = word.split("").sort().join("");
  return temp;
}

function groupAnagram(input) {
  let hashMap = {};
  let groupedAnagram = [];

  for (let i = 0; i < input.length; i++) {
    let value = input[i];
    let sortedValue = sortWord(value);

    if (hashMap[sortedValue]) {
      hashMap[sortedValue].push(value);
    } else {
      hashMap[sortedValue] = [value];
    }
  }

  return Object.values(hashMap);
}

let group = groupAnagram(input);
console.log(group, "GROUP");
