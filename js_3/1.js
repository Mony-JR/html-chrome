function squareArray(arr, callback) {
    
    const squaredArr = [];
    for (let num of arr) {
        
      squaredArr.push(callback(num));
    }
    return squaredArr;
  }
  

  function square(num) {
    return num ** 2;
  }
  

  const numbers = [1, 2, 3, 4, 5];

  const squaredNumbers = squareArray(numbers, square);
  
  console.log(squaredNumbers); 
  