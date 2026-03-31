// ============================================================
//   DESAFIOS (para quem já terminou a atividade 08) – Switch / Case
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================

let lerTeclado = require('readline-sync')

// ------------------------------------------------------------
// DESAFIO 1 – Simulador de caixa de restaurante
// ------------------------------------------------------------
// Crie uma lista de objetos para o Cardápio:
//   1 – Frango Grelhado  R$ 32,00
//   2 – Filé ao Molho    R$ 45,00
//   3 – Massa Italiana   R$ 28,00
//   4 – Salada Caesar    R$ 22,00
//   5 – Sopa do Dia      R$ 18,00
//
// Crie uma lista de objetos para as Bebidas:
//   1 – Suco Natural     R$ 9,00
//   2 – Refrigerante     R$ 7,00
//   3 – Água             R$ 4,00
//   4 – Sem bebida       R$ 0,00
//
// a) Pergunte ao usuário:
//    - Nome pessoal.
//    - Número do prato desejado.
//    - Número da bebida desejada.
// b) Com switch/case, determine o prato e o preço do prato,
//    e outro switch para a bebida e seu preço.
//    Para opções inválidas, exiba "Item inválido." e use preço 0.
// c) Armazene os dados em um objeto "pedido":
//    nomeCliente, nomePrato, precoPrato, nomeBebida, precoBebida, total.
// d) Pergunte se vai pagar no pix (keyInYN()).
//    Se sim, aplique 10% de desconto no total.
//    Atualize o total no objeto.
// e) Exiba o objeto com console.table().
// f) Exiba o recibo final com template literal.

// → Seu código aqui:

console.log('======================================')
console.log('         RESTAURANTE - CARDÁPIO       ')
console.log('======================================')
console.log('               PRATOS                 ')
console.log('--------------------------------------')
console.log('1 - Frango Grelhado ......... R$ 32,00')
console.log('2 - Filé ao Molho ........... R$ 45,00')
console.log('3 - Massa Italiana .......... R$ 28,00')
console.log('4 - Salada Caesar ........... R$ 22,00')
console.log('5 - Sopa do Dia ............. R$ 18,00')
console.log('--------------------------------------')
console.log('               BEBIDAS                ')
console.log('--------------------------------------')
console.log('6 - Suco Natural ............ R$ 9,00')
console.log('7 - Refrigerante ............ R$ 7,00')
console.log('8 - Água .................... R$ 4,00')
console.log('9 - Sem bebida .............. R$ 0,00')
console.log('======================================')


let cardapio = {
    prato: {
        frangoGrelhado: 32.00,
        fileAoMolho: 45.00,
        massaItaliana: 28.00,
        saladaCaesar: 22.00,
        sopaDoDia: 18.00,
    },
    bebida: {
        sucoNatural: 9.00,
        refrigerante: 7.00,
        agua: 4.00,
        semBebida: 0
    }

}

let nome = lerTeclado.question('Digite seu nome: ')
let prato = lerTeclado.questionInt('Digite o numero do prato: ')
let bebida = lerTeclado.questionInt('Digite o numero da bebida: ')
let precoPrato
let precoBebida

switch (prato) {
    case 1: 'frangoGrelhado'
    console.log('Frango Grelhado')
    console.log('R$32.00')
    precoBebida = 32.00
    break
    
    case 2: 'fileAoMolho'
    console.log('File ao molho')
    console.log('R$45.00')
    break

    case 3: 'massaItaliana'
    console.log('Massa italiana')
    console.log('R$28.00')
    break
    
    case 4: 'saladaCaesar'
    console.log('Salada Caesar')
    console.log('R$22.00')
    break

    case 5: 'sopaDoDia'
    console.log('Sopa do dia')
    console.log('R$18.00')
    break

    default:
        console.log('Esse prato não existe.')
    
}

switch(bebida) {
    case 6: 'sucoNatural'
    console.log('Suco natural')
    console.log('R$9.00')
    break

    case 7: 'refrigerante'
    console.log('Refrigerante')
    console.log('7.00')
    break
    
    case 8: 'agua'
    console.log('Agua')
    console.log('R$4.00')
    break

    case 9: 'semBebida'
    console.log('Sem bebida')

    default:
        console.log('Digite um numero valido!')
}

let pedido = {
    nomeCliente: nome,
    nomePrato: prato,
    nomeBebida: bebida
}

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - O valor a converter (questionFloat()).
//    - O tipo de conversão (questionInt()):
//      1 – Km para Milhas
//      2 – Milhas para Km
//      3 – Celsius para Fahrenheit
//      4 – Fahrenheit para Celsius
//      5 – Kg para Libras
//      6 – Libras para Kg
// b) Com switch/case, aplique a fórmula correta:
//    - Km → Milhas:         valor * 0.621371
//    - Milhas → Km:         valor * 1.60934
//    - Celsius → Fahrenheit: (valor * 9/5) + 32
//    - Fahrenheit → Celsius: (valor - 32) * 5/9
//    - Kg → Libras:         valor * 2.20462
//    - Libras → Kg:         valor / 2.20462
//    - default: "Tipo de conversão inválido."
// c) Armazene a conversão em um objeto:
//    tipo, valorOriginal, unidadeOriginal, resultado, unidadeResultado.
// d) Exiba o objeto com console.table().
// e) Exiba: "<valorOriginal> <unidadeOriginal> = <resultado> <unidadeResultado>"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Jogo de pedra, papel e tesoura
// ------------------------------------------------------------
// a) Gere a jogada do computador aleatoriamente:
//    const jogada = ["pedra", "papel", "tesoura"];
//    const computador = jogada[Math.floor(Math.random() * 3)];
// b) Pergunte ao usuário sua jogada - questionInt():
//    1 – Pedra | 2 – Papel | 3 – Tesoura
//    Para opções inválidas, exiba "Jogada inválida." e encerre.
// c) Exiba as jogadas: "Você: <jogada> | Computador: <computador>"
// d) Determine o vencedor ou empate com switch/case aninhado ou combinando
//    switch com if/else
// e) Exiba o resultado final.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Sistema de suporte técnico
// ------------------------------------------------------------
// Um sistema de atendimento automatizado funciona por menus.
//
// Menu principal (questionInt()):
//   1 – Internet | 2 – TV | 3 – Telefone | 4 – Falar com atendente | 0 – Encerrar
//
// Se o usuário escolher 1 (Internet), exiba um sub-menu (questionInt()):
//   1 – Sem conexão
//   2 – Conexão lenta
//   3 – Wi-Fi não aparece
//
// Se o usuário escolher 2 (TV), exiba um sub-menu (questionInt()):
//   1 – Sem sinal
//   2 – Imagem ruim
//   3 – Canais sumidos
//
// Para cada sub-opção, exiba uma mensagem de orientação específica.
// Para as opções 3 (Telefone) e 4 (Falar com atendente), exiba "Por favor, aguarde na linha.".
// Para a opção 0, exiba "Atendimento encerrado."
// No default, exiba "Opção inválida."
//
// a) Implemente o fluxo acima usando switch/case no menu principal
//    e switch/case nos sub-menus, com if/else se necessário.
// b) Exiba todas as mensagens com template literal.

// → Seu código aqui:


console.log("_______________________________");