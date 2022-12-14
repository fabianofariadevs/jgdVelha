const player1 = "X";
const player2 = "O";

var vezDe = player1;
var gameOver = false;  


definirQuadrados();

function atualizarJogador() {

    if (gameOver) {return;}
    
    if (vezDe == player1) {

        var player = document.querySelectorAll("#jogador img")[0];
        player.setAttribute("src", "/img/xis.jpg");

    } else {

        var player = document.querySelectorAll("#jogador img")[0];
        player.setAttribute("src", "/img/bola.jpg");
    }
}

function definirQuadrados() {

    var quadrados = document.getElementsByClassName ("tabuleiro");
    
    for (var i = 0; i < quadrados.length; i++){

        quadrados[i].addEventListener("click", function() {

            if (gameOver) {return;}

            if(this.getElementsByClassName('img').length == 0){

                if (vezDe == player1) {
                    this.innerHTML = "<img src='/img/xis.jpg'>";
                    this.setAttribute("jogada", player1);
                    vezDe = player2;
                }else {
                    this.innerHTML = "<img src='/img/bola.jpg'>";
                    this.setAttribute("jogada", player2);
                    vezDe = player1;
                }
                atualizarJogador();
                verificarVencedor();
            }
        });
    }
}

async function verificarVencedor(){

    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");
    
    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");
    
    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");
    
    var vencedor = "";

    if((a1 == b1 && a1 == c1 && a1 !="" ) || (a1 == a2 && a1 == a3 && a1 != "" ) || (a1 == b2 && a1 == c3 && a1 != "")){  
    vencedor = a1;
}else if((a2 == b2 && a2 == c2 && a2 !="" )){  
    vencedor = a2;
}else if((a3 == b2 && a3 == c1 && a3 !="" )){  
    vencedor = a3;
}else if((b2 == a2 && b2 == c2 && b2 !="")){
    vencedor == b2;
}else if (((c3 == c2 && c3 == c1) || (c3 == a3 && c3 == b3)) && c3 != "" ){
    vencedor = c3;
}else if ((b1 == b2 && b1 == b3 && b1 != "")){
    vencedor = b1;
}

if (vencedor != "") {
    gameOver = true;
    await sleep(50);
    alert("o ganhador foi o :'" + vencedor + "'");
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
}
function exibirJogo() {
    document.getElementById("jogo").style.display = "flex";
    document.getElementById("jogador").style.display = "flex";
    document.getElementById("Titulo").style.display = "none";
  }