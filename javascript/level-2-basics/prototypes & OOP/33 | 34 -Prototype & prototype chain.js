/**
 * Topic: Prototype & prototype chain
 *
 * Summary:
 * - In JavaScript, every object is internally linked to another object called its prototype.
 * When a property or method is not found on the object itself, JavaScript looks at that linked object. 
 * This lookup continues until null. That linked structure is called the prototype chain.
 */

// Example:
let persons = ["dhanraj", "mohan"];

console.log(persons.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true
