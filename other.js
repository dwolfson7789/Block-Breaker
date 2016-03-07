
console.log("JS running");


////DROPBALL////

function dropBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}


console.log("ballDrop");



function pullStopper (){
    ctx.beginPath();
    ctx.rect(stopper, canvas.height-stopperHeight, stopperWidth, stopperHeight);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

console.log("pullStopper");


////blockpull////

var block = [];
  for(c = 0; c < blockColumn; c++) {
    block[c] = [];
      for(r = 0; r < blockRow; r++) {
        block[c][r] = { x: 0, y: 0, status: 1 };
      }
  }

function pullBlock () {
  for(c = 0; c < blockColumn; c++) {
    for(r = 0; r<blockRow; r++) {
      if(block[c][r].status == 1) {
      var blockX = (c*(blockWidth + blockPadding)) + blockLeft;
      var blockY = (r*(blockHeight + blockPadding)) + blockTop;
      block[c][r].x = blockX;
      block[c][r].y = blockY;
      ctx.beginPath();
      ctx.rect(blockX, blockY, blockWidth, blockHeight);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();
      }
    }
  }
}


function wreckBlock() {
  for(c = 0; c < blockColumn; c++) {
    for(r = 0; r < blockRow; r++) {
      var b = block[c][r];
        if(b.status == 1) {
        if(x > b.x && x < b.x + blockWidth && y > b.y & y <     b.y + blockHeight){
        dy = -dy;
        b.status = 0;
        score ++;
        if(score == blockRow * blockColumn) {
          alert("You win!");
          document.location.reload();
        }


          }
        }
      }
    }
  }

function scoreBoard(){
  ctx.font = "30px Megrim, cursive";
  ctx.fillStyle = "red";
  ctx.fillText("BLOCKS : "+ score, 300, 40);

}

function trackLives() {
  ctx.font = "22px Megrim, cursive";
  ctx.fillStyle = "limegreen";
  ctx.fillText("Remaining Lives: " + lives, canvas.width-250, 25);
}



///START FUNCTION////

  function start() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dropBall();
      pullStopper();
      pullBlock();
      wreckBlock();
      scoreBoard();
      trackLives();

      if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
          dx = -dx;
      }
      if (y + dy < ballRadius) {
        dy =-dy;
  }
     else if (y + dy > canvas.height-ballRadius) {
      if (x > stopper && x < stopper + stopperWidth){
          dy = -dy;
    } else {
        lives--;
        if(!lives) {
          alert("YOU LOSE!");
          document.location.reload();
  }
  else {
    x = canvas.width/2;
    y = canvas.height-30;
    dx = 2;
    dy = -2;
    stopper = (canvas.width-stopperWidth)/2;

    }
  }
}
      if(rightPressed && stopper < canvas.width-stopperWidth) {
        stopper += 6;

      }
      else if (leftPressed && stopper > 0) {
        stopper -= 6;
      }

      x += dx;
      y += dy;

  }



setInterval(start, 10);
