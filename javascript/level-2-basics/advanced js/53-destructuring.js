/**
 * Topic : Destructuring
 *
 * One Liner:
 * - Destructuring extracts values from array or objects into variables without using index or dot notation.
 *
 * Summary:
 * - Array destructuring -  Position based extraction
 * - Object destructuring - name-based extraction
 * - Can rename variables while destructuring
 * - Can set default values for missing properties
 * - Used in function parameters - Very common in react
 * - Can destructure nested objects
 */

//Array destructuring
const [first, second, third] = [1, 2, 3];
console.log(first, second, third); //1,2,3

//Object destructuring
const user = { name: "dhanraj", age: 26, city: "Chennai" };
const { name, age, city } = user;
console.log(name, age, city); // dhanraj 26 chennai

//Renaming
const { name: firstName } = user;
console.log(firstName); //dhanraj

//Default values
const { country = "India" } = user;
console.log(country); //India

//In func parameters
function greet({ name, age }) {
  console.log(`${name} is ${age} years old`);
}

greet(user); //Dhanraj is 26 year old

//Nested
const profile = { name: "Dhanraj", address: { city: "Chennai" } };
const {
  address: { city: myCity },
} = profile;
console.log(myCity); // Chennai
