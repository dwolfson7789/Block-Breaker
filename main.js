

var canvas = document.getElementById("backgroundCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 8;
var x = canvas.width/2;
var y = canvas.height-25;
var dx = 2;
var dy = -3;
var stopperHeight = 10;
var stopperWidth = 100;
var stopper = (canvas.width-stopperWidth/2);
var rightPressed = false;
var leftPressed = false;
var blockRow = 5;
var blockColumn = 9;
var blockWidth = 70;
var blockHeight = 15;
var blockPadding = 15;
var blockTop = 55;
var blockLeft = 30;
var lives = 5;
var score = 0;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  }
  else if (e.keyCode == 37) {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if(e.keyCode == 39){
    rightPressed = false;

  }
  else if(e.keyCode == 37) {
    leftPressed = false;
  }
}

function mouseMoveHandler (e) {
  var relX = e.clientX - canvas.offsetLeft;
  if(relX  > 0 && relX < canvas.width) {
    stopper = relX - stopperWidth/2;
  }
}
