const rl = require('readline-sync') // Importa o pacote para ler dados do teclado

let tabuleiro = [ // Cria a matriz do tabuleiro
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
]

let jogador = 'X' // Define o jogador inicial
let jogadas = 0 // Conta quantas jogadas já aconteceram
let jogoAcabou = false // Controla quando o jogo termina

console.log('Jogo da Velha - Jogador vs Jogador') // Título do jogo

while (!jogoAcabou && jogadas < 9) { // Repete enquanto ninguém vencer e houver jogadas disponíveis

    console.table(tabuleiro) // Mostra o tabuleiro em formato de tabela

    let posicaoValida = false // Variável para validar jogada

    while (!posicaoValida) { // Repete até o jogador escolher uma posição válida

        let linha = rl.questionInt(`Jogador ${jogador}, digite a linha (0-2): `) // Lê a linha
        let coluna = rl.questionInt(`Jogador ${jogador}, digite a coluna (0-2): `) // Lê a coluna

        if (linha < 0 || linha > 2 || coluna < 0 || coluna > 2) { // Verifica se a posição existe

            console.log('Posicao invalida! Digite numeros entre 0 e 2.')
            continue // Volta para o início do while
        }

        if (tabuleiro[linha][coluna] !== '-') { // Verifica se a posição já está ocupada

            console.log('Posicao ja ocupada! Tente novamente.')
            continue // Volta para o início do while
        }

        tabuleiro[linha][coluna] = jogador // Marca a jogada no tabuleiro
        posicaoValida = true // Define a jogada como válida
        jogadas++ // Soma mais uma jogada
    }

    for (let i = 0; i < 3; i++) { // Percorre cada linha

        let iguaisLinha = 0 // Conta quantos símbolos iguais existem na linha

        for (let j = 0; j < 3; j++) { // Percorre cada coluna da linha

            if (tabuleiro[i][j] === jogador) { // Verifica se o símbolo é igual ao jogador atual

                iguaisLinha++ // Soma 1 se for igual
            }
        }

        if (iguaisLinha === 3) { // Se tiver 3 símbolos iguais na linha

            jogoAcabou = true // O jogador venceu
        }
    }

    for (let j = 0; j < 3; j++) { // Percorre cada coluna

        let iguaisColuna = 0 // Conta quantos símbolos iguais existem na coluna

        for (let i = 0; i < 3; i++) { // Percorre cada linha da coluna

            if (tabuleiro[i][j] === jogador) { // Verifica se o símbolo pertence ao jogador

                iguaisColuna++ // Soma 1 se for igual
            }
        }

        if (iguaisColuna === 3) { // Se tiver 3 símbolos iguais na coluna

            jogoAcabou = true // O jogador venceu
        }
    }

    let diagonalPrincipal = 0 // Conta símbolos na diagonal principal

    for (let i = 0; i < 3; i++) { // Percorre a diagonal principal

        if (tabuleiro[i][i] === jogador) { // Verifica posições iguais da diagonal

            diagonalPrincipal++ // Soma 1 se for igual
        }
    }

    if (diagonalPrincipal === 3) { // Se tiver 3 símbolos iguais

        jogoAcabou = true // O jogador venceu
    }

    let diagonalSecundaria = 0 // Conta símbolos da diagonal secundária

    for (let i = 0; i < 3; i++) { // Percorre a diagonal secundária

        if (tabuleiro[i][2 - i] === jogador) { // Verifica posições da diagonal inversa

            diagonalSecundaria++ // Soma 1 se for igual
        }
    }

    if (diagonalSecundaria === 3) { // Se tiver 3 símbolos iguais

        jogoAcabou = true // O jogador venceu
    }

    if (jogoAcabou) { // Verifica se alguém venceu

        console.table(tabuleiro) // Mostra o tabuleiro final
        console.log(`Jogador ${jogador} venceu!`) // Mostra vencedor

    } else if (jogadas === 9) { // Verifica empate

        console.table(tabuleiro)
        console.log('Empate!')
        jogoAcabou = true // Finaliza o jogo

    } else {

        jogador = jogador === 'X' ? 'O' : 'X' // Troca o jogador
    }
}

console.log('Fim do jogo!')