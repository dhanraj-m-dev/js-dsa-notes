const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagrams(input) {
  const hashmap = {};

  for (let i = 0; i < input.length; i++) {
    const value = input[i];
    const sortedValue = [...value].sort().join("");

    if (hashmap[sortedValue]) {
      hashmap[sortedValue].push(value);
    } else {
      hashmap[sortedValue] = [value];
    }
  }

  return Object.values(hashmap);
}

let groupedAnagrams = groupAnagrams(input);
console.log(groupedAnagrams, "Grouped anagrams");
