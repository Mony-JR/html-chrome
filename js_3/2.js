function filterArray(arr, callback) {
    
    const filteredArr = [];
    for (let num of arr) {
      if (callback(num)) {
        filteredArr.push(num);
      }
    }
    return filteredArr;
  }
  
  
  function isEven(num) {
    return num % 2 === 0;
  }
  

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  

  const evenNumbers = filterArray(numbers, isEven);
  
  console.log(evenNumbers);
  