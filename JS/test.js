function setup() {
  canvas = createCanvas(600,300);
  canvas.parent('processing');
}

function draw() {
  noStroke();
  background('cyan');

  if (mouseY > 200) {
    fill('orange')
  }
  else {
  fill('yellow');
  }
  ellipse(width/2,200,200);
  fill('green');
  rect(0,200,600);

  fill('red');
  triangle(90, 100, 50, 150, 130, 150)
  fill('gray');
  rect(50, 150, 80, 80);
}
