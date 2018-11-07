
function setup() {

  createCanvas(400, 400);

}

function draw() {
  background(255);
  noStroke();

  var opacity = map(mouseX, 0, width, 0, 255);

  fill(255,160,10, opacity);
  ellipse(width/2, height/2, width);
}
