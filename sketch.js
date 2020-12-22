
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,dg,og,fg;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600,600);
monkey = createSprite(80,315,20,20);
 monkey. addAnimation("Moving",monkey_running);
monkey.scale=0.1

  ground=createSprite(450,350,900,10);
  ground.velocityX=-5;
  dg=new Group();
  fg=new Group();
  og=new Group();
  console.log(ground.x)
}
function draw() {
background("white");
  monkey.collide(ground);
  if(ground.x>0){
    ground.x=ground.width/2
  }
      if(keyDown("space")) {
        monkey.velocityY = -12;
    }    
    
    if(fg.isTouching(monkey)) {
      fg.destroyEach();
      
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  food();
  obstacles();
  drawSprites();
}
function food() {
  if (frameCount % 80 === 0) {
    banana = createSprite(400,350,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200));
    banana.scale = 0.1;
    
    banana.velocityX = -3;
    banana.lifetime = 200;
    
    fg.add(banana);
  }
}

function obstacles(){
  if (frameCount%200===0){
    obstacle=createSprite(250,320,10,10)
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=2;
    obstacle.scale=0.2
    obstacle.lifetime=700
    og.add(obstacle)
  }
}




