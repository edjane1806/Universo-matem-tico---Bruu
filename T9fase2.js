var raio = 15;
var raioRo = 10;
var pxRo = 14;
var pyRo = 360;
var pxAz = 60;
var pyAz = 320;
function tela9() {
  background("#00C2CB");
 
  image(imgfase2, 0, 0);
  push();
  fill("black");
  textSize(10);
  textFont("arial");
  text(mouseX + " " + mouseY, 30, 30);
  pop();

  push();
  fill("#FFEB3B");
  circle(200, 250, raio);
  pop();

  push();
  fill("#FF6983");
  circle(250, 355, raio);
  pop();

  push();
  fill("blue");
  circle(104, 345, raio);
  circle(355, 355, raio);
  pop();

  if (mouseIsPressed && dist(pxRo, pyRo, mouseX, mouseY) < raioRo) {
    pxRo = mouseX;
    pyRo = mouseY;
  }
  push();
  fill("#FFA6E3");
  circle(pxRo, pyRo, raioRo);
  pop();

  if (mouseIsPressed && dist(pxAz, pyAz, mouseX, mouseY) < raio) {
    pxAz = mouseX;
    pyAz = mouseY;
  }
  push();
  fill("#00C2CB");
  circle(pxAz, pyAz, raio);
  pop();
}
