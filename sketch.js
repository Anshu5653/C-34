const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13
var ball
var sling

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(400,height,800,20);

    box1 = new Box(600,100,70,70)
    box2 = new Box(600,100,70,70)
    box3 = new Box(600,100,70,70)
    box4 = new Box(600,100,70,70)
    box5 = new Box(600,100,70,70)

    box6 = new Box(400,100,70,70)
    box7 = new Box(400,100,70,70)
    box8 = new Box(400,100,70,70)
    box9 = new Box(400,100,70,70)
    box10 = new Box(400,100,70,70)
    box11 = new Box(400,100,70,70)
    box12 = new Box(400,100,70,70)

    ball = new Ball(200,200,40)

    sling = new Slingshot(ball.body,{x:200,y:50})
    
    
}

function draw(){
      background("Black") 
      Engine.update(engine) 
      
      ground.display()

      box1.display()
      box2.display()
      box3.display()
      box4.display()
      box5.display()
      box6.display()
      box7.display()
      box8.display()
      box9.display()
      box10.display()
      box11.display()
      box12.display()

      ball.display()

      sling.display()
      
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

