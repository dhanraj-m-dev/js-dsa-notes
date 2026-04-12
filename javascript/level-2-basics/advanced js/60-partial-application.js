/**
 * Topic : Partial Application
 *
 * One liner:
 * Pre-fills some arguments of a function and returns a new function waiting
 * for the remaining arguments.
 *
 * Currying vs partial application:
 * Currying -> always one arg at a time -> chain of functions
 * Partial -> pre-fill any number at once -> one final function
 */

function partial(fn, ...presetArgs) {
  return function (...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

function add(a, b, c) {
  return a + b + c;
}

const add5and10 = partial(add, 5, 10);
console.log(add5and10(3)); //18
console.log(add5and10(20)); //35
