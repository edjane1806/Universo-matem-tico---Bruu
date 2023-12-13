function tela8() {
  background(0, 220, 220);
  image(imgcreditos, 0, 0);
  
  push();
  fill("black");
  circle(50, 50, 40);
  pop();

  push();
  fill("00C2CB");
  textSize(20);
  textFont("arial");
  textStyle("bold");
  text("<", 45, 57);
  pop();
}
