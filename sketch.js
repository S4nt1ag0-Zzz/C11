var boat_movement,seaImage;
var sea,boat;

function preload(){
  boat_movement = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");

  sea = createSprite(200,200,100,100);
  sea.addImage("ocean",seaImage);
  sea.scale = 0.25;
  
  if(sea.x <0){
    sea.x = sea.width/2;
  }
  
  boat = createSprite(200,200,50,50);
  boat.addAnimation("boatMoving",boat_movement);
  boat.scale = 0.2;
  

  drawSprites();
}