/**
 * Topic: var / let / const
 *
 * Summary:
 * - var: function scoped, can be redeclared and reassigned
 * - let: block scoped, cannot be redeclared, can be reassigned
 * - const: block scoped, cannot be redeclared or reassigned
 * - let and const are introduced in ES6
 */

// var example
var a = 5;
a = 10;
console.log(a); // 10

// let example
let b = 10;
// let b = 20; // redeclaration not allowed
b = 15;
console.log(b); // 15

// const example
const c = 10;
// c = 15; // reassignment not allowed

/**
 * Interview notes:
 * - var is hoisted and initialized as undefined
 * - let and const are hoisted but in Temporal Dead Zone (TDZ)
 * - prefer const by default, use let when reassignment is needed
 */
