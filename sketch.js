var moonImg, shipImg, earth, moon, ship;

function preload() {
  earthImg = loadImage('https://stephensheridan.github.io/assets/earth.png');
  moonImg = loadImage('https://stephensheridan.github.io/assets/moon.png');
  shipImg = loadImage('https://stephensheridan.github.io/assets/ship.png');
}

function setup() {
  createCanvas(1200, 800);
  
  earth = new Sprite(600, 400, 100);
  earth.addImage(earthImg);
  earth.layer = 1;
  earth.collider = 'kinematic'; // Stop the earth from moving
  
  moon = new Sprite(400, 120, 100);
  moon.addImage(moonImg);
  moon.vel.y = 6;
  moon.rotationSpeed = 1;
  moon.layer = 2;
   
  ship = new Sprite(100,200,50);
  ship.addImage(shipImg);
  ship.vel.x = 2;

}

function drawStars() {
  for (var i = 0; i < 100; i++) {
    var x = random(0, width);
    var y = random(0, height);
    fill(255);
    ellipse(x, y, random(1, 3), random(1, 3));
  }
}
function resetShip(){
    ship.x = -200;
    ship.y = random(80, height-80);
    ship.vel.x = 2;
    ship.vel.y = 0;
    ship.rotation = 0;
    ship.rotationSpeed = 0;
}
function draw() { 
  background(10, 70);
  drawStars();
  moon.attractTo(earth, 50);

  if (ship.x-500 > width || ship.y-500 > height) {
    resetShip();
  }

  if (ship.x+500 < 0  || ship.y+500 < 0) {
    resetShip();
  }
  

}

