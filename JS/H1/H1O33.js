function setup() {
  canvas = createCanvas(1000,450);
  canvas.parent('processing');
}

function draw() {
  for (var rij = 0;rij < 450;rij += 50) {
    for (var kolom = 0;kolom < 450;kolom += 50) {
      tekenTegel(kolom,rij,1);
    }
  }
  translate(100,0);
  tekenTegel(50,0,9);
}

function tekenTegel(x,y,s) {
  push();
  scale(s);
  translate(x,y);
  noStroke();
  fill('darkCyan');
  triangle(0,0,25,25,50,0);  
  fill('DarkSlateGrey');
  triangle(0,0,25,25,0,50);
  fill('aquamarine');
  triangle(0,50,25,25,25,50);
  fill('cadetBlue');
  rect(25,25,25,25);
  fill('mediumseagreen')
  triangle(30,0,60,15,50,60)
  fill('mediumspringgreen')
  rect(5,15,15,10)
  pop();
}