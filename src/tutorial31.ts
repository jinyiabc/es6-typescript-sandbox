let mySet = new WeakSet();
let key = {};
mySet.add(key);
console.log(mySet.has(key));
key = null;
console.log(mySet.size);   // Undefined comparing strong set.
