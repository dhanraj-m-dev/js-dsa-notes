/**
 * Topic: Inheritance
 *
 * Summary:
 * - Inheritance allows a class to acquire the properties and methods
 *   of another class using the 'extends' keyword.
 * - The child class can also define its own properties or methods.
 * - 'super()' is used to call the parent class constructor.
 */

// Example
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal {
  constructor(name, hasTail) {
    super(name);
    this.hasTail = hasTail;
  }
}

const dog = new Dog("Rocky", "yes");
dog.eat();

console.log(dog, "DOG");
