let tri;

function setup() {

  createCanvas(400, 400);
  tri = new Triangle();
  angleMode(DEGREES);

}

function draw() {
  background(0)
  print("Hello World!");
  background(255);




  drawSquares();
  drawFreeShape();
  drawCircles();

  push();
    translate(width*0.5, height*0.5);
    rotate(frameCount);
    tri.display();
  pop();

}

class Triangle {
  constructor () {
    this.x1 = 100;
    this.y1 = 30;
    this.x2 = this.x1 + 30;
    this.y2 = this.y1 + 50;
    this.x3 = this.x1 - 30;
    this.y3 = this.y2;

  }
  display() {
    fill(200,200,304);
    noStroke();
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }

}

function drawCircles() {

  noStroke();
  fill(0,200,302)
  ellipse(200,200,100,100)
  ellipse(200,300,80,80)
}

function drawFreeShape() {

  fill(200,200,304)
  bezier(200, 230, 40, 40, -100, 100, 100, 100)
  fill(102,493,299)
  bezier(200, 230, 20, 10, -100, 100, 100, 100)
  fill(200,300,403)
  bezier(400, 230, 20, 10, -100, 100, 100, 100)
  fill(101,233,219)
  bezier(400, 230, 100, 40, -100, 100, 100, 100)
}

function drawSquares() {

  noStroke()
  fill(140, 150, 60);
  rect(25, 25, 350, 350);
  fill(100, 110, 80);
  rect(50, 50, 300, 300);
  fill(0);
  rect(75, 75, 250, 250);
  fill(140,150, 60);
  rect(100, 100, 200, 200);
}
