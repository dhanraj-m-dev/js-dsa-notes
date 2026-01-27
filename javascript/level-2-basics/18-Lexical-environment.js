/**
 * Topic: Lexical Environment
 *
 * Summary:
 * - Lexical environment is determined by where the code is written
 * - It defines what variables a function can access
 * - Inner functions remember the lexical environment of their outer functions
 * - Scope chain is based on lexical environment
 */

// Example:

var a = 10;

function outer() {
  var b = 20;

  function inner() {
    console.log(a, b); // accessed from outer and global lexical environment
  }

  inner();
}

outer();
