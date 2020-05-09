const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bob,holder;
var ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world =  engine.world;

  ground = new Ground();
  holder = new Holder();
  bob = new Bob(200,300,60);
  connector = new Connector({x:400,y:100},bob.body);
}

function draw() {
  background("yellow");   
  Engine.update(engine);

  textSize(10);
  fill("cyan");

  text("Drag mouse to set oscillation to the bob",150,30);
  text("Press enter to stop the pendulum from oscillating",220,50);

  text("x:"+mouseX,50,50); 
  text("y:"+mouseY,50,70);

ground.display();
holder.display();
bob.display();
connector.display(); 


}

function mouseDragged(){
  Matter.Body.setPosition(bob.body,{x: mouseX , y: mouseY})
  Matter.Body.setStatic(bob.body,false);
}

function keyPressed(){
  if(keyCode=ENTER){
    Matter.Body.setStatic(bob.body,true);
  }
}