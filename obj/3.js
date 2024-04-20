// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     country: 'USA'
//   };
  

//   const { firstName, lastName, age, country } = person;
  
//   console.log(firstName); 
//   console.log(lastName);  
//   console.log(age);       
//   console.log(country);   
  





const person = {
    firstName: 'John',
    lastName: 'Doe'
  };
  

  const { firstName, lastName, age = 30 } = person;
  
  console.log(firstName); 
  console.log(lastName);  
  console.log(age);       
  



// const do2= {name1:"Mony",kk:10,jj:{me:"MonyJr"}}

// const {name1,kk,jj:{me}}=do2

// console.log(name1)
// console.log(me);
// console.log(kk);

