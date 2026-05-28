const rl = require("readline-sync")

//Exercício 1 — Soma total da matriz

//Soma de todos os valores
// const m = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// let soma = 0

// for(let i = 0; i < m.length; i++){
//     for(let j = 0; j < m[i].length; j++){
//         soma += m[i][j]
//     }
// }
// console.log(`Soma total: ${soma}`)

//Exercício 2 — Contar números pares

//Verificação de quantos numeros pares possui
// const m = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// let par = 0

// for(let i = 0; i < m.length; i++){
//   for(let j = 0; j < m[i].length; j++){

//     if(m[i][j] % 2 === 0){
//       console.log(`
//         Numeros pares da matriz:
//         m[${i}][${j}] = ${m[i][j]}`)
//         par++
//     }
//   }
// }
// console.log(`\nTotal de numeros pares: ${par}`)

//Exercício 3 — Multiplicar todos os valores por 2

// const m = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// for(let i = 0; i < m.length; i++){
//   for(let j = 0; j < m[i].length; j++){
//     m[i][j] *= 2
    
//   }
// }
// console.table(m)

//Exercício 4 — Encontrar a posição de um número

const m = [
  [12, 7, 25],
  [3, 18, 9],
  [31, 14, 22]
]

console.table(m)
let procurado = rl.questionInt('Digite um numero para encontrar a posicao: ')
let achou = false

for(let i = 0; i < m.length; i++){
  for(let j = 0; j < m[i].length; j++){
    if(m[i][j] === procurado){
      console.log(`Numero encontrado: m[${i}][${j}] = ${procurado}`)
      achou = true
      break
    }
  }
  if(achou){
    break
  }
} if(!achou){
  console.log('Number not found!')
}