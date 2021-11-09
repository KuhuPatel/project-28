class PlayerBase {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/base1.png");

    World.add(world, this.body);
  }

  reducelife(archerlife){
    if(archerlife === 2){
      this.life1 = 'red';

    }

    if(archerlife === 1){
      this.life2 = 'red';
    }

    if(archerlife === 0){
      this.life3 = 'red';
    }
    if(
      baseCollision.collided ||
      archerCollision.collided ||
      playerCollision.collided
    )
    {
      playerArcherLife -=1;
      player.reducelife(playerArcherLife);
      if(playerArcherLife <= 0){
        playerArcher.collapse = true;
        Matter.Body.setStatic(playerArcher.body, false);
        Matter.Body.setStatic(player.body, false);
        Matter.Body.setStatic(player.body, {
          x: width - 100,
          y: player.body.position.y
        });
      }

    }
  }
  
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
