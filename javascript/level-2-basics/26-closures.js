/**
 * Topic : Closures
 *
 * Summary:
 * - A closure is when an inner function has access to variables from its outer function
 *   even after the outer function has finished executing.
 * - This allows data to be encapsulated and preserved between function calls.
 */

// Example:
function createCounter() {
  let count = 0;

  function counter() {
    count++;
    console.log(count);
  }

  return counter;
}

const counter = createCounter();
counter(); // 1
counter(); // 2
