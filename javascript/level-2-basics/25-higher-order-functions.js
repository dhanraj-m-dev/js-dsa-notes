/**
 * Topic : Higher Order Function
 *
 * - A higher order function is a function that takes a function as an argument or returns a function.
 * - This allows reuse and abstraction of behaviour
 */

// Example:
const returnName = () => {
  return "Dhanraj";
};

const sayHi = (getName) => {
  const name = getName();
  console.log(`Hello ${name}`);
};

sayHi(returnName);
