const numbers = [3, 1, 4, 20, 5, 9];
      let largest = numbers[0]; // Initialize largest with the first element

      for (const number of numbers) {
        if (number > largest) {
          largest = number;
        }
      }

      console.log("The largest number is", largest);