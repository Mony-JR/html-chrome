
function Shape() {}


Shape.prototype.draw = function() {
  console.log('Drawing a shape.');
};


function Circle(radius) {
  this.radius = radius;
}


Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;


Circle.prototype.draw = function() {
  console.log('Drawing a circle with radius ' + this.radius + '.');
};


function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}


Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;


Rectangle.prototype.draw = function() {
  console.log('Drawing a rectangle with width ' + this.width + ' and height ' + this.height + '.');
};


function drawShape(shape) {
  shape.draw(); 
}


var myCircle = new Circle(5);
var myRectangle = new Rectangle(4, 6);


drawShape(myCircle);   
drawShape(myRectangle); 
