var readlineSync=require("readline-sync");

var name=readlineSync.question("May I have your name? ");
console.log("Welcome "+name+ "!. Let's see how well do you know Arpita.");

// var num1=readlineSync.question("Number 1:");
// var num2=readlineSync.question("Number 2:");
var score=0;

var questions=[
  {
    question:"Where do I live? ",
    options:["Gorakhpur","Pune","Assam","Punjab"],
    answer:0
  },
  {
    question:"Where do i study? ",
    options:["Gorakhpur","Noida","Bangalore","Pune"],
    answer:1
  },
  {
    question:"What is my fav colour? ",
    options:["Red","Blue","Black","Pink"],
    answer:2
  },
  {
    question:"What would be my favourite pet? ",
    options:["Snakes","Rabbit","Cat","Dog"],
    answer:3

  },
  {
    question:"Which is my favourite movie?  ",
     options:["2 states","RHTDM","Bajrangi Bhaijaan","SherShah"],
    answer:1
  }

];

function play(question,options,answer){
  var optionString=""
  options.forEach((option,index)=>{ 
    optionString+=`\n${index}. ${option}`
  })
  var userAnswer=readlineSync.question(`${question}${optionString}\nEnter the option number:`);
  if(userAnswer===answer.toString()){
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
  play(questions[i].question,questions[i].options,questions[i].answer)
  
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
    console.log("You dont know me!")
  }
}