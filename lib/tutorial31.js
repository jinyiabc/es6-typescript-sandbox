var mySet = new WeakSet();
var key = {};
mySet.add(key);
console.log(mySet.has(key));
key = null;
console.log(mySet.size); // Undefined comparing strong set.
//# sourceMappingURL=tutorial31.js.map