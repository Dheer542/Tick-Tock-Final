var hr,mn,sec;
var hrangle,mnAngle,secAngle;


function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  translate(200,200);
  rotate(-90);
   
  hr = hour();
  mn = minute();
  sec = second();
  secAngle = map(sec,0,60,0,360);
  hrAngle =  map(hr %12,0,12,0,360);
  mnAngle =  map(mn,0,60,0,360);
  //draw the seconds hand
  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  //drawing the minutes hand
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

strokeWeight(10);
noFill();
stroke(255,0,0);
arc(0,0,300,300,0,secAngle);

stroke(0,255,0);
arc(0,0,280,280,0,mnAngle);

stroke(0,0,255);
arc(0,0,260,260,0,hrAngle);
 // drawSprites();
}