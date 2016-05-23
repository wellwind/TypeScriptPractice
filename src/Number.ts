var a: number = 1;
var b: number = 2;
var c: string = "Hello";

function Add(a: number, b:number){
    return a + b;
}

console.log(Add(a, b));
// below line will wrong
// console.log(Add(a, c));