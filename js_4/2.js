function getUniqueValues(numbers) {
    // Filter out duplicates
    return numbers.filter((value, index, self) => self.indexOf(value) === index);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 2, 3, 6, 4, 7];
const uniqueValues = getUniqueValues(numbers);
console.log(uniqueValues); // Output: [1, 2, 3, 4, 5, 6, 7]
