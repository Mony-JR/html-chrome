// Base class
class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return 0;
    }
}

// Derived class
class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }

    area() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(5, 3);


console.log("Area of rectangle: " + rect.area());
