var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  
  thickness = random(22, 83);
  speed=random(223, 321);
  weight=random(30, 52);
  
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  //give the bullet a colour
  //   bullet.shapeColor=color(255);

  wall = createSprite(1200, 200, thickness, height/2);
  
  //give the wall a colour
  // wall.shapeColor=color(230,230,230);


}

function draw() {
  background(255,255,255);  

  if(hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage > 10) {
      wall.shapeColor = color(255, 0, 0);
    }

    if(damage<10) {
      wall.shapeColor = color(0, 255, 0);
    }

  }
  drawSprites();
}

//use different words as arguments in this function.
//bullet & wall are already the names of the variables in which you have created sprites
function hasCollided(bullet, wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge =wall.x;
  if(bulletRightEdge>=wallLeftEdge) {

    return true;
  }
 return false;
}
