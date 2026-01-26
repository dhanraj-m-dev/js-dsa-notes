/**
 * Topic: Execution Context
 *
 * Summary:
 * - JavaScript creates an execution context before running any code
 * - Global execution context is created first
 * - Each function call creates a new function execution context
 * - Every execution context has two phases:
 *   1) Memory creation phase (variables and functions are allocated)
 *   2) Execution phase (code runs line by line)
 * - Execution contexts are managed using the call stack (LIFO)
 */

// Example:

var a = 5;

function printAge(value) {
  console.log(value);
  return value;
}

var age = printAge(a);

/**
 * Explanation:
 * - JavaScript engine creates the global execution context
 * - Memory is allocated for variable `a` and function `printAge`
 * - During execution phase, `a` is assigned the value 5
 * - When `printAge(a)` is called, a new function execution context is created
 * - After the function finishes execution, its execution context is removed
 *   from the call stack
 */
