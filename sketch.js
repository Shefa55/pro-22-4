const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var roof;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;

    var bob_options = {
		isStatic:false,
		restitution:1,
		friction:0,
		density:08
	}

	var roof_options={
		isStatic:true			
	}

	bob1 = Bodies.circle(315,380,20,bob_options)
	World.add(world,bob1)
	bob2 = Bodies.circle(355,380,20,bob_options)
	World.add(world,bob2)
	bob3 = Bodies.circle(395,380,20,bob_options)
	World.add(world,bob3)
	bob4 = Bodies.circle(435,380,20,bob_options)
	World.add(world,bob4)
	bob5 = Bodies.circle(475,380,20,bob_options)
	World.add(world,bob5)

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	rope1 = new Rope(bob1,{x:315, y:100})
	rope2 = new Rope(bob2,{x:355, y:100})
	rope3 = new Rope(bob3,{x:395, y:100})
	rope4 = new Rope(bob4,{x:435, y:100})
	rope5 = new Rope(bob5,{x:475, y:100})

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  textSize(25)
  text("Press up arrow to move bob",250,50)

  rect(roof.position.x,roof.position.y,230,20);
  
  
	rope1.show();
	rope2.show();
	rope3.show();
	rope4.show();
	rope5.show();

  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,20)
  ellipse(bob2.position.x,bob2.position.y,20)
  ellipse(bob3.position.x,bob3.position.y,20)
  ellipse(bob4.position.x,bob4.position.y,20)
  ellipse(bob5.position.x,bob5.position.y,20)


 Engine.update(engine)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1,bob1.position,{x:-150,y:-60})
	}
}
