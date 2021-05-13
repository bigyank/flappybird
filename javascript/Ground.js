class Ground {
  constructor() {
    this.sourceX = 276;
    this.sourceY = 0;
    this.width = 224;
    this.height = 112;
    this.canvasX = 0;
    this.canvasY = canvas.height - 112;
    this.dx = 2;
  }

  init() {
    gameAssets.drawLowerground(this.compileGround());
    if (game.current === game.game) {
      this.canvasX = (this.canvasX - this.dx) % (canvas.width / 10);
    }
  }

  compileGround() {
    return {
      sourceX: this.sourceX,
      sourceY: this.sourceY,
      width: this.width,
      height: this.height,
      canvasX: this.canvasX,
      canvasY: this.canvasY,
    };
  }
}

const ground = new Ground();
