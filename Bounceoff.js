var fixedRect,movingRect;

function setup()
{
  createCanvas(600,600);
  fixedRect=createSprite(200,200,50,50);
  fixedRect.shapeColor="blue";
  fixedRect.debug=true;

  movingRect=createSprite(200,500,50,50);
  movingRect.shapeColor="blue";
  movingRect.debug=true;

  movingRect.velocityY=-2;
  fixedRect.velocityY=2;

}   

function draw()
{
  background("gold");
  
  bounceoff(movingRect,fixedRect);
 
  drawSprites();

}

