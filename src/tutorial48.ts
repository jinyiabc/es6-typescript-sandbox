interface Person {
  fname: string;
  lname: string;
  age?: number;   // This type is optional by "?"
}

let employee1: Person = {
  fname: "alex",
  lname: "J.Y.",
  age: 30
};

let employee2: Person = {
  fname: "bob",
  lname: "Yang"
}