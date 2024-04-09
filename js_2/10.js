function f1(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    else{
        return num * f1(num - 1); // corrected from f(num - 1) to f1(num - 1)
    }
}
console.log(f1(3));
