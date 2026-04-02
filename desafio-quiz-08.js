// ============================================================
//   DESAFIO QUIZ – Estruturas de Controle (Switch / Case)
// ============================================================
// Regras: sem loops e sem funções.
// Use apenas switch/case e/ou if/else e operadores.
// ============================================================
//
let lerTeclado = require('readline-sync')
//
// Crie um quiz de 5 perguntas sobre alguma tema de sua escolha (tecnologia, filmes, curiosidades, jogos, etc).
// Cada pergunta deve possuir 4 alternativas (1 a 4); apenas uma deve ser considerada correta.
//
// Fluxo geral:
//   a) Pergunte o nome do jogador e armazene em um objeto "jogador".
//   b) Exiba uma mensagem de boas-vindas com o nome, explicando sobre o que se trata o quiz.
//   c) Adicione "pontos" ao objeto, iniciando em 0.
//
// Para cada uma das 5 perguntas, repita este padrão:
//   1. Exiba o enunciado e as 4 alternativas com console.log().
//   2. Leia a resposta do jogador (questionInt()).
//   3. Use switch/case para avaliar a resposta:
//      - No case correto: exiba "Correto!" e some 1 ponto a "pontos".
//      - Nos demais cases: exiba "Errado! A resposta certa era a opção X."
//      - No default: exiba "Opção inválida, nenhum ponto atribuído."
//
// Ao final:
//   d) Exiba o total: "Você fez X de 5 pontos."
//   e) Use switch/case (ou if/else) para exibir um resultado final com frases como as abaixo
//      Dica: você pode modificar o retorno para se adequar ao tema escolhido
//      - 5 pontos        → "Perfeito! Você é um expert!"
//      - 4 pontos        → "Muito bem! Quase lá!"
//      - 3 pontos        → "Bom trabalho, mas pode melhorar."
//      - 1 ou 2 pontos   → "Nheee!"
//      - 0 pontos        → "VIX, tente novamente!"
//   f) Exiba o objeto "resultado" com console.table():
//      { jogador, pontos, total: 5, aprovado: pontos >= 3 }
//
// Desafio extra:
//  Ao final, exiba para cada pergunta do quiz:
//    Pergunta: Qx.
//    Resposta do jogador para pergunta X: <respostaJogadorQx>
//    Resposta correta da pergunta X: <respostaCorretaQx>
//
// ============================================================

// → Seu código aqui:

console.log('===DESAFIO QUIZ JOGOS ===')

let resultado = {
    nome: lerTeclado.question('Digite seu nome jogador: '),
    pontos: 0,
    situacao: ''
}

console.log(`Olá jogador ${resultado.nome}! Seja bem vindo ao quiz sobre jogos!`)
console.log('======================================')
console.log('Vamos começar!')
console.log('PERGUNTA NUMERO 1:')
console.log('1  -   EM QUE ANO FOI LANÇADO GTA 5 ?')
console.log('1) 2000')
console.log('2) 2008')
console.log('3) 2010')
console.log('4) 2012')
console.log('======================================')

let resposta1 = lerTeclado.questionInt('Digite o numero da alternativa correta: ')

console.log('======================================')

switch (resposta1) {
    case 1:
        console.log(`Errado! A resposta certa era a opção 4) 2012.`)
        break

    case 2:
        console.log(`Errado! A resposta certa era a opção 4) 2012.`)
        break

    case 3:
        console.log(`Errado! A resposta certa era a opção 4) 2012.`)
        break

    case 4:
        resultado.pontos++
        console.log('Correto + 1!')
        break

    default:
        console.log('Opcao invalida, nenhum ponto atribuido!')
}


console.log('Proxima pergunta')
console.log('======================================')
console.log('PERGUNTA NUMERO 2:')
console.log('Qual o nome do encanador de suspensorio vermelho ?')
console.log('1) Mario')
console.log('2) Luigi')
console.log('3) Yoshi')
console.log('4) Maria')
console.log('======================================')

let resposta2 = lerTeclado.questionInt('Digite o numero da alternativa correta: ')

switch (resposta2) {
    case 1:
        resultado.pontos++
        console.log('Correto + 1 ponto!')
        break

    case 2:
        console.log('Errado! A resposta certa era a opcao 1) Mario')
        break

    case 3:
        console.log('Errado! A resposta certa era a opcao 1) Mario')
        break

    case 4:
        console.log('Errado! A resposta certa era a opcao 1) Mario')
        break

    default:
        console.log('Opcao invalida, nenhum ponto atribuido!')

}

console.log('Proxima pergunta')
console.log('======================================')
console.log('PERGUNTA NUMERO 3:')
console.log('Em qual FIFA o Mbappe foi introduzido no PSG ?')
console.log('1) FIFA 17')
console.log('2) FIFA 18')
console.log('3) FIFA 19')
console.log('4) FIFA 20')
console.log('======================================')

let resposta3 = lerTeclado.questionInt('Digite o numero da alternativa correta: ')

switch (resposta3) {
    case 1:
        console.log('Errado! A resposta certa era a opcao 2) FIFA 18')
        break

    case 2:
        resultado.pontos++
        console.log('Correto + 1 ponto!')
        break

    case 3:
        console.log('Errado! A resposta certa era a opcao 2) FIFA 18')
        break

    case 4:
        console.log('Errado! A resposta certa era a opcao 2) FIFA 18')
        break

    default:
        console.log('Opcao invalida, nenhum ponto atribuido!')
}

console.log('Proxima pergunta')
console.log('======================================')
console.log('PERGUNTA NUMERO 4:')
console.log('O personagem Crash Bandicoot é um(a)...')
console.log('1) Raposa')
console.log('2) Cachorro')
console.log('3) Marsupial')
console.log('4) Dinossauro')
console.log('======================================')

let resposta4 = lerTeclado.questionInt('Digite o numero da alternativa correta: ')

switch (resposta4) {
    case 1:
        console.log('Errado! A resposta certa era a opcao 3) Marsupial')
        break

    case 2:
        console.log('Errado! A resposta certa era a opcao 3) Marsupial')
        break

    case 3:
        resultado.pontos++
        console.log('Correto + 1 ponto!')
        break

    case 4:
        console.log('Errado! A resposta certa era a opcao 3) Marsupial')
        break

    default:
        console.log('Opcao invalida, nenhum ponto atribuido!')
}

console.log('Proxima pergunta')
console.log('======================================')
console.log('PERGUNTA NUMERO 5:')
console.log('Qual o melhor jogo mobile existente?')
console.log('1) Free Fire')
console.log('2) Call Of Duty Mobile')
console.log('3) Dragon City')
console.log('4) Pou')
console.log('======================================')

let resposta5 = lerTeclado.questionInt('Digite o numero da alternativa correta: ')

switch (resposta5) {
    case 1:
        resultado.pontos++
        console.log('Correto + 1 ponto!')
        break

    case 2:
        console.log('Errado! A resposta certa era a opcao 1) Free Fire')
        break

    case 3:
        console.log('Errado! A resposta certa era a opcao 1) Free Fire')
        break

    case 4:
        console.log('Errado! A resposta certa era a opcao 1) Free Fire')
        break

    default:
        console.log('Opcao invalida, nenhum ponto atribuido!')
}

let total = resultado.pontos

console.log('======================================')

if (resultado.nome === ''){
    console.log('Jogador não encontrado')

} else {
console.log(`Beleza jogador ${resultado.nome} voce terminou o quiz e seu total de pontos foi ${resultado.pontos}!`)

}

console.log('======================================')

switch (total) {
    case 5:
        console.log('5 pontos     → Perfeito! Você é um expert!')
        break

    case 4:
        console.log('4 pontos     → Muito bem! Quase lá!')
        break

    case 3:
        console.log('3 pontos     → Bom trabalho, mas pode melhorar.')
        break

    case 2:
    case 1:
        console.log("Nheee!")
        break
    
    case 0:
        console.log('VIX, tente novamente!')
}

console.log('======================================')

if (resultado.nome === ''){
    console.log('Jogador não encontrado')

} else if (resultado.pontos >= 3) {
    resultado.situacao = 'Aprovado'
    console.table(resultado)

} else if (resultado.pontos <= 2) {
    resultado.situacao = 'Reprovado'
    console.log(resultado)
}

// Desafio extra:
//  Ao final, exiba para cada pergunta do quiz:
//    Pergunta: Qx.
//    Resposta do jogador para pergunta X: <respostaJogadorQx>
//    Resposta correta da pergunta X: <respostaCorretaQx>