//The setup function only happens once
var sandy=5;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
   
}

//The draw function happens over and over again
function draw() {
  background(173,sandy,230);
  stroke(255,255,127) // an RGB color for the circle's border
  fill(random(30,255),255,random(130,200),150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  rect(mouseX,mouseY,200,200);
  fill(116,140,70);
  ellipse(250,sandy,100,100); 
  // ellipse descends from the top
  ellipse(random(20,300),random(30,200),75,75);
}

function mousePressed(){
  if (sandy>=250){
    sandy=5;
  }else{
    sandy=sandy+10;
  }
  
}