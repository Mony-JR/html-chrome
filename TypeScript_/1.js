function identity(arg) {
    return arg;
}
var Me = /** @class */ (function () {
    function Me(id, jj, kk) {
        this.id = id;
        this.jj = jj;
        this.kk = kk;
    }
    Me.prototype.displayAll = function () {
        console.log("id: ".concat(this.id, ", jj: ").concat(this.jj, ", kk: ").concat(this.kk));
    };
    return Me;
}());
var nn = new Me(10, 20, "JR");
nn.displayAll();
var output1 = identity(10);
var output2 = identity(" Hello ");
var output3 = identity(true);
console.log(output3);
// enum Browser{
//   Chrome,
//   hdjh,
//   uhusaj,
//   ghsdsahj
// }
// console.log(Browser)
