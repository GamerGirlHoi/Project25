
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 300);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,270,15);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce()
	}
}


t