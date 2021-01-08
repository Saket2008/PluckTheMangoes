
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1, mango2, mango3, mango4, mango5, mango6
var rock, tree, treeImage
var ground
var boyImage, boy
var catapult

function preload()
{
	boyImage = loadImage("sprites/boy.png");
	treeImage = loadImage("sprites/tree.png");	
}

function setup() {
	createCanvas(800, 600);
	
	engine = Engine.create();
	world = engine.world;

	ground = new Grounds(400, 480, 800, 20);
	boy = createSprite(150,405,100,200);
	boy.addImage(boyImage);
	boy.scale = 0.13;
	boy.depth = 2;
	tree = createSprite(700, 290, 300, 400);
	tree.addImage(treeImage);
	tree.depth = 2;
	tree.scale = 0.31;
	rock = new Stones(80, 330);
	mango1 = new Mango(660, 170);
	mango2 = new Mango(710, 220);
	mango3 = new Mango(700, 175);
	mango4 = new Mango(655, 240);
	mango5 = new Mango(740, 155);
	mango6 = new Mango(755, 230);

	catapult = new Launcher(rock.body, {x:80, y:330});

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  drawSprites(); 
  ground.display();
  tree.display();
  rock.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  catapult.display();
  
  detectCollision(rock, mango1);
  detectCollision(rock, mango2);
  detectCollision(rock, mango3);
  detectCollision(rock, mango4);
  detectCollision(rock, mango5);
  detectCollision(rock, mango6);
}

function mouseDragged(){
	Matter.Body.setPosition(rock.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    catapult.fly();
}

function detectCollision(lstone, lmango){
	mangoPos = lmango.body.position;
	stonePos = lstone.body.position;

	var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);

	if (distance <= lmango.width/2 + lstone.width/2)
	{
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed(){
	if (keyCode === 32){
		catapult.attach(rock.body);
	}
}