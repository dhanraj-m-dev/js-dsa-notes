/**
 * Topic: Classes
 *
 * Summary:
 * - A class in JavaScript is syntactic sugar over prototype-based inheritance.
 * - It provides a cleaner syntax to create constructor functions and prototype methods.
 * - Class methods are stored on the prototype.
 * - Classes run in strict mode automatically.
 * - Class instances are created using the `new` keyword.
 */

// Example :
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(this.name, this.age);
  }
}

const person1 = new Person("Dhanraj", 25);

person1.greet();
