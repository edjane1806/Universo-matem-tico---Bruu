var b6r13x1 = 413;
var b6r13x2 = 448;
var b6r13y1 = 258;
var b6r13y2 = 280;
var b6r9x1 = 430;
var b6r9x2 = 450;
var b6r9y1 = 303;
var b6r9y2 = 331;
var b6r8x1 = 430;
var b6r8x2 = 450;
var b6r8y1 = 358;
var b6r8y2 = 383;
var bmapacx1 = 0;
var bmapacx2 = 165;
var bmapacy1 = 140;
var bmapacy2 = 250;
var bfase1r3x1 = 31;
var bfase1r3x2 = 153;
var bfase1r3y1 = 260;
var bfase1r3y2 = 300;
var bfase1r4x1 = 188;
var bfase1r4x2 = 309;
var bfase1r4y1 = 320;
var bfase1r4y2 = 360;
var bfase1r6x1 = 345;
var bfase1r6x2 = 465;
var bfase1r6y1 = 260;
var bfase1r6y2 = 303;
var bmapae1x1 = 330;
var bmapae1x2 = 500;
var bmapae1y2 = 250;
var bmapae1y1 = 185;
var binst2x1 = 400;
var binst2x2 = 441;
var binst2y1 = 420;
var binst2y2 = 447;
var binst3x1 = 407;
var binst3x2 = 445;
var binst3y1 = 273;
var binst3y2 = 302;
var bcaixa25x1 = 77;
var bcaixa25x2 = 161;
var bcaixa25y1 = 413;
var bcaixa25y2 = 443;
var bcaixa23x1 = 336;
var bcaixa23x2 = 420;
var bcaixa23y1 = 413;
var bcaixa23y2 = 445;
var bcaixa24x1 = 210;
var bcaixa24x2 = 292;
var bcaixa24y1 = 426;
var bcaixa24y2 = 457;
var berrou3x1 = 165;
var berrou3x2 = 330;
var berrou3y1 = 218;
var berrou3y2 = 285;
var berrou2x1 = 165;
var berrou2x2 = 332;
var berrou2y1 = 250;
var berrou2y2 = 315;
function mouseClicked() {
  //Tela 1 - Tela inicial
  if (tela == 1) {
    //Botão jogar - rect(380,150,100,50,20);
    if (mouseX >= 380 && mouseX <= 480 && mouseY >= 150 && mouseY <= 201) {
      tela = 2;
    }
    //descrição
    if (mouseX >= 381 && mouseX <= 477 && mouseY >= 219 && mouseY <= 269) {
      tela = 7;
    }
    //Creditos
    if (mouseX >= 380 && mouseX <= 475 && mouseY >= 290 && mouseY <= 335) {
      tela = 8;
    }
  }
  //ir para a instrução 1
  if (tela == 2) {
    if (
      mouseX >= bmapacx1 &&
      mouseX <= bmapacx2 &&
      mouseY >= bmapacy1 &&
      mouseY <= bmapacy2
    ) {
      tela = 3;
    }
  }

  //Tela 3 - Ir para o gabarito da instrução 1
  if (tela == 3) {
    if (mouseX >= 30 && mouseX <= 70 && mouseY >= 30 && mouseY <= 70) {
      tela = 4;
    }
  }

  //Tela 4 - Fase 1
  if (tela == 4) {
    //Botão errado
    if (
      mouseX >= bfase1r3x1 &&
      mouseX <= bfase1r3x2 &&
      mouseY >= bfase1r3y1 &&
      mouseY <= bfase1r3y2
    ) {
      tela = 5;
    }
    //Botão errado
    if (
      mouseX >= bfase1r4x1 &&
      mouseX <= bfase1r4x2 &&
      mouseY >= bfase1r4y1 &&
      mouseY <= bfase1r4y2
    ) {
      tela = 5;
    }
    if (
      mouseX >= bfase1r6x1 &&
      mouseX <= bfase1r6x2 &&
      mouseY >= bfase1r6y1 &&
      bfase1r6y2
    ) {
      tela = 6;
    }
  }
  //Tela 5 - Resposta errada na fase 1
  if (tela == 5) {
    //Botão voltar para fase 1
    if (
      mouseX >= bmapae1x1 &&
      mouseX <= bmapae1x2 &&
      mouseY >= bmapae1y1 &&
      mouseY <= bmapae1y2
    ) {
      tela = 6;
    }
  }
  //Tela 9 - Ir para a fase 1
  if (tela == 9) {
    //Ir para fase 1
    if (mouseX >= 420 && mouseX <= 455 && mouseY >= 30 && mouseY <= 70) {
      tela = 4;
    }
  }
  if (tela == 7 || tela == 8 || tela == 13) {
    //Voltar da descrição e creditos
    if (mouseX >= 30 && mouseX <= 70 && mouseY >= 30 && mouseY <= 70) {
      tela = 1;
    }
  }

  if (tela == 6) {
    if (
      mouseX >= binst2x1 &&
      mouseX <= binst2x2 &&
      mouseY >= binst2y1 &&
      mouseY <= binst2y2
    ) {
      tela = 9;
    }
  }

  //tela 9 - coleção de bolinhas
  if (tela == 9) {
    if (
      mouseX >= b6r13x1 &&
      mouseX <= b6r13x2 &&
      mouseY >= b6r13y1 &&
      mouseY <= b6r13y2
    ) {
      tela = 14;
    }
    //botão 9
    if (
      mouseX >= b6r9x1 &&
      mouseX <= b6r9x2 &&
      mouseY >= b6r9y1 &&
      mouseY <= b6r9y2
    ) {
      tela = 10;
    }
    //botão 8
    if (
      mouseX >= b6r8x1 &&
      mouseX <= b6r8x2 &&
      mouseY >= b6r8y1 &&
      mouseY <= b6r8y2
    ) {
      tela = 10;
    }
  }
  if (tela == 14) {
    if (
      mouseX >= binst3x1 &&
      mouseX <= binst3x2 &&
      mouseY >= binst3y1 &&
      mouseY <= binst3y2
    ) {
      tela = 11;
    }
  }
  if (tela == 11) {
    if (
      mouseX >= bcaixa25x1 &&
      mouseX <= bcaixa25x2 &&
      mouseY >= bcaixa25y1 &&
      mouseY <= bcaixa25y2
    ) {
      tela = 12;
    }
    if (
      mouseX >= bcaixa24x1 &&
      mouseX <= bcaixa24x2 &&
      mouseY >= bcaixa24y1 &&
      mouseY <= bcaixa24y2
    ) {
      tela = 13;
    }
    if (
      mouseX >= bcaixa23x1 &&
      mouseX <= bcaixa23x2 &&
      mouseY >= bcaixa23y1 &&
      mouseY <= bcaixa23y2
    ) {
      tela = 12;
    }
  }
  if (tela == 12) {
    if (
      mouseX >= berrou3x1 &&
      mouseX <= berrou3x2 &&
      mouseY >= berrou3y1 &&
      mouseY <= berrou3y2
    ) {
      tela = 13;
    }
  }
  if (tela == 10) {
    if (
      mouseX >= berrou2x1 &&
      mouseX <= berrou2x2 &&
      mouseY >= berrou2y1 &&
      mouseY <= berrou2y2
    ) {
      tela = 14;
    }
  }
}
