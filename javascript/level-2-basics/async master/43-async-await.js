/**
 * Topic: async / await
 *
 * Summary:
 * - async/await is syntactic sugar over Promises.
 * - async makes a function return a Promise.
 * - await pauses execution until the Promise resolves.
 * - Errors are handled using try/catch.
 */

// Example :
async function test() {
  console.log("Start");
  await Promise.resolve();
  console.log("End");
}

test();
