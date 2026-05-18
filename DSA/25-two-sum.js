const input = [2, 7, 11, 15];
const target = 9;

let temp = {};

for (let i = 0; i < input.length; i++) {
  let value = input[i];
  let needed = target - value;

  if (temp[needed] !== undefined) {
    console.log([temp[needed], i]);
    break;
  } else {
    temp[value] = i;
  }
}
