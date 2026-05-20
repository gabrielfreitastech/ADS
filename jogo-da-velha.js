const rl = require('readline-sync')

let tabuleiro = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
]
console.table(tabuleiro)
let jogador = 'X'
let vencedor = null

for (let i = 0; i < 5; i++) {
    let linha, coluna
    while (true) {

        linha = rl.question(`Jogador ${jogador}, digite a linha (0-2): `)
        coluna = rl.question(`Jogador ${jogador}, digite a coluna (0-2): `)

        if (tabuleiro[linha][coluna] === '-') {
            tabuleiro[linha][coluna] = jogador
            break

        } else {
            console.log('Posição já ocupada. Tente novamente.')
        }
    }
    console.table(tabuleiro)
    jogador = jogador === 'X' ? 'O' : 'X'
    jogador === 'X' ? vencedor = 'O' : vencedor = 'X'
}
if (vencedor) {
    console.log(`Parabéns, jogador ${vencedor}! Você venceu!`)
}
console.log('Fim do jogo!')



