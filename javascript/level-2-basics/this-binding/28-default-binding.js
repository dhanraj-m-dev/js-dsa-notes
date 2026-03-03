/**
/**
 * Topic: Default Binding
 *
 * Summary:
 * - In JavaScript, `this` refers to the object executing the current function.
 * - Its value is determined by how the function is called (call-site).
 *
 * There are four types of `this` binding:
 *   1. Default binding
 *   2. Implicit binding
 *   3. Explicit binding
 *   4. `new` binding
 *
 * - Default binding occurs when a function is invoked as a plain function,
 *   without an object context.
 * - In non-strict mode, `this` refers to the global object.
 * - In strict mode, `this` is undefined.
 */

// Example:
function show() {
  console.log(this);
}

show();


//Example 2:
const obj = {
  name: "Dhanraj",
  greet: function() {
    console.log(this.name);
  }
};

const fn = obj.greet;
fn(); // default binding (context lost)