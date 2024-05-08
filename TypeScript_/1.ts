
function identity<T>(arg: T): T {
  return arg;
}

class Me<T, V, U> {
  private id: T;
  private jj: V;
  private kk: U;

  constructor(id: T, jj: V, kk: U) {
      this.id = id;
      this.jj = jj;
      this.kk = kk;
  }

  displayAll(): void {
      console.log(`id: ${this.id}, jj: ${this.jj}, kk: ${this.kk}`);
  }
}

const nn = new Me<number, number, string>(10, 20, "JR");
nn.displayAll();

let output1 = identity<number>(10);

let output2 = identity<string>(" Hello "); 

let output3 = identity(true); 

console.log(output3);


// enum Browser{
//   Chrome,
//   hdjh,
//   uhusaj,
//   ghsdsahj
// }
// console.log(Browser)


