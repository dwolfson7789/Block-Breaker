var canvas = document.getElementById("backgroundCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 8;
var x = canvas.width/2;
var y = canvas.height-25;
var dx = 2; //left to right axis controll//
var dy = -5; //up down axis control//
var stopper = (canvas.width-stopperWidth/2);
var stopperHeight = 10;
var stopperWidth = 110;
var blockRow = 6;
var blockColumn = 8;
var blockWidth = 70;
var blockHeight = 15;
var blockPadding = 10;
var blockTop = 45;
var blockLeft = 37;
var lives = 5;
var score = 0;
var rightPressed = false;
var leftPressed = false;


// keyhandler (<--, ---->, mousemove)//
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

//assigned right & key//
function keyDownHandler(e) {
 if (e.keyCode == 39) {
   rightPress = true;
 }
 else if (e.keyCode == 37) {
   leftPress = true;
 }
}
function keyUpHandler(e) {
 if(e.keyCode == 39){
   rightPress = false;

 }
 else if(e.keyCode == 37) {
   leftPress = false;
  }
}
//mousemove//
function mouseMoveHandler (e) {
  var relX = e.clientX - canvas.offsetLeft;
  if(relX  > 0 && relX < canvas.width) { //reflect upon canvas natrual state offsetLeft//
   stopper = relX - stopperWidth/2;
  }
 }
