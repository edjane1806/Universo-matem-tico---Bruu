function tela3() {
  background("#00C2CB");

  image(imginst1, 0, 0);

  push();
  fill("black");
  textSize(10);
  textFont("arial");
  text(mouseX + " " + mouseY, 30, 30);
  pop();

  push();
  fill("black");
  circle(50, 50, 40);
  pop();

  push();
  fill("00C2CB");
  textSize(20);
  textFont("arial");
  textStyle("bold");
  text(">", 42, 57);
  pop();
}
