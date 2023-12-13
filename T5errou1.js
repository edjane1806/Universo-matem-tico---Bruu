function tela5() {
  background("#00C2CB");
  image(imgerrou1, 0, 0);
  push();
  fill("black");
  textSize(10);
  textFont("arial");
  text(mouseX + " " + mouseY, 30, 30);
  pop();
}
