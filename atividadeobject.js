// ============================================================
//   ATIVIDADE 02-2 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:
let aluno = {
    nome: 'Jerry',
    idade: 14,
    curso: 'artesão'
}
console.log(aluno)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:
aluno.endereço = {
    cidade : 'Jaragua',
    rua : 'Ney Franco'
}
console.log(aluno.endereço.cidade);



// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:
aluno.habilidades = ['Fazer queijo', 'Irritar o gato']
console.log(aluno.habilidades[0])

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:
aluno.notas = [6, 7, 9]
console.log(aluno.nome, aluno.notas)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:
aluno.responsavel = {
    nome: 'Marcia',
    parentesco: 'mãe'
}
console.log(aluno.responsavel.nome)

aluno.responsavel.nome = 'Marcio'
console.log(aluno.responsavel.nome)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// d) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:
let ListaDeAlunos = [aluno]
let aluno2 = {
    nome: 'Tom',
    idade: 15,
    curso: 'jiujitsu'
}
let aluno3 = {
    nome: 'Frajola',
    idade: 16,
    habilidades: 'box'
}
ListaDeAlunos.push(aluno2)
ListaDeAlunos.push(aluno3)
console.log(ListaDeAlunos[1].nome)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.


// → Seu código aqui:
let ListaDeAlunos2 = [ 
    {
        nome: 'JR',
        idade: 15,
        notas: [7,9,6]
    },
    {
      nome: 'JP',
      idade: 14,
      notas: [4,8,7]
    },
    {
      nome: 'Joao',
      idade: 16,
      notas: [9,4,9]
    }
]

console.log(ListaDeAlunos2[0].nome, ListaDeAlunos2[0].notas,
    ListaDeAlunos2[1].nome,ListaDeAlunos2[1].notas,
    ListaDeAlunos2[2].nome, ListaDeAlunos2[2].notas)
console.log("_______________________________");
