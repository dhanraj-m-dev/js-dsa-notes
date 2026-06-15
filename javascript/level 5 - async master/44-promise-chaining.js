/**
 * Topic: Promise Chaining
 *
 * Summary:
 * - Promise chaining allows multiple asynchronous operations
 *   to run sequentially using multiple .then() calls.
 * - The value returned from one .then() becomes the input
 *   for the next .then().
 */

// Example :
Promise.resolve(2)
  .then((x) => x * 3)
  .then((x) => x + 1)
  .then((x) => console.log(x));
