

var canvas = document.getElementById("backgroundCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 8;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -5;
var stopperHeight = 10;
var stopperWidth = 110;
var stopper = (canvas.width-stopperWidth/2);
var rightPressed = false;
var leftPressed = false;
var blockRow = 6;
var blockColumn = 8;
var blockWidth = 70;
var blockHeight = 15;
var blockPadding = 10;
var blockTop = 45;
var blockLeft = 37;
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

var block = [];
  for(c = 0; c < blockColumn; c++) {
    block[c] = [];
      for(r = 0; r < blockRow; r++) {
        block[c][r] = { x: 0, y: 0, status: 1 };
      }
  }
