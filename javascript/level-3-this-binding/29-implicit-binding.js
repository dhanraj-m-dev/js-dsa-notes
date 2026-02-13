/**
 * Topic : Implicit Binding
 *
 * Summary:
 * - Implicit binding happens when a function is invoked as a method of an object.
 * - 'this' refers to the object before the last dot.
 * - 'this' depends on how the function is called, not where it is defined.
 */

// Example :

let person = {
  name: "Dhanraj",
  getName: function () {
    console.log(this.name);
  },
};

// person.getName(); //In this case it will log "Dhanraj" here this will be person

//Example 2 (Nested object):
let obj = {
  name: "Outer",
  inner: {
    name: "inner",
    print: function () {
      console.log(this.name);
    },
  },
};

obj.inner.print(); // Here this will be obj.inner

//Example 3 (Common mistake)
const fn = person.getName;
fn(); //In this place it will be default binding
