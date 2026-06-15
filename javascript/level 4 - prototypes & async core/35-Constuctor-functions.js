/**
 * Topic : Constructor functions
 *
 * Summary:
 * - A constructor function in JavaScript is a regular function used with the new keyword to create multiple instances of an object. 
 * It initializes properties using this, and shared methods are defined on its prototype.
 * 
 * - If constructor returns a primitive it will be ignored. but if it returns an object it will get priority.
 */

//Example :
function AddInputs(i1, i2) {
  this.value = i1 + i2;
}

AddInputs.prototype.print = function () {
  console.log(this.value);
};

const result = new AddInputs(2, 4);
result.print(); // 6


// When we use:
new AddInputs(2, 4); 
// JavaScript performs 4 steps:
// 	1.	Creates a new empty object
// 	2.	Links its [[Prototype]] to AddInputs.prototype
// 	3.	Binds this to the new object
// 	4.	Returns the object automatically
// (unless constructor explicitly returns another object)
