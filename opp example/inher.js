
function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.walk = function() {
    console.log(this.name + ' is walking.');
  };
  

  function Dog(name, breed) {
    Animal.call(this, name); 
    this.breed = breed;
  }
  

  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  

  Dog.prototype.bark = function() {
    console.log(this.name + ' is barking.');
  };
  

  var myAnimal = new Animal('Generic Animal');
  var myDog = new Dog('Buddy', 'Golden Retriever');
  

  myAnimal.walk(); 
  myDog.walk();    
  myDog.bark();    
  