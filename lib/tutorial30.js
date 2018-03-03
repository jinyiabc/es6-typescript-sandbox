var mySet = new Set();
var ob1 = {};
var ob2 = {};
mySet.add("hello");
mySet.add(1); // size: 2
mySet.add(1); // size: 2 due to unique element
mySet.add(ob1);
mySet.add(ob2); // object do not convert to string.@author. hence ob1 is not the same as ob2.
console.log(mySet.size);
var newSet = new Set([1, 2, 34, 4, 2, 1]);
console.log(newSet.size); // 4
console.log(newSet.has(2));
console.log(newSet.delete(2));
console.log(newSet.has(2));
//# sourceMappingURL=tutorial30.js.map