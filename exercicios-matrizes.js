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

const m = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

for(let i = 0; i < m.length; i++){
  for(let j = 0; j < m[i].length; j++){
    m[i][j] *= 2
    
  }
}
console.table(m)