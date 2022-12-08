var jogador1Escolha = 0;
var jogador1Pontuacao = 0;
var jogador2Escolha = 0;
var jogador2Pontuacao = 0;
var ganhador = -1;

function jogar(escolha) {
    jogador1Escolha = escolha;

    jogador2Escolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;

    if ((jogador1Escolha) == 1 && (jogador2Escolha == 1)) {
        ganhador = 0;
    }

    else if((jogador1Escolha) == 1 && (jogador2Escolha == 2)) {
        ganhador = 2;
    }

    else if((jogador1Escolha) == 1 && (jogador2Escolha == 3)) {
        ganhador = 1;
    }

    else if((jogador1Escolha) == 2 && (jogador2Escolha == 1)) {
        ganhador = 1;
    }

    else if((jogador1Escolha) == 2 && (jogador2Escolha == 2)) {
        ganhador = 0;
    }

    else if((jogador1Escolha) == 2 && (jogador2Escolha == 3)) {
        ganhador = 2;
    }

    else if((jogador1Escolha) == 3 && (jogador2Escolha == 1)) {
        ganhador = 2;
    }

    else if((jogador1Escolha) == 3 && (jogador2Escolha == 2)) {
        ganhador = 1;
    }

    else if((jogador1Escolha) == 3 && (jogador2Escolha == 3)) {
        ganhador = 0;
    }

    document.getElementById("jogador1-escolha-1").classList.remove('selecionado');

    document.getElementById("jogador1-escolha-2").classList.remove('selecionado');

    document.getElementById("jogador1-escolha-3").classList.remove('selecionado');

    document.getElementById("jogador2-escolha-1").classList.remove('selecionado');

    document.getElementById("jogador2-escolha-2").classList.remove('selecionado');

    document.getElementById("jogador2-escolha-3").classList.remove('selecionado');

    document.getElementById("jogador1-escolha-" + jogador1Escolha).classList.add('selecionado');
    document.getElementById("jogador2-escolha-" + jogador2Escolha).classList.add('selecionado');

    if(ganhador == 0) {
        document.getElementById('mensagens').innerHTML = 'Empate';
    }

    else if(ganhador == 1) {
        document.getElementById('mensagens').innerHTML = 'jogador1 ganhou';
        jogador1Pontuacao++;
    }

    else if(ganhador == 2) {
        document.getElementById('mensagens').innerHTML = 'jogador2 ganhou';
        jogador2Pontuacao++;
    }

    document.getElementById('jogador1-pontos').innerHTML = jogador1Pontuacao
    document.getElementById('jogador2-pontos').innerHTML = jogador2Pontuacao

}