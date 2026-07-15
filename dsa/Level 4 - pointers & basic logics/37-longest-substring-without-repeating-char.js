const input = "abcabcbb";

function lengthOfLongestSubstring(s) {
  let left = 0;
  let seen = new Set();
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    seen.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

let lengthOfLongestSubstr = lengthOfLongestSubstring(input);
console.log(lengthOfLongestSubstr, "LENGTH OF LONGEST SUB STRING");
