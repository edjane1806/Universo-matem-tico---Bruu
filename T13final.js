
function tela13(){
  
  background('#00C2CB');
  image(vetorEquipe[contAnimacao],0,0);
  contAnimacao++;
  if(contAnimacao>=4){
    contAnimacao=0
  } 
  textSize(10);
  textFont("arial");
  text(mouseX + " " + mouseY, 30, 30);
  
  textSize(40)
  fill('rgb(255,0,0)')
  textStyle('bold')
  textFont('vineta bt');
  text('Parabéns', 90, 145)
  
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