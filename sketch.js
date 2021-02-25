var cat,catImg,catImg2,catImg3;
var rat,ratImg,ratImg2;
var garden,gardenImg;

function preload() {
    //load the images here
catImg = loadAnimation("cat2.png","cat3.png");
catImg2 = loadImage("cat1.png");
catImg3 = loadImage("cat4.png");
ratImg = loadAnimation("mouse2.png","mouse3.png","mouse1.png");
ratImg1 = loadAnimation("mouse4.png");
gardenImg = loadImage("garden.png"); 

}

function setup(){
    createCanvas(600,600);
    garden = createSprite(300,300,20,20);
 garden.addImage("gardenImg",gardenImg); 
    //create tom and jerry sprites here
cat=createSprite(500,500,20,20);
cat.addAnimation("catImg",catImg);
cat.scale = 0.1 

  rat=createSprite(100,500,20,20);
rat.addAnimation("ratImg",ratImg);
rat.scale = 0.1 
}

function draw() {
  
    background(255);
  text(mouseX+","+mouseY,mouseX,mouseY);
//Write condition here to evalute if tom and jerry collide
if(rat.x - cat.x < (rat.width - cat.width)/2){ 
rat.addAnimation("ratImg1",ratImg1);
  rat.changeAnimation("ratImg1",ratImg1);
}
  if(cat.x - rat.x < (cat.width - rat.width)/2){ 
cat.addAnimation("catImg3",catImg3);
  cat.changeAnimation("catImg3",catImg3);
}
    drawSprites();
}

function keyPressed(){
if(keyCode===LEFT_ARROW){
  cat.velocityX=-5;
}
  if(keyCode===RIGHT_ARROW){
  cat.velocityX=5;
}
  
}