/**
 * Topic : Array.from and Array.of
 *
 * One Liner:
 * Array.from converts iterables into arrays
 * Array.of creates arrays from individual values safely
 *
 * Summary:
 * - Array.from -> convertes any iterable (string,set,Map) to array
 * - Array.from -> accepts optional map function as second argument
 * - Array.of -> creates array from individual values
 * - Array.of(7) -> [7] vs new Array(7) -> 7 empty slots
 */

//Array.from - string to array
console.log(Array.from("Hello")); // ["H","e","l","l","o"]

//Array.from - with map function
console.log(Array.from([1, 2, 3], (n) => n * 2)); //[2, 4, 6];

//Array.from - create range
console.log(Array.from({ length: 5 }, (_, i) => i + 1)); //[1,2,3,4,5]

//Array.from - remove duplicates using set
console.log(Array.from(new Set([1, 2, 3, 3]))); //[1,2,3]

//Array.of - safe array creation
console.log(Array.of(7)); //[7]
console.log(new Array(7)); // [empty x 7] - dangerous
console.log(Array.of(1, 2, 3)); // [1,2,3]
