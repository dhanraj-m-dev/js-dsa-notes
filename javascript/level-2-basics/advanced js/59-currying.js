/**
 * Topic: Currying
 *
 * One liner:
 * Currying transforms a multi argument function into a chain of
 * single argument functions - enabling reuse and specialization
 *
 * Summary:
 * - Breaks multi-arg function into sequence of single-arg function
 * - Each call returns next function until all args received
 * - Enables partial application - pre-fil some args, reuse later
 * - fn.length tells how many arguments a function expects
 */

//Basic currying
const curriedAdd = (a) => (b) => (c) => a + b + c;
console.log(curriedAdd(1)(2)(3)); //6

//Partial specialization
const add1 = curriedAdd(1);
console.log(add1(2)(3)); //6
console.log(add1(5)(10)); //16

//Real world - tax calculator
const calculateTax = (percentage) => (value) => (value * percentage) / 100;

const gst18 = calculateTax(18);
const gst28 = calculateTax(28);

console.log(gst18(100)); //18
console.log(gst28(200)); //56

//Generic curry function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return function (...moreArgs) {
      return curried(...args, ...moreArgs);
    };
  };
}

const multiply = (a, b, c) => a * b * c;
const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); //24
// console.log(curriedMultiply(2, 3)(4)); //24
