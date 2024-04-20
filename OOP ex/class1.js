class MathOperations {
    // Method to add numbers
    add() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
}

// Creating an instance of MathOperations
let math = new MathOperations();

// Using the add method with different numbers of arguments
console.log(math.add(2, 3));                // Outputs: 5
console.log(math.add(4, 6, 8));             // Outputs: 18
console.log(math.add(1, 2, 3, 4, 5));       // Outputs: 15
