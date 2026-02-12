/**
 * Topic : Default Binding
 *
 * Summary:
 * - `this` is determined by how a function is called.
 * - Default binding happens when a function is invoked normally, without an object context.
 * - In non-strict mode, `this` refers to the global object (window in browsers).
 * - In strict mode, `this` is undefined.
 */

// Example:
function show() {
  console.log(this);
}

show();
