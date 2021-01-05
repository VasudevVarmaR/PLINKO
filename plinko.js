class Plinko
{
    constructor(x,y,r)
    {
        var options=
        {
            isStatic : true
        }
        this.r=r;
        this.body = Bodies.circle(x,y,20,options);
        World.add(world, this.body);
    }

    
    display()
    {
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      fill("white");
      ellipseMode(CENTER);
      ellipse(0,0,20,20);
      pop();
    }
}