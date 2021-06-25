var readlineSync=require("readline-sync");

var name=readlineSync.question("May I have your name? ");
console.log("Welcome "+name+ "!. Let's see how well do you know Arpita.");

// var num1=readlineSync.question("Number 1:");
// var num2=readlineSync.question("Number 2:");
var score=0;

var questions=[
  {
    question:"Where do I live? ",
    answer:"Gorakhpur"
  },
  {
    question:"Where do i study? ",
    answer:"JSS"
  },
  {
    question:"What is my fav colour? ",
    answer:"Black"
  },
  {
    question:"What would be my favourite pet? ",
    answer:"Dog"

  },
  {
    question:"Which is my favourite movie?  ",
    answer:"RHTDM"
  }

];

function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("Right!");
    score++;
  }
  else{
    console.log("Wrong!")
  }
  console.log("Current Score: ",score)
  console.log("---------------------");
}

for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer)
  
}

scoreMessage(score);


function scoreMessage(score){
  if(score===5){
    console.log("YAY! You know me well.")
  }
  else if(score<5 && score>3){
    console.log("You need to know more ")
  }
  else{
    console.log("You dont kow me!")
  }
}