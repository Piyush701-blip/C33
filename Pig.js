class Pig extends Parent
{
    constructor(x, y)
    {
       super(x, y, 50, 50); 
       this.animation = loadImage("Assets/enemy.png");
       this.transparent = 255;
    }

    show()
    {
        if(this.body.speed < 3)
        {
            super.show();
        }
        else
        {
            World.remove(world, this.body);
            push();
            this.transparent = this.transparent - 5;
            tint(109, 226, 73, this.transparent);
            image(this.animation, this.body.position.x, this.body.position.y, 50, 50);
            pop();
        }
    }
}