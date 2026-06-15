function isPalindrome(input) {
  let first = 0;
  let last = input.length - 1;

  while (first < last) {
    if (input[first] !== input[last]) {
      return false;
    }

    first++;
    last--;
  }

  return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
