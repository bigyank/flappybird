class Bird {
  constructor() {
    this.canvasX = 50;
    this.canvasY = 150;
    this.width = 34;
    this.height = 26;
    this.radious = 12;

    this.wingSpeed = 0;
    this.state = 0;
    this.speed = 0;
    this.gravity = 0.25;
    this.jump = 4;
    this.offsetY = 0;
  }

  init(frames) {
    if (game.current === game.end) {
      this.state = 1;
    } else {
      this.wingSpeed = game.current ? 10 : 25;
      this.state += frames % this.wingSpeed == 0 ? 1 : 0;
      this.state = this.state % 4;
    }
    gameAssets.drawBird(this.compileBird(), this.state);
    this.dropDown();
    this.detectLowerground();
    if (game.current === game.start) {
      this.resetPosition();
    }
  }

  dropDown() {
    if (game.current === game.game) {
      this.speed += this.gravity;
      this.canvasY += this.speed;
    }
  }

  flap() {
    this.speed = -this.jump;
  }

  resetPosition() {
    if (game.current == game.start) {
      this.canvasY = 150;
    }
  }

  detectLowerground() {
    const { height: lowergroundHeight } = gameAssets.getLowerground();
    if (this.canvasY + this.height / 2 >= canvas.height - lowergroundHeight) {
      this.canvasY = canvas.height - lowergroundHeight - this.height / 2;
      if (game.current === game.game) {
        game.gameState = "end";
      }
    }
  }

  makeAnimation() {
    return [
      { sourceX: 276, sourceY: 112 },
      { sourceX: 276, sourceY: 139 },
      { sourceX: 276, sourceY: 164 },
      { sourceX: 276, sourceY: 139 },
    ];
  }

  compileBird() {
    return {
      animation: this.makeAnimation(),
      canvasX: this.canvasX,
      canvasY: this.canvasY,
      width: this.width,
      height: this.height,
    };
  }
  speedReset() {
    this.speed = 0;
  }
}

const bird = new Bird();
