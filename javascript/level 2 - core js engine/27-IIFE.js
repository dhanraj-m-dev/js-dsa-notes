/**
 * Topic : IIFE - Immediate Invoked Function Expression
 *
 * Summary:
 * - An IIFE is a function that immediately executed after it is defined.
 * - To avoid polluting the global scope
 * - To create private scopes
 */

// Example :
(function sayHello() {
  console.log("Hello");
})();

(() => {
  console.log("Hello from arrow function");
})();
