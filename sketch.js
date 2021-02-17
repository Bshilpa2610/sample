const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world ,engine;

function setup(){
  var canvas=createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  object =Bodies.rectangle(200,200,50,50);
  World.add(world,object);

  //console.log(object);
  //console.log(object.position.x);
}

function draw()
{
  background(0);
  rectMode(CENTER);
  Engine.update(engine);

    rect(object.position.x,object.position.y,50,50);
  
}
