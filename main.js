

var canvas = document.getElementById("gameHolder");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var stopperHeight = 10;
var stopperWidth = 75;
var stopper = (canvas.width-stopperWidth/2);
var rightPress = false;
var leftPress = false;

console.log("gameHolder");


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

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



function ballDrop() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#366";
    ctx.fill();
    ctx.closePath();
}

console.log("ballDraw");

function drawStopper (){
    ctx.beginPath();
    ctx.rect(saver, canvas.height-saverHeight, saverWidth, saverHeight);
    ctx.fillStyle = "#003";
    ctx.fill();
    ctx.closePath();
}

console.log("drawStopper");


function start() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ballDrop();
    drawStopper();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}
if(rightPress && stopper < canvas.width-stopperWidth) {
  stopper +=7;
}
else if (leftPress && stopper > 0) {
  stopper -= 7;
}

console.log("start")







setInterval(start, 10);
