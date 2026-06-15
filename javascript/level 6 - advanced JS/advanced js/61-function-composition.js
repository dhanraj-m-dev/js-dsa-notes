/**
 * Topic: Function composition
 *
 * One liner:
 * Combines multiple functions so output of one becomes input of the next
 * executed right to left.
 *
 * Summary:
 * - compose -> right to left execution
 * - pipe -> left to right execution(more readable)
 * - uses reduceRight for compose, reduce for pipe
 * - Avoids deeply nested function calls
 */

const double = (x) => x * 2;
const addTen = (x) => x + 10;
const square = (x) => x * x;

//Without composition - hard to read
console.log(square(addTen(double(5))));

//compose - right to left
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

const transform = compose(square, addTen, double);
console.log(transform(5));

// pipe — left to right (more natural)
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);
const transform2 = pipe(double, addTen, square);
console.log(transform2(5)); // 400
