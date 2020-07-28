
var x = 0;
function setup() {

  createCanvas(600, 400);

}

function draw() {
  background(220);
  for(let i =0;i<1000;i+=10){
    nofit()
    stroke('green')
    strokeWeight(4)
    ellipse(350,250,i,i)

    stroke('blue')
    strokeWeight(3)
    ellipse(x,250,500,-i,500-i)
}
  if(x>width){
    x=0
  }else{
    x=x+3
}
}
