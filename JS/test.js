function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function tekenkerk(hoogte) {
noStroke();
fill('black');
rect(0,350,75,hoogte);
fill('brown');
triangle(0,350,75,350,37,310);
}

function draw() {
  noStroke();
  tekenkerk(300);
  translate(200,-100);
  tekenkerk(300);
  translate(100,-100);
  tekenkerk(300);
}