class Game {
  constructor() {
    this.current = 0;
    this.start = 0;
    this.game = 1;
    this.end = 2;
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
}

const game = new Game();
