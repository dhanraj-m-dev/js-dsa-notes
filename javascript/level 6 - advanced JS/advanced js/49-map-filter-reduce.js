/**
 * Topic : Map, Filter, Reduce
 *
 * Summary :
 * - map - Transforms every element and returns same length array
 * - filter - Keeps elements that pass condition returns shorter array.
 * - reduce - Collapses the array into single value (number/string/object)
 * - All three returns new arrays - original is never mutated
 * - can be chained together for powerful transformations.
 */

// Map
const nums = [1, 2, 4, 5];
const doubledNums = nums.map((value) => value * 2);
console.log(doubledNums, "DN");

//Filter
const evens = [1, 2, 4, 5, 6];
const evenNumbers = evens.filter((value) => value % 2 === 0);
console.log(evenNumbers, "EN");

//Reduce
const sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(sum, "SUM");

//Chaining
const orders = [
  { id: 1, amount: 100, paid: true },
  { id: 2, amount: 200, paid: false },
  { id: 3, amount: 300, paid: true },
];

const total = orders
  .filter((o) => o.paid)
  .map((o) => o.amount)
  .reduce((acc, cur) => acc + cur, 0);

console.log(total);
