
function preload(){
gardenImage=loadImage("garden.png");
  
  catImage=loadAnimation('cat1.png');
  catWalking=loadAnimation("cat2.png", "cat3.png");
  catStanding=loadImage("cat4.png");
  
  mouseImage=loadImage('mouse1.png');
  mouseTeasing=loadAnimation('mouse2.png', 'mouse3.png');
  mouseScared=loadAnimation("mouse4.png");
}
function setup(){
  createCanvas(600, 400);

  garden=createSprite(300, 200, 600, 400);
  garden.addImage(gardenImage)
  garden.scale=0.7;
  
  cat=createSprite(500, 330);
  cat.addAnimation('sitting',catImage);
  cat.scale=0.1;
  
  mouse=createSprite(50, 330);
  mouse.addImage('teasing',mouseImage);
  mouse.scale=0.1;
}
function draw(){ 
if(keyCode === LEFT_ARROW){
  cat.addAnimation('walking', catWalking)
  cat.changeAnimation('walking')
  mouse.addAnimation("teasing1", mouseTeasing);
  mouse.changeAnimation("teasing1")
  cat.scale=0.14
  cat.velocityX=-5;
}
if (cat.x-mouse.x<(cat.width-mouse.width)/2){
  cat.addAnimation("Standing", catStanding);
  cat.changeAnimation("Standing");
  
  cat.scale=0.13
  cat.velocityX=0
 
  mouse.addAnimation("scared", mouseScared);
  mouse.changeAnimation("scared");
}
  drawSprites();
  keyPress();
}
function keyPress(){
   if(keyCode === LEFT_ARROW){
   cat.addAnimation('walking', catWalking)
    cat.changeAnimation('walking')
     mouse.addAnimation("teasing1", mouseTeasing);
     mouse.changeAnimation("teasing1")
    cat.scale=0.14

  }
}