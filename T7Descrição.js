function tela7() {
  background("#00C2CB");
  image(imgdescricao, 0, 0);

  textSize(25);
  fill("black");
  textStyle("normal");
  textFont("vineta bt");
  text("Descrição", 188, 80);

  textSize(10);
  textFont("arial");
  text(mouseX + " " + mouseY, 30, 30);

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
