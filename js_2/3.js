const arrayNumber = (number) =>{
    let avg
    let sum = 0

    for(let i = 0; i < number.length; i++){

        if(number.length === 0) return 0;

        sum = sum + number[i];
    }
    return avg = sum/number.length;
}
let num = [1,2,3,4,5,6,7,8,9,10]

console.log(arrayNumber(num));