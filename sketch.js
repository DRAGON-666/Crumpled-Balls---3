const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var dustbin1,dustbin2;

var ground;

var paper,lancher;


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	
	world = engine.world;


	dustbin1 =new Dustbin(800,250,280,PI/2);

	dustbin2 =new Dustbin(1000,250,280,PI/2);

	

	paper =new Paper(200,200);

	ground=new Ground(600,380,1200,20);

	lancher=new Lancher(paper.body,{x:200,y:100});
	
	
  
}


function draw() {
  rectMode(CENTER);

  background("yellow");

  Engine.update(engine);

	ground.display();

	dustbin1.display();

	dustbin2.display();

	paper.display();


	lancher.display();
	drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    lancher.lanch.bodyA=null;
    
}



