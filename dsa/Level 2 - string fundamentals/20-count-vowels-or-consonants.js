const input = "frontEnd";

function countVowelsAndConsonants(input) {
  let lowerCaseInput = input.toLowerCase();
  let output = {
    vowels: 0,
    consonants: 0,
  };

  for (let i = 0; i < lowerCaseInput.length; i++) {
    let value = lowerCaseInput[i];

    if (value >= "a" && value <= "z") {
      if ("aeiou".includes(value)) {
        output.vowels++;
      } else {
        output.consonants++;
      }
    }
  }

  return output;
}

let output = countVowelsAndConsonants(input);
console.log(output, "OP");
