/**
 * Topic : Method overriding & property shadowing
 *
 * Summary :
 * - Method overriding happens when a child class defines a method with the same name
 * as a method in the parent class.
 *
 * - Property shadowing is the same idea as method overriding but its for properties.
 */

// Examp:

class Animal {
  constructor() {
    this.name = "animal";
  }
  speak() {
    console.log("Animal is giving sound ");
  }
}

class Dog extends Animal {
  constructor() {
    super();
    this.name = "Dog";
  }
  speak() {
    console.log("Dog barks");
  }
}

let d = new Dog();
d.speak();
console.log(d.name);
