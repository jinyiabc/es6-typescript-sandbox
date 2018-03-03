export function greet(message){
  console.log(message)
}

export class GreetMessage{
  constructor(){
    console.log("cosntructor");
  }
  greet(){
    console.log("Greet function")
  }
};