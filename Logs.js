class Logs extends Parent
{
    constructor(x, y, h, a)
    {
        super(x, y, 20, h, a);
        this.animation = loadImage("Assets/wood2.png");
        Matter.Body.setAngle(this.body, a);
  } 
}