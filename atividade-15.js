const rl = require('readline-sync')

// ============================================================
// ATIVIDADE 15 – Funções com Parâmetros e Retornos
// ============================================================
//
// IMPORTANTE: a partir de agora, as funções devem RECEBER
// PARÂMETROS e RETORNAR valores sempre que fizer sentido.
// Evite ficar misturando console.log() dentro de funções.
//
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Função com 1 parâmetro
// ------------------------------------------------------------
// a) Crie a função 'quadrado(n)' que retorna n elevado ao quadrado.
// b) Teste com 3, 7 e 10. Exiba cada resultado.

// → Seu código aqui:

// function quadrado(n){
//     let quad = n ** 2
//     console.log(`${n} ao quadrado = ${quad}`)
//     return n ** 2
// }
// quadrado(3)
// quadrado(7)
// quadrado(10)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Função com 2 parâmetros
// ------------------------------------------------------------
// a) Crie a função 'somar(a, b)' que retorna a soma de 2 numeros quaisquer (numeros passados ao chamar a função).
// b) Crie 'subtrair(a, b)', 'multiplicar(a, b)' e 'dividir(a, b)'.
//    Em dividir, retorne a string "Erro: divisão por zero" se b === 0.
// c) Teste cada uma com diversos valores e exiba os resultados.

// → Seu código aqui:

function somar(a, b){
    let soma = a + b
    return soma
}

function subtrair(a, b){
    let soma = a - b
    return soma
}

function multiplicar(a, b){
    let soma = a * b
    return soma
}

function dividir(a, b){
    let soma = a / b
    if (b === 0){
        return "Erro: divisão por zero"
    } else {
        return soma
    }
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Funções booleanas
// ------------------------------------------------------------
// a) Crie 'ehPar(n)' que retorna true se n for par, senão false.
// b) Crie 'ehMaiorDeIdade(idade)' que retorna true se idade >= 18.
// c) Crie 'ehVogal(letra)' que retorna true se letra for vogal
//    (considere maiúsculas e minúsculas).
// d) Teste cada função e exiba os resultados.

// → Seu código aqui:

function ehPar(n){
    if(n % 2 === 0){
        return true
    } else {
        return false
    }
}
// console.log(ehPar(1))

function ehMaiorDeIdade(age){
    if(age >= 18){
        return true
    } else {
        return false
    }
}
// console.log(ehMaiorDeIdade(16))

function ehVogal(v){
    if(v == 'a' || v == 'A' || v == 'e' || v == 'E' || v == 'i' || v == 'I' || v == 'o' || v == 'O' || v == 'u' || v == 'U'){
        return true
    } else {
        return false
    }
}
// console.log(ehVogal('a'))
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Múltiplos returns (early return)
// ------------------------------------------------------------
// a) Crie a função 'classificarIMC(imc)' que retorna:
//    - "Abaixo do peso"   se imc < 18.5
//    - "Peso normal"      se imc < 25
//    - "Sobrepeso"        se imc < 30
//    - "Obesidade"        caso contrário
// b) Crie 'calcularIMC(peso, altura)' que retorna peso / (altura * altura).
// c) Pergunte peso e altura ao usuário.
// d) Combine as duas funções e exiba:
//    "IMC: <valor> – <classificação>"

// → Seu código aqui:

function classificarIMC(imc){
    if(imc < 18.5){
        return 'Abaixo do peso'

    } if(imc < 25){
        return 'Peso Normal'

    } if(imc < 30){
        return 'Obesidade'

    } else {
        return 'Obesidade'
    }
}
let peso
let altura

function calcularIMC(weigth, heigth){
    
    peso = rl.questionFloat('Qual o seu peso? ')
    altura = rl.questionFloat('Qual a sua altura? ')
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}

// console.log(calcularIMC(peso, altura), classificarIMC(imc))

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Parâmetros padrão (default)
// ------------------------------------------------------------
// a) Crie a função 'precoComDesconto(valor, desconto = 10)' que retorna
//    o valor após aplicar o desconto em PORCENTAGEM.
// b) Teste:
//    - precoComDesconto(100)     → retorno esperado: 90
//    - precoComDesconto(100, 25  → retorno esperado: 75
//    - precoComDesconto(250, 5)  → retorno esperado: 237.5
// c) Exiba cada resultado formatado com toFixed(2).

// → Seu código aqui:

function precoComDesconto(valor, desconto = 10){
    return valor - (valor * desconto / 100)
}

// console.log(`Final: ${precoComDesconto(100, 10)}`)
// console.log(`Final: ${precoComDesconto(100, 25)}`)
// console.log(`Final: ${precoComDesconto(250, 5)}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Funções que recebem vetores
// ------------------------------------------------------------
// a) Crie a função 'somarVetor(vet)' que retorna a soma dos elementos de um vetor.
// b) Crie 'mediaVetor(vet)' que retorna a média (REAPROVEITE somarVetor).
// c) Crie 'maiorDoVetor(vet)' que retorna o maior valor de um vetor.
// d) Crie 'menorDoVetor(vet)' que retorna o menor valor de um vetor.
// e) Teste com:
      numeros = [12, 7, 25, 3, 18, 9, 31, 14];

// → Seu código aqui:

function somarVetor(arr){
    let soma = 0
    for(let n of numeros){
        soma += n
    }
    return soma
}

function mediaVetor(somaTotal){
    total = somarVetor(numeros)
    media = total / numeros.length

    return media.toFixed(2)

}

function maiorDoVetor(arr){
    maior = numeros[0]
    for(let i = 0; i < numeros.length; i++){

        if(numeros[i] > maior){
            maior = numeros[i]
        }
    }
    return maior
}

function menorDoVetor(arr){
    menor = numeros[0]
    for(let i = 0; i < numeros.length; i++){

        if(numeros[i] < menor){
            menor = numeros[i]
        }
    }
    return menor
}

// console.log(somarVetor(numeros))
// console.log(mediaVetor(somarVetor(numeros)))
// console.log(maiorDoVetor(numeros))
// console.log(menorDoVetor(numeros))

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Função que retorna objeto
// ------------------------------------------------------------
// a) Crie a função 'criarAluno(nome, idade, nota)' que retorna um objeto:
//    { nome, idade, nota, situacao }
//    onde 'situacao' é "Aprovado" se nota >= 7, senão "Reprovado".
// b) A verificação de aprovação deve ser feita por uma função específica para isso.
// c) Crie 3 alunos chamando a função e exiba-os com console.table([a1, a2, a3]).

// → Seu código aqui:



function criarAluno(nome, idade, nota){
    const situacao = situacaoA(nota)
    const aluno = {
        nome: nome,
        idade: idade,
        nota: nota,
        situacao
    }

    return aluno
}

function situacaoA(nota){
    if(nota >= 7)
        return 'Aprovado(a)'
    return 'Reprovado(a)'
}

// console.log(criarAluno('Gabriel', 21, 10))

let alunos = []

// for(let i = 0; i < 3; i++){
    
//     let nome = rl.question('Nome do aluno: ')
//     let idade = rl.questionInt('Idade do aluno: ')
//     let nota = rl.questionFloat('Nota do aluno: ')

//     const aluno = criarAluno(nome, idade, nota)
    
//     alunos.push(aluno)
// }

// console.table(alunos)

// ------------------------------------------------------------
// EXERCÍCIO 8 – Função que retorna vetor
// ------------------------------------------------------------
// a) Crie a função 'gerarPares(inicio, fim)' que retorna um vetor
//    com todos os números PARES entre 'inicio' e 'fim' (inclusive).
// b) Teste com gerarPares(1, 20) e exiba o vetor.
// c) Crie 'filtrarMaioresQue(vet, limite)' que retorna um novo vetor
//    apenas com os elementos maiores que 'limite'.
// d) Combine: gere pares de 1 a 50 e filtre os maiores que 30.

// → Seu código aqui:

let numeros1 = [12, 7, 25, 3, 18, 9, 31, 14];

function gerarPares(inicio, fim){
    const pares = []
    for(let i = inicio; i <= fim; i++){
        if(i % 2 == 0){
            pares.push(i)
        }
    }
    return pares
}
// console.log(gerarPares(1, 20))

function filtrarMaioresQue(vet, limite){
    const filtrado = []
    for(let i = 0; i <= vet.length; i++){
        if(vet[i] > limite){
            filtrado.push(vet[i])
        }
    }
    return filtrado
}

// console.log(filtrarMaioresQue(numeros, 10))

const pares = gerarPares(0,50)
console.log(filtrarMaioresQue(pares, 30))

console.log("_______________________________");