function setup() {
  createCanvas(500, 400);
  img = loadImage('meme.jpg');
  
}

function draw() {
  background(220);
  image(img, 0, 0, 500, 400);

  fill(255); 
  stroke(0); 
  strokeWeight(7); 

  textStyle(BOLD); 
  textSize(40); 
  text('NOT SURE IF I HATE IT', 40, 60);
 // text('OR LOVE IT', 140, 380);  
  
  noStroke();
  fill("black");
  let x1 = map(mouseX, 0, width, 236, 270);
  ellipse(x1, 203, 9, 9);
 // This ellipse is constrained to the 0-100 range
  //after setting withinBounds to true
  let x2 = map(mouseX, 0, width, 289, 324, true);
  ellipse(x2, 201, 9, 9);
  
  if (mouseIsPressed) {
  fill(255); 
  stroke(0); 
  strokeWeight(7); 
   textStyle(BOLD); //BOLD
  textSize(40); //size
  text('OR HATE IT', 140, 380); 
  tint("red");
    
  } else {
      fill(255); 
  stroke(0); 
  strokeWeight(7); 
     textStyle(BOLD); //BOLD
  textSize(40); //size
  text('OR LOVE IT', 140, 380); 
    noTint();
  }

  print(mouseIsPressed);
}