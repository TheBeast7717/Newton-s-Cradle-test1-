const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;
var engine,world;
var fixedLog,fixedLog1;
var ground1;
var ball1,ball2;

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  // fixedLog = Bodies.rectangle(windowWidth/2,windowHeight/4,100,20);
  // World.add(world,fixedLog);

  ground1 = new Ground(windowWidth/2,windowHeight/1.3,windowWidth,15);

  fixedLog1 = new Ground(windowWidth/2,windowHeight/8,400,20);

 // ball1 = new Ball(windowWidth/2,windowHeight/3,50);
 // ball2 = new Ball(windowWidth/1.9,windowHeight/3,50);

//  center
  bob1 = new bob(640,100,40);

  bob2 = new bob(680,100,40);
	bob3 = new bob(600,100,40);
	bob4 = new bob(560,100,40);
  // last
  bob5 = new bob(720,100,40);
	// bob4 = new bob(480,275,20)
	// bob5 = new bob(540,275,20)

  rope1=new rope(bob1.body,fixedLog1.body,0);
	rope2=new rope(bob2.body,fixedLog1.body,50);
	rope3=new rope(bob3.body,fixedLog1.body,-50);
	rope4=new rope(bob4.body,fixedLog1.body,-90);
	rope5=new rope(bob5.body,fixedLog1.body,90);

   //chain1 = new Chain(ball1.body,fixedLog1.body);
   //chain2 = new Chain(ball2.body,fixedLog1.body);

}

function draw() {
  background(220);
  Engine.update(engine);

  text(windowWidth/2,200,200);

  // rectMode(CENTER);
  // rect(fixedLog.position.x,fixedLog.position.y,100,20);

  ground1.display();

  fixedLog1.display();


  // ball1.display();
  // ball2.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  //chain1.display();
  //chain2.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function keyPressed(){


  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob4.body,bob4.body.position, {x:-50,y:-45});
      
  }
}