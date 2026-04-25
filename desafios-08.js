// ============================================================
//   DESAFIOS (para quem já terminou a atividade 08) – Switch / Case
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================

let rl = require('readline-sync')

// ------------------------------------------------------------
// DESAFIO 1 – Simulador de caixa de restaurante
// ------------------------------------------------------------
// Crie uma lista de objetos para o Cardápio:
//   1 – Frango Grelhado  R$ 32,00
//   2 – Filé ao Molho    R$ 45,00
//   3 – Massa Italiana   R$ 28,00
//   4 – Salada Caesar    R$ 22,00
//   5 – Sopa do Dia      R$ 18,00

// Crie uma lista de objetos para as Bebidas:
//   1 – Suco Natural     R$ 9,00
//   2 – Refrigerante     R$ 7,00
//   3 – Água             R$ 4,00
//   4 – Sem bebida       R$ 0,00

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

// console.log('======================================')
// console.log('         RESTAURANTE - CARDÁPIO       ')
// console.log('======================================')
// console.log('               PRATOS                 ')
// console.log('--------------------------------------')
// console.log('1 - Frango Grelhado ......... R$ 32,00')
// console.log('2 - Filé ao Molho ........... R$ 45,00')
// console.log('3 - Massa Italiana .......... R$ 28,00')
// console.log('4 - Salada Caesar ........... R$ 22,00')
// console.log('5 - Sopa do Dia ............. R$ 18,00')
// console.log('--------------------------------------')
// console.log('               BEBIDAS                ')
// console.log('--------------------------------------')
// console.log('6 - Suco Natural ............ R$ 9,00')
// console.log('7 - Refrigerante ............ R$ 7,00')
// console.log('8 - Água .................... R$ 4,00')
// console.log('9 - Sem bebida .............. R$ 0,00')
// console.log('======================================')


// let cardapio = {
//     prato: {
//         frangoGrelhado: 32.00,
//         fileAoMolho: 45.00,
//         massaItaliana: 28.00,
//         saladaCaesar: 22.00,
//         sopaDoDia: 18.00,
//     },
//     bebida: {
//         sucoNatural: 9.00,
//         refrigerante: 7.00,
//         agua: 4.00,
//         semBebida: 0
//     }

// }

// let nome = rl.question('Digite seu nome: ')
// let prato = rl.questionInt('Digite o numero do prato: ')
// let bebida = rl.questionInt('Digite o numero da bebida: ')

// let nomePrato = ''
// let precoPrato = 0

// let nomeBebida = ''
// let precoBebida = 0


// switch (prato) {
//     case 1:
//     console.log('Frango Grelhado')
//     console.log('R$32.00')
//     nomePrato = 'Frango Grelhado'
//     precoPrato = 32.00
//     break
    
//     case 2:
//     console.log('File ao molho')
//     console.log('R$45.00')
//     nomePrato = 'File ao molho'
//     precoPrato = 45.00
//     break

//     case 3:
//     console.log('Massa italiana')
//     console.log('R$28.00')
//     nomePrato = 'Massa italiana'
//     precoPrato = 28.00
//     break
    
//     case 4:
//     console.log('Salada Caesar')
//     console.log('R$22.00')
//     nomePrato = 'Salada Caesar'
//     precoPrato = 22.00
//     break

//     case 5:
//     console.log('Sopa do dia')
//     console.log('R$18.00')
//     nomePrato = 'Sopa do dia'
//     precoPrato = 18.00
//     break

//     default:
//         console.log('Prato selecionado não existe.')
//     break
// }

// switch(bebida) {
//     case 6:
//     console.log('Suco natural')
//     console.log('R$9.00')
//     nomeBebida = 'Suco natural'
//     precoBebida = 9.00
//     break

//     case 7:
//     console.log('Refrigerante')
//     console.log('R$7.00')
//     nomeBebida = 'Refrigerante'
//     precoBebida = 7.00
//     break
    
//     case 8:
//     console.log('Agua')
//     console.log('R$4.00')
//     nomeBebida = 'Agua'
//     precoBebida = 4.00
//     break

//     case 9:
//     console.log('Sem bebida')
//     nomeBebida = 'Sem bebida'
//     precoBebida = 0
//     break

//     default:
//         console.log('Bebida selcionada naõ existe')
//         break
// }

// let total = (precoPrato + precoBebida)

// let pedido = {
//     nomeCliente: nome,
//     nomePrato: nomePrato,
//     precoPrato: precoPrato, 
//     nomeBebida: nomeBebida,
//     precoBebida: precoBebida,
//     total: total
// }
// console.table(pedido)

// let pix = rl.keyInYN('Vai pagar no Pix?  ')
// let desconto = 0
// let precoFinal = 0

// if (nome === ''){
//     console.log('Nome não informado, tente novamente!')
// } else if (prato < 1 || prato > 5)
//      {
//     console.log('Prato não existente, tente novamente')

// } else if (bebida < 6 || bebida > 9) {
//     console.log('Bebida não existente, tente novamente!')
 
// } else if (pix) {
//     desconto = total * (10 / 100)
//     precoFinal = total - desconto
//     console.log(`Desconto de 10% aplicado, total ficou: R$${precoFinal.toFixed(2)}`)
//     console.log(`Olá ${nome}, foram consumidos ${nomePrato} e bebida ${nomeBebida} e total gasto foi de R$${precoFinal.toFixed(2)}`)
// }
//     else {
//     precoTotal = total
//     console.log(`Sem desconto, total ficou: R$${total}`)
//     console.log(`Olá ${nome}, foram consumidos ${nomePrato} e de bebida ${nomeBebida} e seu total gasto foi de R$${precoFinal.toFixed(2)}`)
// }

// pedido.total = precoFinal
// console.log(pedido.total)


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




// console.log('========')
// console.log('1 - Km para Milhas')
// console.log('2 - Milhas para Km')
// console.log('3 - Celsius para Fahrenheit')
// console.log('4 - Fahrenheit para Celsius')
// console.log('5 - Kg para Libras')
// console.log('6 - Libras para Kg')
// console.log('========')

// const valor = rl.questionFloat('Digite o valor para a ser convertido: ')

// const tipo = rl.questionInt('Digite o tipo de conversao: ')
// let convertido = {
//     tipo: '',
//     valorOriginal: '',
//     unidadeOriginal: '',
//     resultado: '',
//     unidadeResultado: ''
// }

// switch(tipo) {
//     case 1:
//         convertido.tipo = 'Km para Milhas'
//         convertido.valorOriginal = valor
//         convertido.unidadeOriginal = 'Km'
//         convertido.resultado = (valor * 0.621371).toFixed(2)
//         convertido.unidadeResultado = 'Milhas'
//         break
//     case 2:
//         convertido.tipo = 'Milhas para Km'
//         convertido.valorOriginal = valor
//         convertido.unidadeOriginal = 'Milhas'
//         convertido.resultado = (valor * 1.60934).toFixed(2)
//         convertido.unidadeResultado = 'Km'
//         break
//     case 3:
//         convertido.tipo = 'Celsius para Fahrenheit'
//         convertido.valorOriginal = valor
//         convertido.unidadeOriginal = '°C'
//         convertido.resultado = ((valor * 9/5) + 32).toFixed(2)
//         convertido.unidadeResultado = '°F'
//         break
//     case 4:
//         convertido.tipo = 'Fahrenheit para Celsius'
//         convertido.valorOriginal = valor
//         convertido.unidadeOriginal = '°F'
//         convertido.resultado = ((valor - 32) * 5/9).toFixed(2)
//         convertido.unidadeResultado = '°C'
//         break
//     case 5:
//         convertido.tipo = 'Kg para Libras'
//         convertido.valorOriginal = valor
//         convertido.unidadeOriginal = 'Kg'
//         convertido.resultado = (valor * 2.20462).toFixed(2)
//         convertido.unidadeResultado = 'Libras'
//         break
//     case 6:
//         convertido.tipo = 'Libras para Kg'
//         convertido.valorOriginal = valor
//         convertido.unidadeOriginal = 'Libras'
//         convertido.resultado = (valor / 2.20462).toFixed(2)
//         convertido.unidadeResultado = 'Kg'
//         break
//     default:
//         console.log('Tipo de conversão inválido.')
// }

// console.table(convertido)
// console.log(`${convertido.valorOriginal} ${convertido.unidadeOriginal} = ${convertido.resultado} ${convertido.unidadeResultado}`)

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

// const jogadas = ["pedra", "papel", "tesoura"]
// const computador = jogadas[Math.floor(Math.random() * 3)]

// console.log('========')
// console.log('1 - Pedra')
// console.log('2 - Papel')
// console.log('3 - Tesoura')
// console.log('========')

// const jogadaUsuario = rl.questionInt('Digite sua jogada: ')

// let usuario = ''

// switch(jogadaUsuario) {
//     case 1:
//         usuario = 'pedra'
//         break
//     case 2:
//         usuario = 'papel'
//         break
//     case 3:
//         usuario = 'tesoura'
//         break
//     default:
//         console.log('Jogada inválida.')
//         process.exit(1)
// }

// console.log(`Você: ${usuario} | Computador: ${computador}`)

// let resultado = ''

// if (usuario === computador) {
//     resultado = 'Empate!'
// } else {
//     switch(usuario) {
//         case 'pedra':
//             resultado = computador === 'tesoura' ? 'Você venceu!' : 'Computador venceu!'
//             break
//         case 'papel':
//             resultado = computador === 'pedra' ? 'Você venceu!' : 'Computador venceu!'
//             break
//         case 'tesoura':
//             resultado = computador === 'papel' ? 'Você venceu!' : 'Computador venceu!'
//             break
//     }
// }

// console.log(resultado)

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

// console.log('========')
// console.log('1 - Internet')
// console.log('2 - TV')
// console.log('3 - Telefone')
// console.log('4 - Falar com atendente')
// console.log('0 - Encerrar')
// console.log('========')

// const opcaoMenu = rl.questionInt('Escolha uma opcao: ')

// switch(opcaoMenu) {
//     case 1:
//         console.log('========')
//         console.log('1 - Sem conexão')
//         console.log('2 - Conexão lenta')
//         console.log('3 - Wi-Fi não aparece')
//         console.log('========')
        
//         const opcaoInternet = rl.questionInt('Escolha uma opcao: ')
        
//         switch(opcaoInternet) {
//             case 1:
//                 console.log(`Problema identificado: Sem conexão. Solução: Verifique se o modem está ligado e se todos os cabos estão conectados corretamente.`)
//                 break
//             case 2:
//                 console.log(`Problema identificado: Conexão lenta. Solução: Tente reiniciar o modem e o roteador ou aproxime-se do roteador.`)
//                 break
//             case 3:
//                 console.log(`Problema identificado: Wi-Fi não aparece. Solução: Verifique se o roteador está ligado e tente resetar a rede Wi-Fi.`)
//                 break
//             default:
//                 console.log('Opção inválida.')
//         }
//         break
        
//     case 2:
//         console.log('========')
//         console.log('1 - Sem sinal')
//         console.log('2 - Imagem ruim')
//         console.log('3 - Canais sumidos')
//         console.log('========')
        
//         const opcaoTV = rl.questionInt('Escolha uma opcao: ')
        
//         switch(opcaoTV) {
//             case 1:
//                 console.log(`Problema identificado: Sem sinal. Solução: Verifique a conexão do cabo coaxial na TV e na parede.`)
//                 break
//             case 2:
//                 console.log(`Problema identificado: Imagem ruim. Solução: Tente ajustar a antena, limpar as conexões ou trocar o cabo HDMI.`)
//                 break
//             case 3:
//                 console.log(`Problema identificado: Canais sumidos. Solução: Acesse o menu de configuração da TV e faça uma nova sintonia de canais.`)
//                 break
//             default:
//                 console.log('Opção inválida.')
//         }
//         break
        
//     case 3:
//         console.log('Por favor, aguarde na linha.')
//         break
        
//     case 4:
//         console.log('Por favor, aguarde na linha.')
//         break
        
//     case 0:
//         console.log('Atendimento encerrado.')
//         break
        
//     default:
//         console.log('Opção inválida.')
// }

console.log("_______________________________");