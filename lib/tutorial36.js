var s = Symbol("First Symbol");
console.log(typeof s);
console.log(s.toString());
let s2 = Symbol("Test");
let s3 = Symbol("Test");
console.log(Symbol.keyFor(s2)); // undefined 
console.log(s2===s3);  // different since symbol create unique id.

let s4 = Symbol.for('RegSymbol'); // registry symbol
let s5 = Symbol.for('RegSymbol');
console.log(s4===s5);
console.log(Symbol.keyFor(s4));  // RegSymbol
let fname = Symbol("FirstName");
let person = {
    [fname]: "Chandler"
};
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
//# sourceMappingURL=tutorial36.js.map