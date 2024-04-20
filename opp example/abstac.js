
function Animal(name) {
    if (this.constructor === Animal) {
      throw new Error('Cannot instantiate abstract class');
    }
    this.name = name;
  }
  

  Animal.prototype.makeSound = function() {
    throw new Error('Abstract method makeSound() must be implemented');
  };
  

  function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  

  Dog.prototype.makeSound = function() {
    console.log(this.name + ' says Woof!');
  };
  

  var myDog = new Dog('Buddy', 'Golden Retriever');
  

  myDog.makeSound();
  