let input = "Hello";

function reverseString() {
  let result = "";

  for (let i = input.length - 1; i >= 0; i--) {
    result = result + input[i];
  }

  return result;
}

let result = reverseString();
console.log(result);
