var tela = 1;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  //Iniciando tela 1 = menu
  if (tela == 1) {
    tela1();
  }

  //iniciando tela 2 - mapa
  if (tela == 2) {
    tela2();
  }

  //iniciando tela 3 - Instruções 1
  if (tela == 3) {
    tela3();
  }
  //iniciando tela 4 - fase 1
  if (tela == 4) {
    tela4();
  }
  //iniciando tela 5 - errou 1
  if (tela == 5) {
    tela5();
  }
  //iniciando tela 6 = Instruções 2
  if (tela == 6) {
    tela6();
  }
  //iniciando tela 7 - Descricao
  if (tela == 7) {
    tela7();
  }
  //iniciando tela 8 - Creditos
  if (tela == 8) {
    tela8();
  }
  //iniciando tela 9- fase 2
  if (tela == 9) {
    tela9();
  }
  //iniciando tela 10- errou 2
  if (tela == 10) {
    tela10();
  }
  //iniciando tela 11- fase 3
  if (tela == 11) {
    tela11();
  }
  //iniciando tela 12 - Errou 3
  if (tela == 12) {
    tela12();
  }
  //iniciando tela 13 - finalização
  if (tela == 13) {
    tela13();
  }
  //iniciando tela 14- Instruções 3
  if (tela == 14) {
    tela14();
  }
}
