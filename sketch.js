var canvas;
var database;

var gameState = 0;
var contestantCount;
var allContestants, contestant;

var quiz;
var form;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz = new Quiz();

  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  textFont("Comic sans MS");
  textSize(12);
  stroke("black");
  fill("black");
  text("Q: Which letter sounds like a word?", 25, 75);
  text("1. T", 25, 95);
  text("2. S", 25, 115);
  text("3. Q", 25, 135);
  text("4. A", 25, 155);
  
  if(contestantCount === 2){
    quiz.updateState(1);
  }
  if(gameState === 1){
    quiz.play();
  }
}
