const Engine = Matter.Engine;
 const World = Matter.World;

  const Bodies = Matter.Bodies;
snow=[]
var engine,world
function preload(){
snowfall=loadImage("snow1.jpg")




}



function setup() {
  engine = Engine.create();
  world = engine.world;


  createCanvas(800,400);
  bgimage=createSprite(400, 200, 50, 50);
  bgimage.addImage("s",snowfall)
  bgimage.scale=1.5
for(var i=0;i<100;i++){
snow.push(new Snow(random(0,400),random(0,400)))


}
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  drawSprites();
  for(var i=0;i<snow.length;i++){
snow[i].display()
snow[i].reset()



  }
}