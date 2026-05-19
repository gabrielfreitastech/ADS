// ============================================================
//   ATIVIDADE 13 – Estruturas de Dados: Matriz
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo uma matriz
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [10, 20, 30],
//      [40, 50, 60],
//      [70, 80, 90],
//    ];
// // b) Exiba: número de linhas e número de colunas.
// // c) Exiba o elemento central (m[1][1]).
// // d) Exiba o canto inferior direito (use .length).

// // → Seu código aqui:
// let linha = 0
// let coluna = 0

// for(let i = 0; i < m.length; i++){
//   linha++
//   coluna++
  
//   for(let j = 0; j < m[0].length; j++){
//   }
// }
// console.log(`${linha} linha(s) e ${coluna} coluna(s) na matriz`)
// console.log(m[1][1])

// let ultimoValor = m[m.length - 1][m[0].length -1]

// console.log(`Ultimo valor: ${ultimoValor}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Percorrendo com for aninhado
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [1, 2, 3, 4],
//      [5, 6, 7, 8],
//      [9, 10, 11, 12],
//    ];
// // b) Usando dois for aninhados, exiba cada elemento no formato:
// //    "m[i][j] = <valor>"
// // c) Calcule e exiba a SOMA de todos os elementos da matriz.

// // → Seu código aqui:

// let soma = 0
// for(let i = 0; i < m.length; i++){
//   for(let j = 0; j < m[i].length; j++){
//     soma += m[i][j]

//     console.log(`m[${i}][${j}] = ${soma}`)
//   }
// }
// console.log(`Soma de todos os elementos: ${soma}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor valor
// ------------------------------------------------------------
// a) Utilizando a matriz:
  //  const m = [
  //    [12,  7, 25],
  //    [ 3, 18,  9],
  //    [31, 14, 22],
  //  ];
// b) Usando for aninhado, encontre o MAIOR e o MENOR valor da matriz.
// c) Exiba também a posição (linha, coluna) onde cada um está.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Soma das linhas e das colunas
// ------------------------------------------------------------
// a) Use a mesma matriz do Exercício 3.
// b) Exiba a soma de cada LINHA: "Linha <i>: <soma>"
// c) Exiba a soma de cada COLUNA: "Coluna <j>: <soma>"
// d) Exiba a soma da DIAGONAL principal (m[i][i]).

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Preenchendo uma matriz dinamicamente
// ------------------------------------------------------------
// a) Pergunte ao usuário quantas linhas e quantas colunas terá a matriz.
// b) Usando dois for aninhados, peça cada valor:
//    "Digite m[<i>][<j>]: "
// c) Exiba a matriz final com console.table().

// → Seu código aqui:


console.log("_______________________________");