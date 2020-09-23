var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box_leftside,box_rightside,box_bottomside;
var box_leftside_Sprite,box_rightside_Sprite,box_bottomside_Sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	box_leftside_Sprite = createSprite(290,610,20,100);
	box_leftside_Sprite.shapeColor = color(255,0,0);

	box_rightside_Sprite = createSprite(510,610,20,100);
	box_rightside_Sprite.shapeColor = color(255,0,0);

	box_bottomside_Sprite = createSprite(width/2,650,200,20);
	box_bottomside_Sprite.shapeColor = color(255,0,0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0 , isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	//Create a red Box
	box_leftside = Bodies.rectangle(290,595,20,100, {isStatic:true} ); 
	World.add(world,box_leftside);
	
	box_rightside = Bodies.rectangle(510,595,20,100, {isStatic:true} );
	World.add(world,box_rightside);

	box_bottomside = Bodies.rectangle(width/2,635,200,20, {isStatic:true} );
	World.add(world,box_bottomside);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



