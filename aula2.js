// ============================================================
//   ATIVIDADE 02 – Arrays (Listas) em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie uma array chamada "cores" com pelo menos 4 cores.
// b) Exiba a primeira e a última cor usando índices.

// → Seu código aqui:
let cores1 = ['azul', 'branco','preto', 'pink']
console.log(cores1[0], cores1[3])

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Métodos básicos
// ------------------------------------------------------------
// a) Adicione uma nova cor ao final de "cores", utilizando as funções de array.
// b) Remova a primeira cor, utilizando as funções de array.
// c) Exiba o array resultante e depois a quantidade de itens armazendos (length).

// → Seu código aqui:

let cores2 =['branco', 'preto', 'rosa', 'amarelo']
cores2.push('verde')
cores2.shift();
console.log(cores2);
console.log(`Quantidade de itens na lista cores é de: ${cores2.length}`)
console.log('_______________________________________')




// ------------------------------------------------------------
// EXERCÍCIO 3 – Números
// ------------------------------------------------------------
// a) Crie um array de números.
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de números armazenados (quantidade de itens, não a soma)

// → Seu código aqui:
let numeros = [7,1,2,5,4]
console.log(`${numeros}, na lista tem ${numeros.length} numeros ao total`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Todos os tipos
// ------------------------------------------------------------
// a) Crie um array com todos os tipos de dados que você conhece (number, string...).
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de itens armazenados

// → Seu código aqui:

let dados = ['str', 22, true, undefined, null, 3.14]
console.log(`Na lista ${dados} tem no total ${dados.length} de itens armazenados`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Mudando a lista
// ------------------------------------------------------------
// a) Crie um array com vários dados de vários tipos diferentes.
// b) Exiba a lista.
// c) Remova o primeiro e o último item da lista, utilizando as funções de array.
// d) Exiba a lista novamente.
// e) Adicione um novo item no final e ou no início da lista.
// f) Exiba a lista final.

// → Seu código aqui:
let muitosdados = ['Freitas', 'JS', 3, 2, undefined, undefined, null, null, 1.0, 1.1 ]
console.log(muitosdados)
muitosdados.pop()
muitosdados.shift()
console.log(muitosdados)
muitosdados.push(55)
muitosdados.unshift('Fritas')
console.log(muitosdados)

console.log("_______________________________");