let frame = 0;

function draw() {
  ctx.fillStyle = "#70c5ce";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  gameAssets.drawBackground();
  gameAssets.drawReadyMsg();
  bird.init(frame);
  pipe.init();
  ground.init();
  game.drawScore();
  gameAssets.drawEndMsg();
}

function loop() {
  draw();
  frame++;
  requestAnimationFrame(loop);
}

loop();

canvas.addEventListener("click", (event) => {
  if (game.current === game.start) {
    game.gameState = "game";
  }
  if (game.current === game.game) {
    bird.flap();
  }
  if (game.current === game.end) {
    let rec = canvas.getBoundingClientRect();
    let clickX = event.clientX - rec.left;
    let clickY = event.clientY - rec.top;

    // CHECK IF WE CLICK ON THE START BUTTON
    if (
      clickX >= game.startBtn.x &&
      clickX <= game.startBtn.x + game.startBtn.w &&
      clickY >= game.startBtn.y &&
      clickY <= game.startBtn.y + game.startBtn.h
    ) {
      pipe.reset();
      bird.speedReset();
      game.resetScore();
      game.gameState = "start";
    }
  }
});
