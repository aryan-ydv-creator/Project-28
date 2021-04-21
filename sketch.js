const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;
var paper;
var side1,side2,side3;
var dustimg;
var ropes;

function preload(){
	dustimg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


	//Create a Ground
	ground = Bodies.rectangle(width/2, 668, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	paper = new ball(50,350)
	ropes = new rope(paper.body,{x:150,y:300})
	
	var dust = createSprite(width-200,height-120,100,130)
	dust.addImage(dustimg)
	dust.scale = 0.5

	side1 = new Side(width-140,height-120,15,120);
	side2 = new Side(width-260,height-120,15,120);
	side3 = new Side(width-200,height-45,100,15);	
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  drawSprites();
  
  ropes.display();
  paper.display();
  side1.display();
  side2.display();
  side3.display();
 rect(ground.position.x,ground.position.y,width, 10)
}

// function keyPressed() {
//  if (keyCode === UP_ARROW) {

//     Matter.Body.applyForce(paper.body,paper.body.position,{x:27,y:-27});
//   }
// }

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x:mouseX , y:mouseY})
}

function mouseReleased(){
    ropes.fly();
}