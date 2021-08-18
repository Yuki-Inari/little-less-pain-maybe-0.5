const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   Player = new Player(285,PlayerBase.body.position.y -153,50,180);
   PlayerBase = new PlayerBase(300, random(450,height-300),180,150);
   ComputerBase = new ComputerBase(180,random(450,height-300),180,150)
   ComputerPlayer = new ComputerPlayer(0,PlayerBase.body.position.y -153,50,180);
}

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   PlayerBase.display();
  
   ComputerBase.display();
  

   //display Player and computerplayer
   Player.display();
   PlayerBase.display();


}
