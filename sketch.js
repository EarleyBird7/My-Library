  
var fixedRect, movingRect,ob1,ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1=createSprite(200,200,50,50);
  ob1.shapeColor="green";
  ob2=createSprite(400,200,50,60);
  ob2.shapeColor="green";
ob1.velocityX=3;
ob2.velocityX=-3;
}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,ob2)){
movingRect.shapeColor = "red";
ob2.shapeColor = "red";
}


else {
movingRect.shapeColor = "green";
ob2.shapeColor = "green";
}
bounceOff(ob1,ob2);
  drawSprites();
}
