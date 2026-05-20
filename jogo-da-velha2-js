const rl = require('readline-sync');

let tabuleiro = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
];

let jogoEmAndamento = true;
let jogadorAtual = 'X';
let numJogadas = 0;

console.log('================================');
console.log('      JOGO DA VELHA');
console.log('   Jogador X vs Jogador O');
console.log('================================');

console.log('  0   1   2');

for (let i = 0; i < 3; i++) {
    console.log(`${i} ${tabuleiro[i][0]} | ${tabuleiro[i][1]} | ${tabuleiro[i][2]}`);
}

while (jogoEmAndamento) {

    let jogadaValida = false;

    while (!jogadaValida) {

        console.log(`Jogador ${jogadorAtual}, sua vez!`);

        let linha = rl.questionInt('Digite a linha (0, 1 ou 2): ');
        let coluna = rl.questionInt('Digite a coluna (0, 1 ou 2): ');

        // Verifica se está dentro do limite
        if (linha < 0 || linha > 2 || coluna < 0 || coluna > 2) {
            console.log('Posicao invalida! Use numeros de 0 a 2.');
        }

        // Verifica se a posição já está ocupada
        else if (tabuleiro[linha][coluna] !== '-') {
            console.log('Posicao ja ocupada!');
        }

        else {
            tabuleiro[linha][coluna] = jogadorAtual;
            numJogadas++;
            jogadaValida = true;
        }
    }

    // Exibir tabuleiro atualizado
    console.log('  0   1   2');

    for (let i = 0; i < 3; i++) {
        console.log(`${i} ${tabuleiro[i][0]} | ${tabuleiro[i][1]} | ${tabuleiro[i][2]}`);
    }

    let vencedor = null;

    // Verificar linhas
    for (let i = 0; i < 3; i++) {
        if (
            tabuleiro[i][0] === tabuleiro[i][1] &&
            tabuleiro[i][1] === tabuleiro[i][2] &&
            tabuleiro[i][0] !== '-'
        ) {
            vencedor = tabuleiro[i][0];
        }
    }

    // Verificar colunas
    for (let j = 0; j < 3; j++) {
        if (
            tabuleiro[0][j] === tabuleiro[1][j] &&
            tabuleiro[1][j] === tabuleiro[2][j] &&
            tabuleiro[0][j] !== '-'
        ) {
            vencedor = tabuleiro[0][j];
        }
    }

    // Verificar diagonal principal
    if (
        tabuleiro[0][0] === tabuleiro[1][1] &&
        tabuleiro[1][1] === tabuleiro[2][2] &&
        tabuleiro[0][0] !== '-'
    ) {
        vencedor = tabuleiro[0][0];
    }

    // Verificar diagonal secundária
    if (
        tabuleiro[0][2] === tabuleiro[1][1] &&
        tabuleiro[1][1] === tabuleiro[2][0] &&
        tabuleiro[0][2] !== '-'
    ) {
        vencedor = tabuleiro[0][2];
    }

    // Verifica vencedor
    if (vencedor) {
        console.log(`Jogador ${vencedor} venceu!`);
        jogoEmAndamento = false;
    }

    // Verifica empate
    else if (numJogadas === 9) {
        console.log('Empate! O tabuleiro ficou cheio.');
        jogoEmAndamento = false;
    }

    // Troca jogador
    else {
        if (jogadorAtual === 'X') {
            jogadorAtual = 'O';
        } else {
            jogadorAtual = 'X';
        }
    }
}

console.log('Jogo finalizado!');