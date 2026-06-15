/**
 * Topic: Scope Chain
 *
 * Summary:
 * - When JavaScript engine encounters a variable, it looks for it in the current scope
 * - If not found, it searches in the outer scope
 * - This continues until the global scope
 * - If the variable is not found anywhere, a ReferenceError is thrown
 * - Variable lookup follows lexical scope: inner scope -> outer scope-> global scope
 */

// Example:

let name = "Dhanraj";

function getName() {
  console.log(name); // not found in function scope, so resolved from global scope
}

getName();
