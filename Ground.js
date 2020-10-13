class Ground
{
    constructor(p, q, r, s)
    {
        var options = 
        {
            isStatic: true
        }
        
        this.body = Bodies.rectangle(p, q, r, s, options);
        this.width = r;
        this.height = s;
        World.add(world, this.body);
  }
show() 
 {
    push();
    rectMode(CENTER);
    fill('brown');
    noStroke();
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
    pop();
 } 
}