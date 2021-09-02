var garden,rabbit,apple,grass,leaf,orange_leaf,red_leaf;
var gardenImg,rabbitImg,appleImg,grassImg,leafImg,leaf_orangeImg,red_leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  grassImg = loadImage("grass.png");
  leafImg = loadImage("leaf.png");
  leaf_orangeImg = loadImage("orangeLeaf.png");
  leaf_redImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);

// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
edges= createEdgeSprites();
}

function createApples(){
  if(frameCount % 100 === 0){
   apple = createSprite(random(50,350),40,10,10);
   apple.addImage(appleImg);
   apple.scale=0.07;
   apple.velocityY = 3; 
  }
 }

 function createLeaf(){
  if(frameCount % 100 === 0){
   leaf = createSprite(random(50,350),40,10,10);
   leaf.addImage(leafImg);
   leaf.scale=0.07;
   leaf.velocityY = 2; 
  }
 }

 function createleaf_Orange(){
  if(frameCount % 100 === 0){
   orange_leaf = createSprite(random(50,350),40,10,10);
   orange_leaf.addImage(leaf_orangeImg);
   orange_leaf.scale=0.08;
   orange_leaf.velocityY = 2; 
  }
 }

 function createleaf_Red(){
  if(frameCount % 100 === 0){
   red_leaf = createSprite(random(50,350),40,10,10);
   red_leaf.addImage(red_leafImg);
   red_leaf.scale=0.07;
   red_leaf.velocityY = 2; 
  }
 }

function draw() {
  background(0);

  rabbit.collide(edges);
 
 createApples()
 createLeaf()
 createleaf_Orange()
 createleaf_Red()
  
  drawSprites();
}
  


