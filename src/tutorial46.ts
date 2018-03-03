let strArr1: string[] = ['hello', 'world'];
let strArr2: Array<string> = ['hello', 'world'];

let anyArr: any[] = ['hello', 10, true];

let myTuple: [string, number] = ["hi", 10];
console.log(myTuple[0]);   // hi
console.log(myTuple[1]);   // 10
myTuple[2] = 100;  //
console.log(myTuple[2]);  // 100
myTuple[3] = 'hello';
console.log(myTuple[3]);
console.log(myTuple);