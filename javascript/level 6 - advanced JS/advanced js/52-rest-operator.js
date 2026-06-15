/**
 * Topic: Rest Operator
 *
 * One liner:
 * Rest operator collects the leftover elements into an array or object.
 *
 * Details:
 * - Arrays: gather remaining elements into a new array
 * - Objects: collect remaining properties into a new object
 * - Functions: gather remaining arguments into an array
 * - Creates NEW array/object — original never mutated
 * - Used for flexible function parameters and destructuring
 *  - Rest must always be LAST — ❌ const [...rest, a, b]
 */

//In functions
function sum(...numbers) {
  console.log(numbers, "numbers"); //[1, 2, 3];

  return numbers.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(1, 2, 3));

//In destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first, "first"); //1
console.log(second, "second"); //2
console.log(rest, "rest"); //[3,4,5]

//In object destructuring
const { name, ...remaining } = { name: "Dhanraj", age: 26, city: "coimbatore" };
console.log(name, "name");
console.log(remaining, "remaining");
