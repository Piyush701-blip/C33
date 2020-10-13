const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var body1, body2, body3, body4, body5, body6; 
var ground;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;
var bgImage;
var constraint;

function preload()
{
  bgImage = loadImage("Assets/bg1.png");
  dateTime();
}

function setup() {
  var canvas = createCanvas(1200, 400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20); 
  platform = new Ground(150, 340, 300, 100);
  
  body1 = new Box(700,320,70,70); 
  body2 = new Box(920,320,70,70);
  body3 = new Box(700,240,70,70); 
  body4 = new Box(920,240,70,70);
  body5 = new Box(810,160,70,70);
  //body6 = new Box(400, 100, 70, 70);
  
  pig1 = new Pig(810, 350);
  pig2 = new Pig(810, 220);
  
  log1 = new Logs(810,260,300, PI/2); 
  log2 = new Logs(810,180,300, PI/2);  
  log3 = new Logs(760,120,150, PI/8); 
  log4 = new Logs(870,120,150, -PI/8); 
  
  bird = new Bird(300,300);

  constraint = new Constraint(bird.body, {x: 210, y: 100});
}

function draw() {
  if(bgImage)
  {
   background(bgImage);
  }
  else
  {
   background(222, 245, 268);
  }
  Engine.update(engine);

  body1.show();
  body2.show();
  body3.show();
  body4.show();
  body5.show();
  //body6.show();

  pig1.show();
  pig2.show();

  log1.show();
  log2.show();
  log3.show();
  log4.show();

  constraint.show();
  
  bird.show();
  
  ground.show();
  platform.show();

  console.log(bird.body.position);
}

function mouseDragged()
{
  Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY})
}

function mouseReleased()
{
  constraint.release();
}

function keyPressed()
{
  if (keyCode === 32 && bird.body.speed <= 1)
  {
    Matter.Body.setPosition(bird.body, {x: 209, y:113});
    constraint.attach(bird.body);
    bird.positions = [];
  }
}

async function dateTime()
{
 var response = await fetch("http://www.worldtimeapi.org/api/timezone/Asia/Kolkata");
 var receivedData = await response.json();

 var fetchedTime = receivedData.datetime.slice(11, 13);
 console.log(fetchedTime);

 if(fetchedTime <= 17 && fetchedTime > 6)
 {
  bgImage = loadImage("Assets/bg1.png");
 }
 else
 {
  bgImage = loadImage("Assets/bg2.jpg");
 }
}