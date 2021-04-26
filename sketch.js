
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,mango1,mango2,mango3,mango4,mango5,treeImg,ground,stone,chain;

function preload(){
	treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(1280, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	ground = new Ground(640,585,1280,20);
	mango1 = new Mango(900,250,20);
	mango2 = new Mango(950,220,30);
	mango3 = new Mango(1000,200,20);
	mango4 = new Mango(950,260,20);
	mango5 = new Mango(1050,260,30);
	stone = new Stone(55,200,20);
	boy = new Boy(200,500,100,150);
	chain = new Launcher(stone.body,{x:115, y:395})

	Engine.run(engine);
  
}


function draw() {
	
  Engine.update(engine);
  
  background(156);
	text(mouseX + "," +mouseY, mouseX, mouseY);
	imageMode(CENTER);
	image(treeImg, 1000,340,400,500);

	ground.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	stone.display();
	boy.display();
	chain.display();
	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);

}

function detectCollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=20)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:115, y:395})
		chain.attach(stone.body);
	}
}








