var readlineSync=require("readline-sync");

var name=readlineSync.question("May I have your name? ");
console.log("Welcome "+name+ "!. Let's see how well do you know Arpita.");
var age=readlineSync.question("May I know your age? ");
if(age>25){
  console.log("Right");
}
else{
  console.log("wrong");
}