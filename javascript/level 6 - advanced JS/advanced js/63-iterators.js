/**
 * Topic: Iterators
 *
 * One liner:
 * An iterator is an object with a next() method that returns
 *
 * Summary:
 * - next() returns {value,done}
 * - done: false -> still items left
 * - done: true -> iteration complete
 * - Array/strings have built-in iterators via Symbol.iterator
 * - for...of uses iterator behind the scenes automatically
 */

//Built in iterator - array
const arr = [1, 2, 3];

const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Custom iterator
function createCounter(start, end) {
  let current = start;
  return {
    next() {
      if (current <= end) {
        return { value: current++, done: false };
      }

      return { value: undefined, done: true };
    },
  };
}

const counter = createCounter(1, 3);
console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
console.log(counter.next()); // { value: 3, done: false }
console.log(counter.next()); // { value: undefined, done: true }
