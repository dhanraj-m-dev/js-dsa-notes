/**
 * Topic: Find, Some, Every
 *
 * Summary:
 * - These three are also array methods they used for searching and checking conditions
 * instead of transforming
 * - find -> returns first element that matches the condition (or undefined)
 * - some -> returns true if AT LEAST ONE ELEMENT passes the condition
 * - every -> returns true if ALL ELEMENTS passes the condition
 * - All three takes a callback, none mutate the original
 */

const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: false },
];

const bob = users.find((user) => user.name === "Bob");
console.log(bob, "BOB");

const hasActive = users.some((user) => user.active);
console.log(hasActive, "Has active");

const allActive = users.every((user) => user.active);
console.log(allActive);
