const num1 = 121
const num2 = 123
const num3 = 11211

// Array(lista) com os números
let numeros = [num1, num2, num3]

// Laço FOR
// i começa em 0
// continua enquanto i for menor que o tamanho do array
// i++ adiciona +1 a cada repetição
for(let i = 0; i < numeros.length; i++) {

    // Pega o número atual e transforma em texto
    let texto = String(numeros[i])

    // split('') separa caractere por caractere
    // reverse() inverte
    // join('') junta tudo novamente
    let invertido = texto.split('').reverse().join('')

    // Compara o texto original com o invertido
    // Se forem iguais = true
    // Se forem diferentes = false
    console.log(`${numeros[i]} é palíndromo: ${texto === invertido}`)
}