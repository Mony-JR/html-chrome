// Base class
class Animal {
    // Method of the base class
    makeSound() {
        console.log("Animal makes a sound.");
    }
}

// Derived class
class Dog extends Animal {
    // Override the makeSound method
    makeSound() {
        console.log("Dog barks.");
    }
}

// Derived class
class Cat extends Animal {
    // Override the makeSound method
    makeSound() {
        console.log("Cat meows.");
    }
}

// Create instances
const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

// Call makeSound method
animal.makeSound(); // Output: Animal makes a sound.
dog.makeSound();    // Output: Dog barks.
cat.makeSound();    // Output: Cat meows.
