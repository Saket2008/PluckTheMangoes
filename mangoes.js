class Mango extends BaseClass{
    constructor(x,y){
        super(x,y,35,35);

        Matter.Body.setStatic(this.body, true);       
        this.image = loadImage("sprites/mango.png");
    }
}