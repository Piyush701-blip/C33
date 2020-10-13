class Parent
{
    constructor(x, y, w, z, a)
    {
        var options = 
        {
            restititution: 0.8,
            density: 1.5,
            friction: 2.0
        }
        
        this.body = Bodies.rectangle(x, y, w, z, options);
        this.width = w;
        this.height = z;
        this.animation = loadImage("Assets/base.png");
        World.add(world, this.body);
  }
show() 
 {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.animation, 0, 0, this.width, this.height);
    pop();
 } 
}