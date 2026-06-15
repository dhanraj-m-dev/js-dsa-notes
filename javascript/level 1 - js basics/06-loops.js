/**
 * Topic: Loops
 *
 * Summary:
 * - Loops are used to execute code repeatedly
 * - Common loops: for, while, do-while, for...in, for...of
 */

// for loop
let arr = [1, 3, 5, 6];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// while loop
let temp = 0;
while (temp < 3) {
  console.log("temp:", temp);
  temp++;
}

// do-while loop
let temp2 = 0;
do {
  console.log("runs at least once");
  temp2++;
} while (temp2 < 3);

// for...in (indexes / keys)
let arr2 = [2, 3, 4, 5];
for (let index in arr2) {
  console.log(index); // indexes
}

// for...of (values)
for (let value of arr2) {
  console.log(value); // values
}

// for...in with object
let person = { name: "dhanraj", age: 25 };
for (let key in person) {
  console.log(key, person[key]);
}

/**
 * Interview notes:
 * - for is used when index control is needed
 * - while is used when condition-based looping is required
 * - do-while runs at least once
 * - for...in gives keys/indexes
 * - for...of gives values (iterables only)
 */
