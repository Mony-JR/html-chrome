for (let number = 2; number <= 100; number++) {
    let isPrime = true;

    // Check if the number is divisible by any other number except 1 and itself
    for (let divisor = 2; divisor < number; divisor++) {
      if (number % divisor === 0) {
        isPrime = false;
        break;
      }
    }

    // If the number is prime, print it
    if (isPrime) {
      console.log(number);
    }
  }