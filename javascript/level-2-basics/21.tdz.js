/**
 * Topic: Temporal Dead Zone (TDZ)
 *
 * Summary:
 * - TDZ is the time between variable declaration and initialization
 * - During TDZ, accessing 'let' or 'const' variables throws ReferenceError
 * - TDZ exists to prevent usage before initialization
 * - 'var' does not have TDZ
 */

// Example
console.log(name); // ReferenceError (TDZ)
let name = "Dhanraj";
