/**
 * Topic: Explicit Binding
 *
 * Summary:
 * - Explicit binding occurs when we manually set the value of `this`
 *   using call, apply, or bind.
 *
 * - call → invokes the function immediately (arguments separated)
 * - apply → invokes the function immediately (arguments in array)
 * - bind → does NOT invoke immediately, returns a new function
 *          with permanently bound `this`
 *
 * - bind also supports partial application (preset arguments).
 */

// Examples

// Call
function greet(age) {
  console.log(this.name);
  console.log(age);
}

let person = {
  name: "Dhanraj",
};

greet.call(person, 25);

//Apply
function greet2(age) {
  console.log(this.name);
  console.log(age);
}

let person2 = {
  name: "Dhanraj",
};

greet2.apply(person2, [25]);

//bind
function greet3(age) {
  console.log(this.name);
  console.log(age);
}

let person3 = {
  name: "Dhanraj",
};

let bound = greet.bind(person3, 25);
