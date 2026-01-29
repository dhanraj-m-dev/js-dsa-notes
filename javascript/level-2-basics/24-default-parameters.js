/**
 * Topic: Default Parameters
 *
 * Summary:
 * - Default parameters allow functions to have default values for arguments
 * - Used when an argument is not passed or is 'undefined'
 * - Helps avoid manual checks inside functions
 */

// Example
const sayHi = (name = "Dhanraj") => console.log(`Hi ${name}`);

sayHi();
