class Sum {
    
    constructor() {
        this._kk=20;
        const _Sum = function(a, b) {
            return a + b;
        };
        this.sum = function(a, b) {
            return _Sum(a, b);
        };
        this.me= function(a,b){
            return a+b
        }
        this['_Sum'] = _Sum;
        this. k1=function(){
            return this._kk
        }
        function k1(){
            return this._kk
        }
    }
}

const mySum = new Sum();

console.log(mySum.sum(2, 3));
console.log(mySum._Sum(2, 3));
console.log(mySum.me(2,3));
console.log(mySum.k1());

// class Sum {
    
//     constructor() {
//         const _Sum = function(a, b) {
//             return a + b;
//         };
//         this.sum = function(a, b) {
//             return _Sum(a, b);
//         };
//     }
// }

// const mySum = new Sum();
//     console.log(mySum.sum(2, 3));
