const numbers = [200,30,10, 5, 20, 8, 15,100,2,3];

const maxNumber = numbers.reduce((max, currentNumber) => {
  return currentNumber > max ? currentNumber : max;
}, numbers[0]);

console.log(maxNumber); 



    