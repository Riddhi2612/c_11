var path , pathImg ;
var runner , runnerImg , runnerImg2;
var invisibleBoundary ;
var invisibleBoundary2 ;

function preload(){
  pathImg= loadImage("path.png")
  runnerImg=loadAnimation("Runner-1.png")
  runnerImg2=loadAnimation("Runner-2.png")
}

function setup()
{
  createCanvas(600,400);
  
}



function draw() {
  background(0);
  
  spawnPath();
  createEdgeSprites();
  SpawnInvisibleBoundary();
  spawnRunner();
  drawSprites();



} 

function spawnPath() {
  if (frameCount % 50 === 0 ){
    path = createSprite(300,0);
  path.addImage("path", pathImg);
  path.velocityY+=10
  }
}
function spawnRunner()  {
  runner=createSprite(300,340,10,10);
  runner.addAnimation("runner" , runnerImg);
  runner.scale = 0.05

              if (keyWentDown("right")){
                runner.velocityX+=2
              }
  

              if (keyWentDown("left")){
                runner.velocityX-=2 
              }
              if (keyWentDown("up")){
                runner.velocityY-=2 
              }
              if (keyWentDown("down")){
                runner.velocityY-=2 
              }
              if (runner.istouching)



}

function SpawnInvisibleBoundary() {
  if (frameCount % 50 === 0) {
  invisibleBoundary = createSprite(160,200,20,400);
  invisibleBoundary.visible = false;
  invisibleBoundary2 = createSprite(445,200,20,400);
  invisibleBoundary2.visible = false;

  }
}



