export default class Bird {
  constructor(dimensions) {
    this.velocity = 0;
    this.dimensions = dimensions;
    this.x = Math.floor((dimensions["width"] * 0.3));
    this.y = Math.floor((dimensions["height"] * 0.5));   
    this.gravity = 0.5; 
  }

  drawBird(ctx) {
    // debugger
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(this.x, this.y, 40, 30);
  }

  animate(ctx) {
    // debugger
    // this.x += 1;
    this.move();
    this.drawBird(ctx);
  }

  move() {
    this.velocity += (this.gravity * this.velocity);
    this.velocity += this.gravity;

  }

  flap() {
    this.velocity = -8;
  }
}