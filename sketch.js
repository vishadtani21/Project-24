var groundSprite;
var paperball;
var side1,side2,side3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	
  groundSprite=createSprite(width/2, height-30, width,10);
	groundSprite.shapeColor= "brown";
	
	
	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
	World.add(world, ground);

  
	

	side1= new Dustbin(900,620,20,100);
	side3= new Dustbin(1010,660,200,20);
	side2= new Dustbin(1100,620,20,100);

  paperball = new Paper (100,630,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");


  

  side1.display();
  side3.display();
  side2.display();
  
  paperball.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paperball.body, paperball.body.position, {x:85,y:-85});
}

}

