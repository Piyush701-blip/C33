class Bird extends Parent
{
    constructor(x, y)
    {
        super(x, y, 50, 50);
        this.animation = loadImage("Assets/bird.png");
        this.animation2 = loadImage("Assets/smoke.png");
        this.positions = [];
  }
show() 
 {
    super.show();
    if(this.body.velocity.x > 5.5 && this.body.position.x > 235)
    {
    var lastPosition = [this.body.position.x, this.body.position.y];
    //console.log(lastPosition);
    this.positions.push(lastPosition);
    }

    for(var i = 0; i < this.positions.length; i++)
    {
      image(this.animation2, this.positions[i][0], this.positions[i][1])
    }

 }
}