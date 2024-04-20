class Car {
    constructor(color) {
      this._color = color;
    }
    getColor() {
      return this._color;
    }
    setColor(color) {
      this._color = color;
    }
  }
  let car = new Car("blue");
  
  car.setColor("red");
  console.log(car.getColor());