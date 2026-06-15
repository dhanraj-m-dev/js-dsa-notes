/**
 * Topic: Conditionals
 *
 * Summary:
 * - Conditionals are used to execute code based on conditions
 * - Common conditionals: if / else if / else, switch
 */

// if / else example
let a = 18;

if (a >= 18) {
  console.log("You are a major now");
} else if (a === 0) {
  console.log("You aren't born yet");
} else {
  console.log("You are a minor");
}

// switch example
let age = 18;

switch (age) {
  case 18:
    console.log("You are major");
    break;
  default:
    console.log("It's a default case");
}

/**
 * Interview notes:
 * - if/else is used for range-based conditions
 * - switch is better for fixed values
 */
