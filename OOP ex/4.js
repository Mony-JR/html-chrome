
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }


    describe() {
        return `This is a ${this.make} ${this.model}`;
    }
}


class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model);
        this.year = year;
    }

    describe() {
        return `${super.describe()} manufactured in ${this.year}`;
    }


    honk() {
        return "Beep beep!";
    }
}
let car = new Car('Toyota', 'Camry', 2020);


console.log(car.describe());
console.log(car.honk()); 

