class Constraint
{
    constructor(bodyA, pointB)
    {
       var options =
       {
           bodyA : bodyA,
           pointB : pointB,
           stiffness : 0.07,
           length : 10 
       }
        this.constraint = Matter.Constraint.create(options);
        World.add(world, this.constraint);
        this.animation1 = loadImage("Assets/sling1.png");
        this.animation2 = loadImage("Assets/sling2.png");
    }
show()
{
    push();
    strokeWeight(4);
    stroke('#53270F');
    if(this.constraint.bodyA !== null)
    {
    line(this.constraint.bodyA.position.x, this.constraint.bodyA.position.y, this.constraint.pointB.x + 10, this.constraint.pointB.y + 25);
    line(this.constraint.bodyA.position.x, this.constraint.bodyA.position.y, this.constraint.pointB.x + -15, this.constraint.pointB.y + 25);
    }
    image(this.animation1, 200, 95);
    image(this.animation2, 172, 85);
    pop();
}

release()
{
    this.constraint.bodyA = null;
}

attach(body)
 {
   this.constraint.bodyA = body;
}
}
