/**
 * Topic: Pure vs Impure Functions
 *
 * One liner:
 * Pure functions always returns same output for same inputs with no side effects.
 * Impure functions have side effects or depend on external state.
 *
 * Pure function rules:
 * 1. Same input -> always same output
 * 2. No side effects - no external changes
 *
 * Impure function sighns:
 * 1. Output depends on external state
 * 2. Modifies variables outside scope
 * 3. Makes API calls, DOM Changes, console logs
 */

//PURE
const add = (a, b) => a + b;
console.log(add(2, 3)); //always 5

//IMPURE - modifies external state
let count = 0;
const increment = () => {
  count++;
  return count;
};
console.log(increment()); //1
console.log(increment()); //2 - different

// IMPURE ❌ — depends on external state
const getTime = () => Date.now(); // different every call

// PURE ✅ — predictable, testable
const multiply = (a, b) => a * b;
const getFullName = (first, last) => `${first} ${last}`;
