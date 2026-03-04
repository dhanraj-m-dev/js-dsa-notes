/**
 * Topic: New Binding
 *
 * Summary:
 * - New binding occurs when a function is invoked using the `new` keyword.
 * - In this case, `this` refers to the newly created object.
 * - The `new` keyword creates a new object, links it to the constructor’s prototype,
 *   binds `this` to that object, and returns it.
 */

// Example :
function Greet(name) {
  this.name = name;
}

const p1 = new Greet("Dhanraj");

console.log(p1);
