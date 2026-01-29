/**
 * Topic: Arrow Functions
 *
 * Summary:
 * - Arrow functions provide a shorter syntax for writing functions
 * - They support implicit return for single-line expressions
 * - Arrow functions do not have their own 'arguments'; rest parameters are used instead
 * - Arrow functions do not have their own this' and take it from the surrounding lexical scope
 */

// Example
const helloWorld = () => console.log("Hello world");

helloWorld();
