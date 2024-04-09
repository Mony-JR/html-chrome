const work = (number) => {
    for (let k = 2; k * k <= number; k++) {
        if (number % k === 0) {
            return false
        }
    }
    return true; // Return true only if no divisors are found
}

for (let i = 2; i < 100; i++) {
     if(work(i)){
       console.log(i); 
     }
    
}
