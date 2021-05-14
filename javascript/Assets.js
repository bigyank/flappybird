class Assets {
  constructor() {
    this.sprite = new Image();
    this.sprite.src = "/assets/sprite.png";
  }

  getBackground() {
    return {
      sourceX: 0,
      sourceY: 0,
      width: 275,
      height: 226,
      canvasX: 0,
      canvasY: canvas.height - 226,
    };
  }

  getLowerground() {
    return {
      sourceX: 276,
      sourceY: 0,
      width: 224,
      height: 112,
      canvasX: 0,
      canvasY: canvas.height - 112,
    };
  }

  getGameReady() {
    return {
      sourceX: 0,
      sourceY: 228,
      width: 173,
      height: 152,
      canvasX: canvas.width / 2 - 173 / 2,
      canvasY: 80,
    };
  }

  getGameOver() {
    return {
      sourceX: 175,
      sourceY: 228,
      width: 225,
      height: 202,
      canvasX: canvas.width / 2 - 225 / 2,
      canvasY: 90,
    };
  }

  _draw(sourceX, sourceY, width, height, canvasX, canvasY) {
    ctx.drawImage(
      this.sprite,
      sourceX,
      sourceY,
      width,
      height,
      canvasX,
      canvasY,
      width,
      height
    );
  }

  drawBackground() {
    const { sourceX, sourceY, width, height, canvasX, canvasY } =
      this.getBackground();
    this._draw(sourceX, sourceY, width, height, canvasX, canvasY);
    this._draw(sourceX, sourceY, width, height, canvasX + width, canvasY);
  }

  drawLowerground(compileGround) {
    const { sourceX, sourceY, width, height, canvasX, canvasY } = compileGround;
    this._draw(sourceX, sourceY, width, height, canvasX, canvasY);
    this._draw(sourceX, sourceY, width, height, canvasX + width, canvasY);
  }

  drawBird(birdProps, frame) {
    const { animation, canvasX, canvasY, width, height } = birdProps;
    const bird = animation[frame];
    this._draw(bird.sourceX, bird.sourceY, width, height, canvasX, canvasY);
  }

  drawReadyMsg() {
    const { sourceX, sourceY, width, height, canvasX, canvasY } =
      this.getGameReady();
    if (game.current === game.start) {
      this._draw(sourceX, sourceY, width, height, canvasX, canvasY);
    }
  }

  drawEndMsg() {
    const { sourceX, sourceY, width, height, canvasX, canvasY } =
      this.getGameOver();
    if (game.current === game.end) {
      this._draw(sourceX, sourceY, width, height, canvasX, canvasY);
    }
  }
}

const gameAssets = new Assets();
