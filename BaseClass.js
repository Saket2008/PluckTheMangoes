class BaseClass{
    constructor(x, y, width, height)
    {
        var options = {
            restitution: 0,
            friction: 0.5,
            density: 1.2
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.bmp");
        World.add(world, this.body)
    }

    display()
    {
        push();
        var pos = this.body.position;
        imageMode(CENTER)
        image(this.image,pos.x, pos.y, this.width, this.height);
        pop();
    }
}