class Bob {
    constructor(x, y, radius) {
      var options = {
          'isStatic':true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.x=x;
      this.y=y;
      //this.image = loadImage("paper.png");
      this.radius=radius;
      this.body = Bodies.circle(this.x,this.y,this.radius,options);
      
      
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      //pos.x=mouseX;
      //pos.y=mouseY;
      push();
      var angle = this.body.angle;
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("red");
      ellipse(0,0,this.radius);
      pop();
    }
}