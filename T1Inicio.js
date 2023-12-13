var imgMenu;
var imgcreditos;
var imgdescricao;
var imgmapa;
var imginst1;
var imgfase1;
var imgerrou1;
var imginst2;
var imgfase2;
var imgerrou2;
var imginst3;
var imgfase3;
var vetorEquipe = [];
var contAnimacao = 0;
function preload() {
  imgMenu = loadImage("menu.png");
  imgcreditos = loadImage("img/creditos.png");
  imgdescricao = loadImage("img/descricao.png");
  imgmapa = loadImage("img/mapa.png");
  imginst1 = loadImage("img/inst1.png");
  imgfase1 = loadImage("img/fase1.png");
  imgerrou1 = loadImage("img/errou1.png");
  imginst2 = loadImage("img/inst2.png");
  imgfase2 = loadImage("img/fase2.png");
  imgerrou2 = loadImage("img/errou2.png");
  imgfase3 = loadImage("img/fase3.png");
  imginst3 = loadImage("img/inst3.png");
  imgerrou3 = loadImage("img/errou3.png");
  for (i = 0; i < 4; i++) {
    vetorEquipe[i] = loadImage("img/fig0000" + i + ".png");
  }
}

function tela1() {
  background("#00C2CB");

  image(imgMenu, 0, 0);

  push();
  if (mouseX >= 380 && mouseX <= 480 && mouseY >= 150 && mouseY <= 200) {
    fill("black");
    rect(380, 150, 100, 50, 20);
  } else {
    fill("white");
    rect(380, 150, 100, 50, 20);
    pop();
  }

  push();
  if (mouseX >= 380 && mouseX <= 480 && mouseY >= 218 && mouseY <= 270) {
    fill("black");
    rect(380, 220, 100, 50, 20);
  } else {
    fill("white");
    rect(380, 220, 100, 50, 20);
    pop();
  }

  push();
  if (mouseX >= 380 && mouseX <= 480 && mouseY >= 290 && mouseY <= 340) {
    fill("black");
    rect(380, 290, 100, 50, 20);
  } else {
    fill("white");
    rect(380, 290, 100, 50, 20);
    pop();
  }

  textSize(10);
  textFont("arial");
  text(mouseX + " " + mouseY, 30, 30);

  textSize(20);
  textStyle("bold");
  textFont("arial");
  if (mouseX >= 380 && mouseX <= 480 && mouseY >= 148 && mouseY <= 200) {
    fill("white");
    text("Jogar", 404, 182);
  } else {
    fill("black");
    text("Jogar", 404, 182);
  }

  textSize(18);
  textFont("arial");
  textStyle("bold");
  if (mouseX >= 380 && mouseX <= 480 && mouseY >= 218 && mouseY <= 270) {
    fill("white");
    text("Descrição", 387, 251);
  } else {
    fill("black");
    text("Descrição", 387, 251);
  }

  textSize(20);
  textFont("arial");
  textStyle("bold");
  if (mouseX >= 380 && mouseX <= 480 && mouseY >= 287 && mouseY <= 340) {
    fill("white");
    text("Créditos", 390, 322);
  } else {
    fill("black");
    text("Créditos", 390, 322);
  }

  textSize(25);
  fill("black");
  textStyle("normal");
  textFont("vineta bt");
  text("Universo matemático", 40, 80);
}
