
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = new Paper(100, 100, 20)
    floor = new Ground(400, 700, 800, 20)
    wall1 = new Dustbin(700, 680, 10, 90)
    wall2 = new Dustbin(500, 680, 10, 90)
    wall3 = new Dustbin(600, 690, 200, 10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ball.display();
  floor.display();
  wall1.display();
  wall2.display();
  wall3.display();

}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:40, y:-70})
  }
}


