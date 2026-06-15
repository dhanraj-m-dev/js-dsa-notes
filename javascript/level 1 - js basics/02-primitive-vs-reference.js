/**
 * Topic: Primitive vs Reference
 *
 * Summary:
 * - JS has primitive types and reference types (objects)
 * - Primitives are stored by value
 * - Objects are stored by reference
 *
 * Primitive types:
 * - number, string, boolean, null, undefined, symbol, bigint
 */

// Primitive example
let a = 10;
let b = a;
console.log(b); // 10

b = 15;
console.log(b); // 15
console.log(a); // 10 (unchanged)

// Reference example
let person = { name: "dhanraj", age: 25, city: "chennai" };
let person2 = person;

person2.city = "cbe";

console.log(person); // city: "cbe"
console.log(person2); // city: "cbe"

/**
 * Interview notes:
 * - Primitives are copied by value
 * - Objects share the same memory reference
 */
