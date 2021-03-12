
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5,bobDiameter;
var chain1,chain1,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,100,500,55);

	bobDiameter=550;

	bob1=new Bob(230,550,40);
	bob2=new Bob(310,550,40);
	bob3=new Bob(390,550,40);
	bob4=new Bob(470,550,40);
	bob5=new Bob(550,550,40);

	
	chain1=new Chain(bob1.body,roof.body,-bobDiameter*2,0);
	chain2=new Chain(bob2.body,roof.body,-bobDiameter*1,0);
	chain3=new Chain(bob3.body,roof.body,0,0);
	chain4=new Chain(bob4.body,roof.body,-bobDiameter*1,0);
	chain5=new Chain(bob5.body,roof.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  rectMode(CENTER);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  drawSprites();
 
}



