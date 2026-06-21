const rl = require('readline-sync')

// ============================================================
//   DESAFIOS (para quem já terminou a atividade 15)
//   Funções com Parâmetros e Retornos
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Validador de senhas
// ------------------------------------------------------------
// Crie um conjunto de funções para validar uma senha.
//
// a) 'temTamanhoMinimo(senha, min)'  → true/false (senha.length >= min).
// b) 'temNumero(senha)'              → true se houver algum dígito (0-9).
// c) 'temMaiuscula(senha)'           → true se houver alguma letra maiúscula.
// d) 'temEspecial(senha)'            → true se houver !@#$%&*?
// e) 'validarSenha(senha)'           → retorna um OBJETO com:
//        { valida, motivos }
//    'motivos' é um VETOR de strings com tudo que falta. Ex:
//        { valida: false, motivos: ["Mínimo de 8 caracteres", "Deve conter número"] }
// f) Pergunte uma senha ao usuário e exiba o resultado da validação.

// → Seu código aqui:

function tamanhoMin(senha, min) {
    const minSenha = senha.split('')

    if (minSenha.length >= min)
        return true
    return false
}
// console.log(tamanhoMin('12345', 5))

// function temNum(senha){
//     const anyNum = senha.split('')
//     for(let i = 0; i < anyNum.length; i++){
//         if(anyNum[i] === '0' || anyNum[i] === '1' || anyNum[i] === '2' || anyNum[i] === '3' || anyNum[i] === '4' || anyNum[i] === '5'
//             || anyNum[i] === '6' || anyNum[i] === '7' || anyNum[i] === '8' || anyNum[i] === '9')
//             return true
//         }
//         return false
// }
// // console.log(temNum('freitas1'))

function temNum(senha) {

    for (let i = 0; i < senha.length; i++) {
        if (senha[i] >= '0' && senha[i] <= '9')
            return true
    }
    return false
}
// console.log(temNum('freitas'))
// console.log(temNum('freitas1'))
// console.log(temNum('1freitas'))
// console.log(temNum('abc123'))

function temMaiuscula(senha) {
    for (let i = 0; i < senha.length; i++) {
        if (senha[i] >= 'A' && senha[i] <= 'Z')
            return true
    }
    return false
}

// console.log(temMaiuscula('freitaS'))
// console.log(temMaiuscula('freitas1'))
// console.log(temMaiuscula('1freiAtas'))
// console.log(temMaiuscula('abc123'))

// d) 'temEspecial(senha)'    → true se houver !@#$%&*?

function temEspecial(senha) {
    let special = senha.split('')
    for (let i = 0; i < special.length; i++){
        if (special[i] === '!' || special[i] === '@' || special[i] === '#' || special[i] === '$' || special[i] === '%' || special[i] === '&' || special[i] === '*')
            return true
    }
    return false
}

// console.log(temEspecial('@freitaS'))
// console.log(temEspecial('!freitas1'))
// console.log(temEspecial('@1freiAtas'))
// console.log(temEspecial('abc123'))

// e) 'validarSenha(senha)'           → retorna um OBJETO com:
//        { valida, motivos }
//    'motivos' é um VETOR de strings com tudo que falta. Ex:
//        { valida: false, motivos: ["Mínimo de 8 caracteres", "Deve conter número"] }
// f) Pergunte uma senha ao usuário e exiba o resultado da validação.

function validarSenha(senha){

    let valida = {
        tamanhoMinimo: 'OK',
        possuiNumero: 'OK',
        temLetraMaiuscula: 'OK',
        temCaracterEspecial: 'OK'
    }

    let tamanhoMinimo = tamanhoMin(senha, 10)
    let temNumero = temNum(senha)
    let temMaiusculo = temMaiuscula(senha)
    let temespecial = temEspecial(senha)

    const motivo = [`Tamanho mínimo não atingido! Minimo 10 caracteres.`, `Falta Número! Exemplo: ${senha}123`, `Não possui letra Maiúscula`, `Não possui caracter especial! Exemplo: @${senha}`]

    if(tamanhoMinimo === false){
        valida.tamanhoMinimo = motivo[0]
    }
    if(temNumero === false){
        valida.possuiNumero = motivo[1]
    }
    if(temMaiusculo === false){
        valida.temLetraMaiuscula = motivo[2]
    }
    if(temespecial === false){
        valida.temCaracterEspecial = motivo[3]
    }

    return valida

}
// console.log(validarSenha('gabriel'))
// console.log(validarSenha('gabrielfreitas'))
// console.log(validarSenha('gabrielfreitas123'))
// console.log(validarSenha('gabrielFreitas123'))
// console.log(validarSenha('gabriel@Freitas123'))

console.log("_______________________________");

// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// Crie uma "biblioteca" de funções de conversão.
//
// a) 'celsiusParaFahrenheit(c)'  → C * 1.8 + 32
// b) 'fahrenheitParaCelsius(f)'  → (F - 32) / 1.8
// c) 'kmParaMilhas(km)'          → km * 0.621371
// d) 'milhasParaKm(mi)'          → mi / 0.621371
// e) 'kgParaLibras(kg)'          → kg * 2.20462
// f) 'librasParaKg(lb)'          → lb / 2.20462
//
// g) Crie 'converter(valor, dePara)' que recebe a unidade de origem
//    e a unidade de destino e RETORNA o valor convertido, chamando a função correta.
//
// h) Faça um menu (do...while) onde o usuário digita o valor, e a unidade para qual deseja converter
//    e mostre o resultado formatado com toFixed(2).

// → Seu código aqui:

function celsiusParaFahrenheit(c){
    let fahrenheit = c * 1.8 + 32
    return fahrenheit.toFixed(2)
}

function fahrenheitParaCelsius(f){
    let celsius = (f - 32) / 1.8
    return celsius.toFixed(2)
}

function kmParaMilhas(km){
    let milhas = km * 0.621371
    return milhas.toFixed(2)
}

function milhasParaKm(mi){
    let km = mi / 0.621371
    return km.toFixed(2)
}

function kgParaLibras(kg){
    let libras = kg * 2.20462
    return libras.toFixed(2)
}

function librasParaKg(lb){
    let kilos = lb / 2.20462
    return kilos.toFixed(2)
}

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Quizz
// ------------------------------------------------------------
// a) Declare uma lista com 5 objetos, contendo cada objeto:
//    pergunta: "..."
//    jaRespondida: false
//    acertou: false
// b) Crie a função 'exibirPergunta' que exibe a pergunta de forma estilizada.
// c) Crie a função 'verificarResposta' que verifica se a resposta está correta.
// d) Crie a função 'iniciarQuiz' que chama as perguntas em sequência.
// e) Crie a função 'mostrarResultado' que exibe o resultado atual.
// f) Crie a função 'iniciarQuiz' para iniciar o quiz.

// → Seu código aqui:

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Banco de funcionários
// ------------------------------------------------------------
//
// a) Estrutura do funcionário:
//        { id, nome, cargo, salario, ativo }
// b) Crie funções:
//    - 'criarFuncionario(lista, nome, cargo, salario)' → adiciona um novo objeto (funcionário) em uma lista de funcionários.
//    - 'buscarPorId(lista, id)'                        → retorna o objeto ou null.
//    - 'atualizarSalario(lista, id, novoSalario)'      → true/false (atualizou ou não).
//    - 'desligar(lista, id)'                           → marca ativo = false; true/false.
//    - 'reintegrar(lista, id)'                         → marca ativo = true; true/false.
//    - 'totalFolha(lista)'                             → soma dos salários dos ATIVOS.
//    - 'mediaSalarial(lista)'                          → média dos salários dos ATIVOS.
//    - 'maiorSalario(lista)'                           → retorna o funcionário ATIVO
//                                                        com maior salário.
// c) Construa um menu (do...while + switch) que permita usar todas as funções.
// d) Após cada operação, exiba a lista atualizada com console.table().

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Jogo de adivinhação modularizado
// ------------------------------------------------------------
// Recrie o "jogo da adivinhação", agora SEPARADO em funções.
//
// a) 'sortearNumero(min, max)'              → retorna um inteiro aleatório no intervalo.
// b) 'pedirPalpite(min, max)'               → pergunta e retorna um inteiro válido
//                                              (refaz a pergunta se estiver fora).
// c) 'compararPalpite(palpite, alvo)'       → retorna "maior", "menor" ou "acertou".
// d) 'classificarTentativas(qtd)'           → retorna uma string:
//                                              1     → "Sorte de principiante!"
//                                              2-3   → "Excelente!"
//                                              4-6   → "Bom!"
//                                              7-10  → "Regular."
//                                              >10   → "Continue tentando!"
// e) 'jogar(min, max)'                      → executa o jogo completo:
//                                              sorteia, faz o loop de palpites,
//                                              e RETORNA a quantidade de tentativas.
// f) No programa principal, pergunte se o usuário quer jogar de novo (keyInYN()).
//    Mantenha um vetor 'historico' com todas as partidas:
//        { partida, tentativas, classificacao }
//    Ao final, exiba console.table(historico).

// → Seu código aqui:


console.log("_______________________________");