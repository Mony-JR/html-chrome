
//--------EX1-------


// const { log } = require("console");
// let person1 = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };


// let person2 = {
//     name: "Alice",
//     age: 25,
//     city: "Los Angeles"
// };

// log(person1)
// log(person2)



//--------EX2-------


// let car1 = new Object();
// car1.make = "Toyota";
// car1.model = "Camry";
// car1.year = 2020;


// let car2 = new Object();
// car2.make = "Honda";
// car2.model = "Civic";
// car2.year = 2018;

// console.log(car1,car2);




//--------EX3-------




// function Person(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }

// let person1 = new Person("John", 30, "New York");

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
// }

// let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

// console.log(book1,person1)



//--------EX4-------


// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
// }

// let rect1 = new Rectangle(10, 5);


// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }
// }

// let circle1 = new Circle(3);

// console.log(rect1);
// console.log(circle1);







//--------EX5-------



// let personPrototype = {name:'Hello',age:40};

// let person1 = Object.create(personPrototype);
// person1.name = "John";
// person1.age = 30;


// let carPrototype = {};

// let car1 = Object.create(carPrototype);
// car1.make = "Toyota";
// car1.model = "Camry";

// console.log(person1);
// console.log(car1);

