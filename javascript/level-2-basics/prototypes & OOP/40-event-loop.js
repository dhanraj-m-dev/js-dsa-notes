/**
 * Topic: Event Loop
 *
 * Summary:
 * - JavaScript is a single-threaded language.
 * - The Event Loop is a mechanism in the JavaScript runtime that monitors the call stack
 *   and moves tasks from the microtask queue and callback queue to the call stack
 *   when it becomes empty.
 * - This allows JavaScript to handle asynchronous operations without blocking the thread.
 *
 * Components of the Event Loop system:
 * - Call Stack
 * - Web APIs
 * - Callback Queue (Macrotask Queue)
 * - Microtask Queue
 * - Event Loop
 */

// Step 1 - Call stack (JS runs synchronous code first using call stack)

function greet() {
  console.log("hello");
}

// Step 2 - Async example
console.log("start");

setTimeout(() => {
  // goes to Web APIs first, then Callback Queue
  console.log("Timer");
}, 2000);

console.log("end");

// Step 3 - Microtask example
Promise.resolve().then(() => console.log("Promise"));

// Microtask Queue > Callback Queue

// Execution order:
// 1. Synchronous code
// 2. Microtasks (Promises)
// 3. Macrotasks (setTimeout, setInterval)