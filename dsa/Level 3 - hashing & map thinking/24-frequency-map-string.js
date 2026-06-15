const input = "frontend";
let temp = {};
for (let i = 0; i < input.length; i++) {
  let value = input[i];

  if (temp[value]) {
    temp[value]++;
  } else {
    temp[value] = 1;
  }
}

console.log(temp, "OP");
