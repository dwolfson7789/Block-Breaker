console.log("JS running");

function scoreBoard(){
  ctx.font = "25px Bangers, cursive";
  ctx.fillStyle = "red";
  ctx.fillText("BLOCKS : "+ score, 300, 30);
}

function trackLives() {
  ctx.font = "18px Megrim, cursive";
  ctx.fillStyle = "limegreen";
  ctx.fillText("Remaining Lives: " + lives, canvas.width-160, 20);
}




////ball responsive in canvas ////

function dropBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}



//responsive paddle//

function pullStopper (){
    ctx.beginPath();
    ctx.rect(stopper, canvas.height-stopperHeight, stopperWidth, stopperHeight);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}



////blocks are being pulled not responsive////

var block = [];
   for(c = 0; c < blockColumn; c++) { //call to cols//
     block[c] = []; //call to array//
       for(r = 0; r < blockRow; r++) { //call to row//
         block[c][r] = { x: 0, y: 0, status: 1 }; //col + row = 1 indiv block//
       }
 }

//blocks are appearing, based ob declared variables in main.js(block & col val)
function pullBlock () {
  for(c = 0; c < blockColumn; c++) { //r-row//
    for(r = 0; r<blockRow; r++) { //c-col//
      if(block[c][r].status == 1) { //1 by 1//
      var blockX = (c*(blockWidth + blockPadding)) + blockLeft;
      var blockY = (r*(blockHeight + blockPadding)) + blockTop;
      block[c][r].x = blockX;
      block[c][r].y = blockY;
      ctx.beginPath();
      ctx.rect(blockX, blockY, blockWidth, blockHeight); //declare size//
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();
      }
    }
  }
}


//collision detection//
function wreckBlock() {
  for(c = 0; c < blockColumn; c++) {
    for(r = 0; r < blockRow; r++) {
      var b = block[c][r];
        if(b.status == 1) { //calling to single block collision//
        if(x > b.x && x < b.x + blockWidth && y > b.y & y < b.y + blockHeight){
        dy = -dy; //the block will disapear//
        b.status = 0;
        score ++;
        if(score == blockRow * blockColumn) { //score reflecting the individual block wrecked//
          alert("YOU WIN!");
          document.location.reload();
              }
          }
        }
      }
    }
  }



///START FUNCTION////
//call to all/
  function start() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dropBall(); //ball responsive with in canvas//
      pullStopper(); //stopper appearing//
      pullBlock();//blocks appear//
      wreckBlock();//block collision//
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
    dy = -5;
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
requestAnimationFrame(start); ////work cited in issue//
  }

start();


/////https://developer.mozilla.org/en-US/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript////
