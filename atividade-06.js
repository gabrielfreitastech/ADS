let pegarInfo = require('readline-sync')
// ============================================================
//   ATIVIDADE 06 – Operadores Lógicos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-06.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Tabela verdade do &&
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true && true → <resultado>"
//
// Combinações:
//   a) true && true
//   b) true && false
//   c) false && true
//   d) false && false

// → Seu código aqui:
// let trueAndTrue = true && true
// let trueAndFalse = true && false
// let falseAndTrue = false && true
// let FalseAndFalse = false && false
// console.log(`true && true : ${trueAndTrue}`)
// console.log(`true && false : ${trueAndFalse}`)
// console.log(`false && true : ${falseAndTrue}`)
// console.log(`false && false : ${FalseAndFalse}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Tabela verdade do ||
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true || false → <resultado>"
//
// Combinações:
//   a) true || true
//   b) true || false
//   c) false || true
//   d) false || false

// → Seu código aqui:
// let trueAndTrue = true || true
// let trueAndFalse = true || false
// let falseAndTrue = false || true
// let falseAndFalse = false || false
// console.log(`true || true : ${trueAndTrue}`)
// console.log(`true || false : ${trueAndFalse}`)
// console.log(`false || true : ${falseAndTrue}`)
// console.log(`false || false : ${falseAndFalse}`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Operador ! (NOT)
// ------------------------------------------------------------
// a) Declare "sistemaAtivo" com valor true.
// b) Declare "modoManutencao" atribuindo o valor invertido de "sistemaAtivo" (usando !).
// c) Declare "lugarVago" com valor false.
// d) Declare "lugarOcupado" com o valor invertido de "lugarVago" (usando !).
// e) Exiba todas as 4 variáveis com template literal mostrando seus valores.

// → Seu código aqui:
// let sistemaAtivo = true
// let modoManutencao = !true
// let lugarVago = false
// let lugarOcupado = !lugarVago

// console.log(`O sistema esta ativo? ${sistemaAtivo} `)
// console.log(`O sistema está em manunteção? ${modoManutencao}`)
// console.log(`O lugar esta vago? ${lugarVago}`)
// console.log(`O lugar está ocupado? ${lugarOcupadoS}`)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Combinando && com operadores relacionais
// ------------------------------------------------------------
// a) Pergunte ao usuário seu peso e altura. Armazene os valores em um objeto.
// b) Calcule o IMC: peso / (altura ** 2). Armazene em "imc" (dentro do objeto usuário).
// c) Armazene em "imcAbaixoDoPeso" o resultado de: imc < 18.5
// c) Armazene em "imcNormal" o resultado de: imc >= 18.5 && imc <= 24.9
// d) Armazene em "imcAcimaDoPeso" o resultado de: imc >= 25 && imc <= 29.9
// e) Exiba o IMC e os três resultados booleanos com template literal. Cada imc em um console.log() individual.

// → Seu código aqui:
// let peso = pegarInfo.questionFloat('Digite o seu peso: ');
// let altura = pegarInfo.questionFloat('Digite a sua altura: ');
// let imc = peso / (altura ** 2);

// let usuario = {
//     imc,
//     imcAbaixoDoPeso: imc <= 18.5,
//     imcNormal: imc >= 18.5 && imc <= 24.9,
//     imcAcimaDoPeso: imc >= 25 && imc <= 29.9
// };
// console.log(usuario)
// console.log(`IMC normal:  ${usuario.imc.toFixed(2)}`)
// console.log(`IMC abaixo do peso:  ${usuario.imcAbaixoDoPeso}`)
// console.log(`IMC acima do peso:  ${usuario.imcAcimaDoPeso}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Combinando || com operadores relacionais
// ------------------------------------------------------------
// a) Declare "notaFinal" com valor 4.8.
// b) Armazene em "precisaRecuperacao" o resultado de:
//    notaFinal >= 4 && notaFinal < 6
// c) Armazene em "reprovado" o resultado de:
//    notaFinal < 4
// d) Armazene em "precisaDeAjuda" o resultado de:
//    precisaRecuperacao || reprovado
// e) Exiba todos os resultados com template literal.

// → Seu código aqui:
// let notaFinal = 4.8
// let precisaDeRecuperacao = notaFinal >= 4 && notaFinal < 6
// let reprovado =  !notaFinal<4
// let precisaDeAjuda = precisaDeRecuperacao || reprovado

// console.log(`A nota final foi: ${notaFinal} ${notaFinal? 'Não atingiu a média' : 'Acima da média'}`)
// console.log(`Precisa de recuperação? ${precisaDeRecuperacao? 'Sim, precisa de recuperação' : 'Não, não precisa de recuperação'}`)
// console.log(`Foi reprovado: ${reprovado} ${reprovado? 'Não atingiu a média foi reprovado' : 'Não atingiu a média final'}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Operador ternário
// ------------------------------------------------------------
// a) Declare "temperatura" com valor 38.2.
// b) Usando o operador ternário, armazene em "diagnostico":
//    Se temperatura >= 37.6 → "Febre detectada"
//    Caso contrário → "Temperatura normal"
// c) Exiba a variável "diagnostico" com template literal mostrando a temperatura e o resultado do diagnóstico.

// → Seu código aqui:
// let temperatura = 38.2
// let diagnostico = `Temperatura >= 37.6? ${temperatura >= 37.6}: ${temperatura? 'Febre detectada' : 'Sem febre'}`
// console.log(diagnostico)

console.log("_______________________________");
 

// ------------------------------------------------------------
// EXERCÍCIO 7 – Operador ternário
// ------------------------------------------------------------
// a) Declare "velocidade" com valor 110 e "limiteVelocidade" com valor 100.
// c) Usando o operador ternário, armazene em "statusMulta":
//    Se velocidade > limiteVelocidade → "Multa aplicada"
//    Caso contrário                    → "Velocidade regular"
// c) Exiba a variável "statusMulta" com template literal mostrando a velocidade e o resultado da multa.

// → Seu código aqui:
// let velocidade = pegarInfo.questionInt('Informe a velocidade: ')
// let limiteVelocidade = 100
// let StatusMulta = (`${velocidade} > ${limiteVelocidade}: ${velocidade > limiteVelocidade? 'Multa aplicada' : 'Velocidade regular'}`)
// console.log(StatusMulta)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Operador ternário e questionamento
// ------------------------------------------------------------
// a) Pergunte ao usuário se ele é bolsista (keyInYN()). Armazene em "ehEstudante".
// b) Pergunte ao usuário se ele paga mais que R$ 1000,00 mensais pelo curso.
// b) Usando o operadores ternários, armazene em "mensagem":
//    Se é bolsista e paga mais que R$ 1000,00 → "Desconto aplicado!"
//    Caso contrário → "Desconto não aplicado."
// c) Exiba a variável "mensagem" com template literal.

// → Seu código aqui:
// let ehEstudante = pegarInfo.keyInYN('Voce eh bolsista? ')
// let paga = pegarInfo.keyInYN('Voce pagar mais de R$ 1000,00 mensais pelo curso? ')
// let mensagem =(`ehEstudante && paga: ${ehEstudante && paga? 'Aplicar desconto de R$1000,00' : 'Não aplicar desconto'}`)
// console.log(mensagem)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Verificação de acesso com input
// ------------------------------------------------------------
// a) Peça ao usuário e armazene os dados em um objeto:
//    - Sua idade (questionInt()).
//    - Se possui ingresso (keyInYN()).
//    - Se é associado ao clube (keyInYN()).
// b) Armazene e exiba os resultados das seguintes verificações em outro objeto:
//    - "podeEntrarNormal": (idade maior ou igual a 18 e possuiIngresso) ou ehAssociado
//    - "podeEntrarSocio": possuiIngresso e ehAssociado
//    - "precisaAcompanhante": idade menor que 18
//    - "naoPodeEntrar": não possuiIngresso e não ehAssociado
// c) Exiba a mensagem final usando ternário:
//    Se podeEntrarNormal ou podeEntrarSocio → "Entrada liberada!"
//    Caso contrário → "Entrada negada."

// → Seu código aqui:
// let usuario = {
//     idade: pegarInfo.question('Digite a sua idade: '),
//     ingresso: pegarInfo.keyInYN('Possui ingresso? '),
//     associado: pegarInfo.keyInYN('Eh associado? ')
// }
// let socio = {
//     podeEntrarNormal: usuario.idade >=18 && usuario.ingresso,
//     podeEntrarSocio: usuario.ingresso && usuario.associado,
//     precisaAcompanhante: usuario.idade <18,
//     naoPodeEntrar: usuario.ingresso || usuario.associado
// }
// console.log(`${socio.podeEntrarNormal || socio.podeEntrarSocio? 'Entrada liberada' : 'Entrada negada'}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Verificação de estoque com objeto
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do produto.
//    - Quantidade em estoque.
//    - Se o produto está ativo no sistema (keyInYN()).
// b) Armazene os dados em um objeto chamado "produto".
// c) Crie as seguintes verificações booleanas:
//    - "temEstoque": quantidade maior que 0
//    - "produtoDisponivel": temEstoque e está ativo
//    - "produtoIndisponivel": não temEstoque || não está ativo
// d) Exiba os resultados com template literal.

// → Seu código aqui:
// let produto = {
//     nome: pegarInfo.question('Digite o nome do produto: '),
//     quantidadeEstoque: pegarInfo.questionInt('Digite a quantidade do estoque: '),
//     ativo: pegarInfo.keyInYN('Esta ativo no estoque? ')
// }
// let temEstoque = produto.quantidadeEstoque > 0
// let produtoDisponivel = temEstoque && produto.ativo
// let produtoIndisponivel = !temEstoque || !produto.ativo

// console.log(`Tem estoque de ${produto.nome}? ${temEstoque ? 'Sim, tem' : 'Nao, estoque zerado'}`)
// console.log(`${produto.nome} esta disponivel? ${produtoDisponivel? 'Sim, disponivel' : 'Nao, indisponivel' }`)
// console.log(`ProdutoIndisponivel? ${produtoIndisponivel? 'Sim, indisponivel' : 'Sim, indisponivel'}`)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 11 – Verificação de permissões
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Se ele é administrador (keyInYN())
//    - Se ele está logado (keyInYN())
//    - Se a conta está ativa (keyInYN())
// b) Armazene as respostas em um objeto chamado "usuario".
// c) Crie as seguintes verificações:
//    - "acessoSistema": logado e contaAtiva
//    - "acessoAdmin": acessoSistema e ehAdmin
//    - "acessoNegado": não logado ou não contaAtiva
// d) Exiba todos os resultados.

// → Seu código aqui:
let usuario = {
    adm: pegarInfo.keyInYN('Voce eh administrador? '),
    log: pegarInfo.keyInYN('Voce esta logado? '),
    contaAtiva: pegarInfo.keyInYN('Sua conta esta ativa? ')
}
const acessoSistema = usuario.log && usuario.contaAtiva
const acessoAdmin = acessoSistema && usuario.adm
let acessoNegado = !usuario.log || !usuario.contaAtiva

console.log(acessoSistema)
console.log(acessoAdmin)
console.log(acessoNegado)



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 12 – Sistema simples de login
// ------------------------------------------------------------
// a) Crie um objeto "credenciaisSistema" contendo:
//    usuario: "admin"
//    senha: "1234"
// b) Pergunte ao usuário:
//    - usuário
//    - senha
// c) Crie as verificações:
//    - "usuarioCorreto": usuarioDigitado estritamente igual a usuario
//    - "senhaCorreta": senhaDigitada estritamente igual a senha
//    - "loginValido": usuarioCorreto e senhaCorreta
// d) Usando ternário, exiba:
//    Se loginValido → "Login realizado com sucesso!"
//    Caso contrário → "Usuário ou senha incorretos."

// → Seu código aqui:


console.log("_______________________________");