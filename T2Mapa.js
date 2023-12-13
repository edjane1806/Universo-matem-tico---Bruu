function tela2() {
  image(imgmapa, 0, 0);
  push();
  fill("black");
  textSize(10);
  textFont("arial");
  text(mouseX + " " + mouseY, 30, 30);
  pop();

  textSize(20);
  fill("red");
  textStyle("normal");
  textFont("vineta bt");
  text("Aperte no botão do Bruu", 60, 410);
}
