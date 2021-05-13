let frame = 0;

function draw() {
  ctx.fillStyle = "#70c5ce";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  gameAssets.drawBackground();
  ground.init();
  gameAssets.drawReadyMsg();
  bird.init(frame);
  gameAssets.drawEndMsg();
}

function loop() {
  draw();
  frame++;
  requestAnimationFrame(loop);
}

loop();

canvas.addEventListener("click", () => {
  if (game.current === game.start) {
    game.gameState = "game";
  }
  if (game.current === game.game) {
    bird.flap();
  }
  if (game.current === game.end) {
    game.gameState = "start";
  }
});