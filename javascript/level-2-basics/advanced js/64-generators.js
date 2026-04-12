/**
 * Topic 64: Generators
 *
 * One liner:
 * Generators are functions that pause and resume execution
 * using yield — automatically creating iterators.
 *
 * Summary:
 * - function* syntax declares a generator
 * - yield pauses execution and returns a value
 * - next() resumes from where it paused
 * - Returns { value, done } like an iterator
 * - Simpler alternative to writing iterators manually
 */

// Basic generator
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = myGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Generator with for...of
for (const val of myGenerator()) {
  console.log(val); // 1, 2, 3
}

// Infinite generator — only runs when called
function* infiniteCounter() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

const counter = infiniteCounter();
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3
// Never crashes — only runs when next() is called!
