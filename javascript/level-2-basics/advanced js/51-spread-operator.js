/**
 * Topic 51: Spread Operator (...)
 *
 * One liner:
 * Spread operator unpacks arrays or objects into individual
 * elements without mutating the original.
 *
 * Details:
 * - Arrays: combine, copy, add elements
 * - Objects: merge, copy, override properties
 * - Functions: pass array as individual arguments
 * - Creates NEW array/object — original never mutated
 * - Used heavily in React for immutable state updates
 */

//Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined, "combined");

//Objects
const user = { name: "Dhanraj", age: 26 };
const updatedUser = { ...user, age: 27 };
console.log(updatedUser, "Updated User");

//Functions
const nums = [5, 10, 15];
console.log(Math.max(...nums));

// React pattern — immutable state update
const updateState = (state, newAge) => ({ ...state, age: newAge });
console.log(updateState(user, 28)); // { name: "Dhanraj", age: 28 }
