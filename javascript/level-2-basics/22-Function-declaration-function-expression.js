/**
 * Topic: Function Declaration vs Function Expression
 *
 * Summary:
 * - Function declaration uses the 'function' keyword and has a name
 * - Function expression assigns a function to a variable
 * - Function declarations are hoisted completely
 * - Function expressions are not hoisted like declarations
 */

// Example 1: Function Declaration
sayHello(); // works due to hoisting

function sayHello() {
  console.log("Hello");
}

// Example 2: Function Expression
sayHi(); // ReferenceError (TDZ)

let sayHi = () => {
  console.log("Hi");
};
