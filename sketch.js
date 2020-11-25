
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(100,350)
	ball3 = new Ball(180,80)
	log1 = new Log(400,-300,600,30)
	chain1 = new Chain(ball1.body,{x:140,y:-320})
	Engine.run(engine);
  
}


function draw() {
	console.log("function is running")
 rectMode(CENTER);
  background("black");
  ball1.display()
  log1.display()
  ball3.display()
 
 
}



