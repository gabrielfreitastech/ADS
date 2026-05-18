const rl = require("readline-sync")

console.log(`
    ===CALCULADORA SIMPLES===`)

let continuar = true // Enquanto for true, a calculadora continuará funcionando
let numero1 = rl.questionFloat('Digite um numero: ')
let numero2 = rl.questionFloat('Digite outro numero: ')
let simbolo = '' // Variável que irá guardar o símbolo da operação
let resultado // Resultado

while (continuar) { // Enquanto 'Continuar for true, a calculadora continua funcionando
    console.log('===MENU DE OPERAÇÕES===')
    console.log('1  -   SOMA')
    console.log('2  -   SUBTRAÇÃO')
    console.log('3  -   MULTIPLICAÇÃO')
    console.log('4  -   DIVISÃO')
    console.log('5  -   RESTO')
    console.log('6  - DESCONTO')

    let operacao // Variável para guardar a operação

    do {
        operacao = rl.questionInt('Escolha uma operacao de 1 a 5: ') //Entradas de valores
        if (operacao < 1 || operacao > 5) {
            console.log('Operação inválida! Digite um número entre 1 e 5.')
        }
    } while (operacao < 1 || operacao > 5) // Enquanto não for a operação certa, roda o loop

    switch (operacao) {
        case 1:
            simbolo = '+'
            resultado = numero1 + numero2
            console.log(`${numero1} ${simbolo} ${numero2} = ${resultado}`)
            break

        case 2:
            simbolo = '-'
            resultado = numero1 - numero2
            console.log(`${numero1} ${simbolo} ${numero2} = ${resultado}`)
            break

        case 3:
            simbolo = '*'
            resultado = numero1 * numero2
            console.log(`${numero1} ${simbolo} ${numero2} = ${resultado}`)
            break

        case 4: // Verificação se algum número é zero
            if (numero2 === 0) {
                console.log('Erro: divisão por zero não é permitida')
                resultado = undefined
                break
            } else {
            simbolo = '/'
            resultado = numero1 / numero2
            console.log(`${numero1} ${simbolo} ${numero2} = ${resultado.toFixed(2)}`)
            break
            }
        case 5:
            simbolo = '%' // Verificação  de resto, quanto sobra ou não 
            resultado = numero1 % numero2
            console.log(`${numero1} ${simbolo} ${numero2} = ${resultado}`)
            break
    }

    console.log('===CONTINUAR CALCULANDO?===')
    console.log('1 - Continuar com o resultado')
    console.log('2 - Novos números')
    console.log('3 - Sair')

    let opcao

    do { // Laço para continuar a calculadora
        opcao = rl.questionInt('Escolha uma opcao: ')
        if (opcao < 1 || opcao > 3) {
            console.log('Opção inválida! Digite um número entre 1 e 3.')
        }
    } while (opcao < 1 || opcao > 3)

    switch (opcao) {
        case 1:
            if (resultado !== undefined) { // Se tiver não for 'undefined', continua
                numero1 = resultado
                numero2 = rl.questionFloat('Digite outro numero: ')

            } else {
                console.log('Não há resultado anterior. Digite dois números.')
                numero1 = rl.questionFloat('Digite um numero: ')
                numero2 = rl.questionFloat('Digite outro numero: ')
            }
            break

        case 2:
            numero1 = rl.questionFloat('Digite um numero: ')
            numero2 = rl.questionFloat('Digite outro numero: ')
            break

        case 3:
            continuar = false // Aqui 'true' do ínicio turn 'false' e encerra o loop
            console.log('Obrigado por usar a calculadora!')
            break
    }
}
