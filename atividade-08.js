// ============================================================
//   ATIVIDADE 08 – Estruturas de Controle (Switch / Case)
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// ============================================================

let lerTeclado = require('readline-sync')

// ------------------------------------------------------------
// EXERCÍCIO 1 – Switch simples com número
// ------------------------------------------------------------
// a) Declare "planeta" com valor 3.
// b) Usando switch/case, exiba o nome do planeta do Sistema Solar
//    correspondente ao número (1 = Mercúrio, 2 = Vênus,
//    3 = Terra, 4 = Marte, 5 = Júpiter, 6 = Saturno,
//    7 = Urano, 8 = Netuno).
// c) No default, exiba: "Planeta não encontrado."

// → Seu código aqui:
let planeta = 7

switch (planeta) {
    case 1:
        console.log('Mercúrio')
        break
    case 2:
        console.log('Vênus')
        break
    case 3:
        console.log('Terra')
        break
    case 4: 
    console.log('Marte')
        break
    case 5:
        console.log('Júpiter')
        break
    case 6:
        console.log('Saturno')
        break
    case 7:
        console.log('Urano')
        break
    case 8:
        console.log('Netuno')
        break
    default:
        console.log('Planeta inválido')

}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Switch com string
// ------------------------------------------------------------
// a) Declare "direcao" com valor "norte".
// b) Usando switch/case, exiba a mensagem correspondente:
//    - "norte"  → "Seguindo para o Norte ↑"
//    - "sul"    → "Seguindo para o Sul ↓"
//    - "leste"  → "Seguindo para o Leste →"
//    - "oeste"  → "Seguindo para o Oeste ←"
//    - default  → "Direção desconhecida."

// → Seu código aqui:
let direcao = 'Oeste' 
switch (direcao) {
    case 'Norte':
        console.log('Seguindo para o norte ↑')
        break
    case 'Sul':
        console.log('Seguindo para o sul ↓')
        break
    case 'Leste':
        console.log('Seguindo para o leste →')
        break
    case 'Oeste':
        console.log('Seguindo para o oeste ↑')
        break
    default:
        console.log('Direção inválida')
    
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Fall-through(cascata) intencional
// ------------------------------------------------------------
// a) Declare "tipoVeiculo" com valor "moto".
// b) Usando fall-through (cases sem break), classifique:
//    - "bicicleta" ou "moto" ou "carro"  → "Veículo leve"
//    - "caminhao" ou "onibus"             → "Veículo pesado"
//    - default                            → "Tipo desconhecido."
// c) Exiba a categoria com template literal.

// → Seu código aqui:

let tipoVeiculo = 'moto'

switch (tipoVeiculo) {
    case 'bicicleta':
    case 'moto':
    case 'carro':
        console.log('Veículo leve')
        categoria = 'Veículo leve'
        break
    
    case 'caminhao':
    case 'onibus':
        console.log('Veículo pesado')
        categoria = ('Veículo pesado')
        break
    
    default:
        console.log('Tipo desconhecido')
}
console.log(`O veículo é ${tipoVeiculo} e sua categoria é: ${categoria}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Switch com input (número)
// ------------------------------------------------------------
// a) Exiba o menu de turnos para o usuário:
//    1 – Manhã | 2 – Tarde | 3 – Noite
// b) Peça ao usuário que escolha um turno (questionInt()).
// c) Com switch/case, exiba a saudação correspondente:
//    - 1 → "Bom dia! Turno da manhã."
//    - 2 → "Boa tarde! Turno da tarde."
//    - 3 → "Boa noite! Turno da noite."
//    - default → "Opção inválida."

// → Seu código aqui:

console.log('1 - Manhã')
console.log('2 - Tarde')
console.log('3 - Noite')

// let turno = lerTeclado.questionInt('Escolha um turno de 1 a 3: ')

// switch (turno) {
//     case 1:
//         console.log('Bom dia! Turno da Manhã.')
//         break
//     case 2:
//         console.log('Boa tarde! Turno da tarde.')
//         break
//     case 3:
//         console.log('Boa noite! Turno da noite.')
//         break
//     default:
//         console.log('Turno indisponível.')
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Switch com input (string)
// ------------------------------------------------------------
// a) Pergunte ao usuário qual é a estação do ano favorita dele
//    (question()): "verao", "outono", "inverno" ou "primavera".
// b) Com switch/case, exiba uma descrição curta da estação:
//    - "verao"     → "Dias quentes e férias!"
//    - "outono"    → "Folhas caindo e temperaturas amenas."
//    - "inverno"   → "Frio, cobertores e chocolate quente."
//    - "primavera" → "Flores, calor e renovação."
//    - default     → "Estação não reconhecida."

// → Seu código aqui:

// let estacao = lerTeclado.question('Qual a sua estacao do ano favorita: verao, outono, inverno ou primavera ? ')

// switch (estacao) {
//     case 'verao':
//         console.log('verao     → Dias quentes e férias!')
//         break
//     case 'outono':
//         console.log('outono    → Folhas caindo e temperaturas amenas.')
//         break
//     case 'inverno':
//         console.log('inverno   → Frio, cobertores e chocolate quente.')
//         break
//     case 'primavera':
//         console.log('primavera   → Flores, calor e renovação.')
//         break
//     default:
//         console.log('Estação não reconhecida.')
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Dias da semana com fall-through
// ------------------------------------------------------------
// a) Pergunte ao usuário um número de 1 a 7 (questionInt()).
// b) Usando fall-through intencional:
//    - 1 a 5  → exiba: "Dia útil"
//    - 6 ou 7 → exiba: "Final de semana"
//    - default → "Número inválido"
// c) Exiba também o nome do dia correspondente (Segunda a Domingo). // cancela essa

// → Seu código aqui:

// let dia = lerTeclado.questionInt('Digite um numero de 1 a 7: ')

// switch (dia) {
//     case 1:
//     case 2:
//     case 3:
//     case 3:
//     case 4:
//     case 5:
//         console.log('Dia útil')
//         break
//     case 6:
//     case 7:
//         console.log('Final de semana')
//         break
    
//     default:
//         console.log('Número inválido')
// }

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Switch com objeto
// ------------------------------------------------------------
// a) Crie um objeto "produto" com as propriedades, perguntando ao usuário:
//    - nome
//    - categoria: número de 1 a 4 | 1 – Eletrônico | 2 – Vestuário | 3 – Alimento | 4 – Livro
//    - preco
// b) Com switch/case na categoria:
//    - 1 → adicione ao objeto: descricaoCategoria: "Eletrônico" e garantia: "12 meses"
//    - 2 → adicione ao objeto: descricaoCategoria: "Vestuário" e garantia: "Troca em 30 dias"
//    - 3 → adicione ao objeto: descricaoCategoria: "Alimento" e garantia: "Ver validade"
//    - 4 → adicione ao objeto: descricaoCategoria: "Livro" e garantia: "Sem garantia"
//    - default → adicione ao objeto: descricaoCategoria: "Categoria invalida" e garantia: "Sem garantia". Também exiba no console: "Categoria inválida."
// c) Exiba o objeto com console.table().

// → Seu código aqui:

// let produto = {
//     nome: lerTeclado.question('Digite o nome do produto: '),
//     categoria: lerTeclado.questionInt('numero de 1 a 4 | 1 - Eletronico | 2 - Vestuario | 3 - Alimento | 4 - Livro: '),
//     preco: lerTeclado.questionFloat('Digite o preco do produto: ')
// }

// switch (produto.categoria) {
//     case 1:
//         produto.categoria = 'Eletronico'
//         produto.garantia = 'garantia: 12 meses'
//         break

//     case 2:
//         produto.categoria = 'Vestuario e garantia'
//         produto.garantia = 'Troca em 30 dias'
//          break

//     case 3:
//         produto.categoria = 'Alimento e garantia'
//         produto.garantia = 'Ver validade'
//         break

//     case 4:
//         produto.categoria = 'Livro e garantia'
//         produto.garantia = 'Sem garantia'
//         break
    
//     default:
//         produto.categoria = 'Categoria invalida'
//         produto.garantia = 'Sem garantia'
//         console.log('Categoria Inválida.')

// }
// console.table(produto)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Conversor de nota para conceito e cor
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome
//    - Nota de 0 a 10 (questionInt()).
// b) Descubra o conceito de acordo com a nota, utilizando switch/case e adicione ao objeto o conceito e a mensagem correspondente.
//    - 10 ou 9  → conceito: "A", mensagem: "Excelente!"
//    - 8 ou 7   → conceito: "B", mensagem: "Muito bom!"
//    - 6 ou 5   → conceito: "C", mensagem: "Suficiente."
//    - 4 ou 3   → conceito: "D", mensagem: "Em recuperação."
//    - 2, 1 ou 0 → conceito: "F", mensagem: "Reprovado."
//    - default  → "Nota inválida."
// c) Exiba: "<nome> – Nota: <nota> | Conceito: <conceito> | <mensagem>"

// → Seu código aqui:

// let usuario = {
//     nome: lerTeclado.question('Digite seu nome: '),
//     nota: lerTeclado.questionInt('Digite a sua nota: ')
// }

// switch (usuario.nota) {
//     case 10:
//     case 9:
//         usuario.conceito = 'Conceito: A'
//         usuario.mensagem = 'Excelente!'
//         break

//     case 8:
//     case 7:
//         usuario.conceito = 'Conceito B'
//         usuario.mensagem = 'Muito bom!'
//         break

//     case 6:
//     case 5:
//         usuario.conceito = 'Conceito C'
//         usuario.mensagem = 'Suficiente!'
//         break

//     case 4:
//     case 3:
//         usuario.conceito = 'Conceito D'
//         usuario.mensagem = 'Em recuperacao!'
//         break

//     case 2:
//     case 1:
//         usuario.conceito = 'Conceito D'
//         usuario.mensagem = 'Reprovado!'

//     default:
//         console.log('Nota invalida')
// }

// console.log(`${usuario.nome} - Nota: ${usuario.nota} | Conceito: ${usuario.conceito} | ${usuario.mensagem}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Calculadora com switch
// ------------------------------------------------------------
// a) Pergunte ao usuário dois números (questionFloat()).
// b) Exiba o menu de operações:
//    1 – Soma | 2 – Subtração | 3 – Multiplicação | 4 – Divisão | 5 – Resto
// c) Peça ao usuário que escolha uma operação (questionInt()).
// d) Com switch/case, calcule e exiba o resultado no formato:
//    "<numeroA> <símbolo> <numeroB> = <resultado>"
//    Se a operação for 4 (divisão) e o divisor for 0, exiba:
//    "Erro: divisão por zero não é permitida."
//    No default, exiba: "Operação inválida."

// → Seu código aqui:



let numero1 = lerTeclado.questionFloat('Digite um numero: ')
let numero2 = lerTeclado.questionFloat('Digite outro numero: ')
let simbolo = ''
let resultado

console.log('===MENU DE OPERAÇÕES===')
console.log('1  -   SOMA')
console.log('2  -   SUBTRAÇÃO')
console.log('3  -   MULTIPLICAÇÃO')
console.log('4  -   DIVISÃO')
console.log('5  -   RESTO')

let operacao = lerTeclado.questionInt('Escolha uma operacao de 1 a 5: ')

switch (operacao) {
    case 1:
        simbolo = '+'
        console.log(`${numero1} ${simbolo} ${numero2} = ${numero1 + numero2}`)
        break

    case 2:
        simbolo = '-'
        console.log(`${numero1} ${simbolo} ${numero2} = ${numero1 - numero2}`)
        break

    case 3:
        simbolo = '*'
        console.log(`${numero1} ${simbolo} ${numero2} = ${numero1 + numero2}`)
        break

    case 4:
        if (numero2 === 0) {
            console.log('Erro: divisão por zero não é permitida')
            break
        }
        simbolo = '/'
        console.log(`${numero1} ${simbolo} ${numero2} = ${numero1 / numero2}`)
        break

    case 5:
        simbolo = '%'
        console.log(`${numero1} ${simbolo} ${numero2} = ${numero1 + numero2}`)
        break

    default:
        console.log('Operação inválida')

}
if (resultado != undefined) {
    console.log(`${numero1} ${simbolo} ${numero2} = ${resultado}`)
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Menu de loja completo
// ------------------------------------------------------------
// a) Crie um objeto "loja" com:
//    - nome: "TechShop"
//    - saldo: 0
// b) Exiba o menu:
//    1 – Ver produtos | 2 – Comprar | 3 – Ver carrinho | 4 – Sair
// c) Peça ao usuário uma opção (questionInt()).
// d) Com switch/case:
//    - 1 → exiba uma lista fixa de 3 produtos com preços usando console.table()
//          (ex: [{ produto: "Mouse", preco: 89.90 }, ...])
//    - 2 → pergunte qual produto e o preço (question + questionFloat),
//          adicione ao saldo e exiba: "Produto adicionado ao carrinho."
//    - 3 → exiba: "Total no carrinho: R$ <saldo>"
//    - 4 → exiba: "Obrigado por visitar a TechShop!"
//    - default → exiba: "Opção inválida."

// → Seu código aqui:

let loja = {
    nome: 'TechShop',
    saldo: 0
}

console.log('===MENU===')
console.log('1  -   VER PRODUTOS')
console.log('2  -   COMPRAR')
console.log('3  -   VER CARRINHO')
console.log('4  -   SAIR')

let opcao = lerTeclado.questionInt('Escolha umas das opcoes acima, de 1 a 4: ')


console.log("_______________________________");