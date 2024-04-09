for (let number = 2; number <= 99; number++) {
  let isPrime = true;

  // Check if the number is divisible by any other number except 1 and itself
  for (let divisor = 2; divisor * divisor < number; divisor++) {
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




  // for( let i=1 ; i<1; i++){
  //   console.log(i);
  // }


//   const sum=(a,b)=> {return a+b}
   
//   console.log(sum(4,2));






  
// var s1=(a,b)=>  a*b

// console.log(s1(2,5));





// var s2=(a,b)=>{return a*b}

// console.log(s2(2,5));