function setup() {
   createCanvas(800,400);
    fixedRect=createSprite(300, 400, 50, 80);
   movingRect=createSprite(200,800,80,30); 
   fixedRect.shapeColor="green";
   movingRect.shapeColor="green"; }
   function draw() { 
   background(255,255,255);
  movingRect.x=World.mouseX;
   movingRect.y=World.mouseY; 
   console.log(movingRect.x-fixedRect.x); 
   if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2  &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2  &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 ){
     fixedRect.shapeColor="red";
     movingRect.shapeColor="red";
     }else { fixedRect.shapeColor="green";
     movingRect.shapeColor="green"; }
 drawSprites(); }