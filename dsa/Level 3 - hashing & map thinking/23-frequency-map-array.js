const input = [1, 2, 2, 3, 1, 1];
let output = {};

for (let i = 0; i < input.length; i++) {
  let value = input[i];

  if (output[value]) {
    output[value]++;
  } else {
    output[value] = 1;
  }

  //   output[value] ? output[value]++ : (output[value] = 1);
}

console.log(output, "OP");
