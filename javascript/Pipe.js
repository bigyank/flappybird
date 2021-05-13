class Pipe {
  constructor() {
    this.position = [];

    this.top = {
      sourceX: 553,
      sourceY: 0,
    };

    this.bottom = {
      sourceX: 502,
      sourceY: 0,
    };

    this.width = 53;
    this.height = 400;
    this.gap = 85;
    this.maxYpos = -150;
    this.dx = 2;
  }

  init() {
    this.position.map((pipe) => {
      let topYpos = pipe.y;
      let bottomYpos = pipe.y + this.height + this.gap;

      ctx.drawImage(
        gameAssets.sprite,
        this.top.sourceX,
        this.top.sourceY,
        this.width,
        this.height,
        pipe.x,
        topYpos,
        this.width,
        this.height
      );

      ctx.drawImage(
        gameAssets.sprite,
        this.bottom.sourceX,
        this.bottom.sourceY,
        this.width,
        this.height,
        pipe.x,
        bottomYpos,
        this.width,
        this.height
      );
    });

    this.update();
  }

  update() {
    if (game.current !== game.game) return;
    if (frame % 100 === 0) {
      this.position.push({
        x: canvas.width,
        y: this.maxYpos * (Math.random() + 1),
      });
    }

    this.position.map((pipe) => {
      pipe.x -= this.dx;

      // remove pipes when they go outside screen
      if (pipe.x + this.width <= 0) {
        this.position.shift();
      }
    });
  }
}

const pipe = new Pipe();
