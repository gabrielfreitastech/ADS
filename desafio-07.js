let rl = require('readline-sync')

// ============================================================
//   DESAFIOS (para quem já terminou a atividade 07) – If / Else
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Classificador de IMC
// ------------------------------------------------------------
// Já realizamos um exercício similar, mas agora vamos aprimorar e exibir somente o resultado final.
// a) Pergunte ao usuário seu nome, peso (kg) e altura (m).
// b) Armazene os dados em um objeto "pessoa".
// c) Calcule o IMC: peso / (altura ** 2). Adicione ao objeto.
// d) Classifique o IMC usando if/else if/else e adicione a classificação ao objeto:
//    - IMC < 18.5          → "Abaixo do peso"
//    - IMC >= 18.5 e < 25  → "Peso normal"
//    - IMC >= 25 e < 30    → "Sobrepeso"
//    - IMC >= 30 e < 35    → "Obesidade grau I"
//    - IMC >= 35 e < 40    → "Obesidade grau II"
//    - IMC >= 40           → "Obesidade grau III"
// e) Exiba o objeto com console.table().
// f) Exiba uma mensagem final:
//    "<nome>, seu IMC é <imc> – <classificação>."

// → Seu código aqui:
// let pessoa = {
//     nome: pegarInfo.question('Qual o seu nome? '),
//     peso: pegarInfo.questionFloat('Qual o seu peso? '),
//     altura: pegarInfo.questionFloat('Qual a sua altura? '),
//     imc: ''
// }

// pessoa.imc = (pessoa.peso / (pessoa.altura ** 2)).toFixed(2)

// let classificacao

//     if (pessoa.imc < 18.5){
//         classificacao = ('Abaixo do peso')

//     } else if (pessoa.imc >= 18.5 && pessoa.imc < 25){
//         classificacao = ('Peso normal')

//     } else if (pessoa.imc >= 25 && pessoa.imc < 30){
//         classificacao = ('Sobrepeso')

//     } else if (pessoa.imc >= 30 && pessoa.imc < 35){
//        classificacao =  ('Obesidade grau I')

//     } else if (pessoa.imc >= 35 && pessoa.imc < 40){
//        classificacao =  ('Obesidade grau II')
//     }
//     if (pessoa.imc > 40){
//         classificacao = ('Obesidade grau III')
// }
// console.table(pessoa)
// console.log(`${pessoa.nome}, seu IMC é ${pessoa.imc} | classificação: ${classificacao}.`)

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Caixa eletrônico
// ------------------------------------------------------------
// a) Defina um objeto "conta" com:
//    - titular: "Maria"
//    - saldo: 1500
//    - bloqueada: false
//    - senha: 1234
// b) Peça ao usuário:
//    - Senha de 4 dígitos.
// c) Verifique se a senha está correta.
//    - Se estiver incorreta → "Senha incorreta. Operação cancelada."
//    - Se estive correta, pergunte ao usuário se deseja sacar ou depositar um valor
// d) Se ele escolher sacar, pergunte qual valor que deseja sacar.
//    Se ele escolher depositar, pergunte qual valor que deseja depositar.
// e) Se for saque, usando if/else if/else (aninhado se necessário), verifique:
//    1. Se a conta está bloqueada → "Conta bloqueada. Procure uma agência."
//    2. Se o valor do saque for menor ou igual a 0 → "Valor inválido."
//    3. Se o saldo for insuficiente → "Saldo insuficiente. Saldo atual: R$ <saldo>"
//    4. Caso contrário → realize o saque, atualize o saldo e exiba:
//       "Saque de R$ <valor> realizado. Novo saldo: R$ <saldo>"
// f) Se for depósito, usando if/else if/else (aninhado se necessário), verifique:
//    1. Se a conta está bloqueada → "Conta bloqueada. Procure uma agência."
//    2. Se o valor do depósito for menor ou igual a 0 → "Valor inválido."
//    3. Caso contrário → realize o depósito, atualize o saldo e exiba:
//       "Depósito de R$ <valor> realizado. Novo saldo: R$ <saldo>"
// Evite repetir linhas de código.
// Verifique se é possível fazer verificações uma única vez, alterando a lógica ao invés de duplicar código.

// → Seu código aqui:

// let conta = {
//     titular: 'Maria',
//     saldo: 1500,
//     bloqueada: false,
//     senha: 1234
// }
// console.log('===== CAIXA ELETRONICO =====')
// console.log('1 - Sacar')
// console.log('2 - Depositar')


// let senha = pegarInfo.questionInt('Digite a senha de 4 digitos: ')
// let saqueDeposito = 0
// let saque = 0
// let deposito = 0

// if (senha !== conta.senha) {
//     console.log('Senha incorreta, operacao cancelada.')

// } else if (conta.bloqueada) {
//     console.log('Conta bloqueada, procure uma agencia.')

// } else {
//      saqueDeposito = pegarInfo.questionInt('Qual operacao deseja realizar, Sacar ou Depositar? 1 p/saque 2p/deposito: ')

//         if (saqueDeposito !== 1 && saqueDeposito !== 2) {
//             console.log('Operacao invalida')

//         } else if (saqueDeposito === 1) {
//             saque = pegarInfo.questionInt('Digite o valor para sacar: ')

//          if (saque <= 0) {
//             console.log('Valor invalido!')

//         } else if (saque > conta.saldo){
//             console.log(`Saldo insuficiente, saldo atual: ${conta.saldo}`)

//         } else {
//             conta.saldo -= saque
//             console.log(`Saque efetuado, saldo atual: ${conta.saldo}`)
//         }

//         } if (saqueDeposito === 2) {
//             deposito = pegarInfo.questionInt('Digite o valor para depositar: ')

//          if (deposito <= 0) {
//             console.log('Valor invalido')

//         } else {
//             conta.saldo += deposito
//             console.log(`Deposito realizado, saldo atual: ${conta.saldo}`)
//         }
// }
// }




console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Classificação de filmes por faixa etária
// ------------------------------------------------------------
// Classificação indicativa:
//   - Livre          → todas as idades
//   - 10 anos        → 10 anos ou mais
//   - 12 anos        → 12 anos ou mais
//   - 14 anos        → 14 anos ou mais
//   - 16 anos        → 16 anos ou mais
//   - 18 anos        → 18 anos ou mais
//
// a) Pergunte ao usuário:
//    - Nome do espectador.
//    - Idade do espectador.
//    - Classificação do filme escolhido:
//      0 – Livre | 10 – 10 anos | 12 – 12 anos |
//      14 – 14 anos | 16 – 16 anos | 18 – 18 anos
// b) Armazene os dados em um objeto "cinema".
// c) Usando if/else if/else, verifique se o espectador pode assistir ao filme:
//    - Se a classificação for 0 (Livre) → sempre pode.
//    - Nos demais casos, compare a idade com a classificação.
// d) Exiba o resultado:
//    - Pode assistir → "<nome> pode assistir. Boa sessão!"
//    - Não pode → "<nome> não pode assistir. Classificação: <classificação> anos."

// → Seu código aqui:

// console.log(`
// Classificação indicativa:
// - Livre          → todas as idades
// - 10 anos        → 10 anos ou mais
// - 12 anos        → 12 anos ou mais
// - 14 anos        → 14 anos ou mais
// - 16 anos        → 16 anos ou mais
// - 18 anos        → 18 anos ou mais
// `);

// const cinema = {
//     nomeEspectador: rl.question('Digite seu nome: '),
//     idadeEspectador: rl.questionInt('Digite sua idade: '),
//     classificacaoFilme: rl.questionInt('Digite a classificacao do filme: ')
// }

// if (cinema.classificacaoFilme === 0 || cinema.idadeEspectador >= cinema.classificacaoFilme) {
//     console.log(`${cinema.nomeEspectador} pode assistir. Boa sessão!`)

// } else {
//     console.log(`${cinema.nomeEspectador} não pode assistir. Classificação: ${cinema.classificacaoFilme} anos.`)
// }



console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Simulador de pedido de lanche
// ------------------------------------------------------------
// Cardápio:
//   1 – X-Burguer R$ 22,00
//   2 – X-Frango  R$ 20,00
//   3 – X-Veggie  R$ 18,00
//   4 – Combo (lanche + batata + refri)  R$ 35,00
//
// Adicionais (só para os itens 1, 2 e 3):
//   - Batata frita: + R$ 8,00
//   - Refrigerante: + R$ 5,00
//
// a) Pergunte ao usuário:
//    - Nome.
//    - Número do lanche desejado.
//    - Se o lanche não for o Combo:
//        - Quer batata frita?
//        - Quer refrigerante?
// b) Armazene todos os dados e o total calculado em um objeto "pedido".
// c) Calcule o total com base nas escolhas.
// d) Exiba o objeto "pedido" com console.table().
// e) Exiba o resumo final com template literal:
//    "Pedido de <nome>: <lanche> + adicionais = R$ <total>"

// → Seu código aqui:

// console.log(`
//      Cardápio:
//    1 - X-Burguer R$ 22,00
//    2 - X-Frango  R$ 20,00
//    3 - X-Veggie  R$ 18,00
//    4 - Combo (lanche + batata + refri)  R$ 35,00
// `)

// let lanche = ''
// let batata = ''
// let refrigerante; ''
// let valorTotal = 0
// let soma = 0
// let valor = 0

// let pedido = {
//     nome: rl.question('Digite o seu nome: '),
//     lanche: rl.questionInt('Digite o numero do lanche: ')
// }

// switch(pedido.lanche) {
//     case 1:
//         pedido.lanche = 'X-Burguer'
//         pedido.valor = 'R$ 22,00'

//         console.log(`
//            1 - Batata frita: + R$ 8,00
//            2 - Refrigerante: + R$ 5,00
//            3 - Batata e Refrigerante + R$ 12,00`)

//         adicionais = rl.keyInYN(`Quer adicionais? `)
//         if (adicionais === false) {
//             console.table(pedido)

//         } else {
//             add = rl.questionInt('Selecione o adicional: ')
//         } switch(add) {
//             case 1: 
//             pedido.batata = ''
//             valorBatata = 8
//             valorTotal = (valor + valorBatata)
//             console.table(pedido)

//         }
// }

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Simulador de semáforo inteligente
// ------------------------------------------------------------
// Um semáforo funciona assim:
//   - Verde  → siga (velocidade permitida: até 60 km/h)
//   - Amarelo → atenção (reduza a velocidade)
//   - Vermelho → pare
//
// a) Pergunte ao usuário - simulando os dados captados pelo radar:
//    - Cor atual do semáforo: "verde", "amarelo" ou "vermelho".
//    - Velocidade atual do veículo em km/h.
// b) Usando if/else if/else, avalie a situação:
//    - "verde" e velocidade menor ou igual que 60 → "Tudo certo. Pode seguir."
//    - "verde" e velocidade maior que 60 → "Atenção: acima do limite no sinal verde."
//    - "amarelo" → "Reduza a velocidade e prepare-se para parar."
//    - "vermelho" e velocidade maior que 0 → "PARE! Você avançou o sinal vermelho."
//    - "vermelho" e velocidade igual a 0 → "Correto. Aguarde o sinal abrir."
//    - qualquer outra cor → "Cor de semáforo inválida."
// c) Exiba o resultado com template literal.

// → Seu código aqui:

// console.log(`
// ╔════════════════════════════════════════════════════════════╗
// ║         🚦 SIMULADOR DE SEMÁFORO INTELIGENTE 🚦          ║
// ╚════════════════════════════════════════════════════════════╝

// Um semáforo funciona assim:
//   🟢 Verde  → siga (velocidade permitida: até 60 km/h)
//   🟡 Amarelo → atenção (reduza a velocidade)
//   🔴 Vermelho → pare
// `)

// let continuar = true
// let tentativas = 0

// while (continuar) {
//     console.log('\n--- Simulação ' + (tentativas + 1) + ' ---')
    
//     // Validar entrada de cor do semáforo
//     let corSemaforo = ''
//     let corValida = false
    
//     do {
//         corSemaforo = rl.question('Qual a cor do semáforo? (verde/amarelo/vermelho): ').toLowerCase().trim()
        
//         if (corSemaforo === 'verde' || corSemaforo === 'amarelo' || corSemaforo === 'vermelho') {
//             corValida = true
//         } else {
//             console.log('❌ Cor inválida! Por favor, digite: verde, amarelo ou vermelho.')
//         }
//     } while (!corValida)
    
//     // Validar entrada de velocidade
//     let velocidade = -1
    
//     do {
//         velocidade = rl.questionInt('Qual a velocidade do veículo? (km/h): ')
        
//         if (velocidade < 0) {
//             console.log('❌ Velocidade inválida! A velocidade não pode ser negativa.')
//         }
//     } while (velocidade < 0)
    
//     // Processar situação do semáforo
//     let mensagem = ''
    
//     if (corSemaforo === 'verde' && velocidade <= 60) {
//         mensagem = '✅ Tudo certo. Pode seguir.'
        
//     } else if (corSemaforo === 'verde' && velocidade > 60) {
//         mensagem = '⚠️  Atenção: acima do limite no sinal verde.'
        
//     } else if (corSemaforo === 'amarelo') {
//         mensagem = '🟡 Reduza a velocidade e prepare-se para parar.'
        
//     } else if (corSemaforo === 'vermelho' && velocidade > 0) {
//         mensagem = '🚫 PARE! Você avançou o sinal vermelho.'
        
//     } else if (corSemaforo === 'vermelho' && velocidade === 0) {
//         mensagem = '✅ Correto. Aguarde o sinal abrir.'
//     }
    
//     // Exibir resultado com template literal
//     console.log(`
// ┌──────────────────────────────────────────┐
// │ SITUAÇÃO DO RADAR                        │
// ├──────────────────────────────────────────┤
// │ Semáforo: ${corSemaforo.toUpperCase().padEnd(13)} (${corSemaforo.charAt(0).toUpperCase() + corSemaforo.slice(1)})
// │ Velocidade: ${velocidade} km/h
// │ Status: ${mensagem}
// └──────────────────────────────────────────┘
//     `)
    
//     // Perguntar se deseja continuar simulando
//     let opcao = rl.keyInYN('\n🔄 Deseja simular outro veiculo? (S/N): ')
    
//     if (!opcao) {
//         continuar = false
//         console.log('\n✅ Obrigado por usar o simulador de semáforo inteligente!')
//     }
    
//     tentativas++
// }

console.log("_______________________________");