let number
let divisor

const uu=()=>{
  for ( divisor=2 ; divisor < number; divisor++) {
      if (number % divisor === 0) {

        isPrime = false;
        break;
      }
    }
}


for (number = 2; number <= 99; number++) {

let isPrime =true
    // Check if the number is divisible by any other number except 1 and itself
    uu();


    // If the number is prime, print it
    if (isPrime) {
      console.log(number);
    }
  }
