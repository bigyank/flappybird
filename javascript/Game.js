class Game {
  constructor() {
    this.current = 0;
    this.start = 0;
    this.game = 1;
    this.end = 2;
    this.bestscore = parseInt(localStorage.getItem("bestscore")) || 0;
    this.score = 0;
  }

  set gameState(state) {
    switch (state) {
      case "start":
        this.current = 0;
        break;
      case "game":
        this.current = 1;
        break;
      case "end":
        this.current = 2;
      default:
        break;
    }
  }

  drawScore() {
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#000";

    if (this.current === this.game) {
      ctx.lineWidth = 2;
      ctx.font = "35px Teko";
      ctx.fillText(this.score, canvas.width / 2, 50);
      ctx.strokeText(this.score, canvas.width / 2, 50);
      // end screen
    } else if (this.current === this.end) {
      ctx.font = "40px Teko";
      ctx.fillText(this.score, 225, 186);
      ctx.strokeText(this.score, 225, 186);

      ctx.fillText(this.bestscore, 225, 228);
      ctx.strokeText(this.bestscore, 225, 228);
    }
  }
}

const game = new Game();
