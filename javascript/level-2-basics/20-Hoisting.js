/**
 * Topic: Hoisting
 *
 * Summary:
 * - Hoisting is JavaScript behavior where declarations are processed before code execution
 * - Function declarations and 'var' declarations are hoisted
 * - 'var' is initialized with 'undefined'
 * - 'let' and 'const' are hoisted but not initialized (Temporal Dead Zone)
 * - Accessing 'let' or 'const' before declaration causes a ReferenceError
 */

// Example 1: Function declaration hoisting
helloWorld(); // Works because function declarations are hoisted

function helloWorld() {
  console.log("Hello world");
}

// Example 2: 'const' function expression (TDZ)
helloWorld2(); // ReferenceError: Cannot access before initialization

const helloWorld2 = () => {
  console.log("Hello World 2");
};
