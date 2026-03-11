let pegarinfo = require('readline-sync')

// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:
console.log('Iniciando o programa...')
console.info('Info: A atividade atual é sobre entrada de dados.')
console.warn('Aviso: Para iniciar o programa: sempre com node e o nome do arquivo.')
console.error('Error: não iniciou com node.')

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:


// const nomeusuario = pegarinfo.question('Qual o seu nome? ')
// let idadeusuario = pegarinfo.questionInt('Qual a sua idade? ')
// console.log(`Olá ${nomeusuario}, você tem ${idadeusuario} anos de idade!`)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:

// let seunome = pegarinfo.question('Qual o seu nome? ')
// let anos = pegarinfo.questionInt('Quantos anos voce tem? ')
// const cidade = pegarinfo.question('Qual a sua cidade? ')
// let ficha ={ [seunome, anos, cidade}]
// console.table(ficha)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:
// const gostademoto = pegarinfo.keyInYN('Voce gosta de moto? ')
// const gostadepraia = pegarinfo.keyInYN('Curte praia? ')
// const role = `JB ${gostademoto} moto e gosta de praia ${gostadepraia}!`
// console.log(role)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:

// const comida = pegarinfo.question('Qual a sua comida favorita? ')
// const food = pegarinfo.question('Qual a sua outra comida favorita? ')
// const lanche = pegarinfo.question('Outra comida favorita? ')
// let comidasFavoritas = [comida,food, lanche]
// console.table([comidasFavoritas])
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().



// → Seu código aqui:
// let usuario = pegarinfo.question('Qual o seu nome? ')
// let profissao = pegarinfo.question('Qual a sua profissao? ')
// const cidade = pegarinfo.question('Qual a sua cidade? ')
// let cadastropessoal = [usuario, profissao, cidade]
// let meuid = `Me chamo ${usuario}. Profissao ${profissao} e moro na cidade ${cidade}.`
// console.table(meuid)
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazee os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:

// let usuario1 = {
//     nome: pegarinfo.question('Qual o seu nome? '),
//     idade: pegarinfo.questionInt('Qual a sua idade? '),
//     endereco: {
//     cidade: pegarinfo.question('Qual a sua cidade? ' ),
//     rua: pegarinfo.question('Qual sua rua? '),
//     numero: pegarinfo.questionInt('Qual o numero da sua casa? ')
//     }
// } 

// let usuario2 = {
//     nome: pegarinfo.question('Qual o seu nome? '),
//     idade: pegarinfo.questionInt('Qual a sua idade? '),
//         endereco: {
//         cidade: pegarinfo.question('Qual a sua cidade?' ),
//         rua: pegarinfo.question('Qual sua rua? '),
//         numero: pegarinfo.questionInt('Qual o numero da sua casa? ')
//         }
// }
// let usuario3 = {
//     nome: pegarinfo.question('Qual o seu nome? '),
//     idade: pegarin+fo.questionInt('Qual a sua idade? '),
//         endereco: {
//          cidade: pegarinfo.question('Qual a sua cidade?'  ),
//         rua: pegarinfo.question('Qual sua rua? '),
//         numero: pegarinfo.questionInt('Qual o numero da sua casa? ')
//         }
// }

// listaDeUsuarios = [usuario1, usuario2, usuario3]
// console.log(usuario2.nome, usuario2.idade)
// console.log(usuario3.endereco)
// console.log(usuario3.nome, usuario3.endereco.rua)


// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome s três notade 3 alunos e suas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:

// let aluno1 = {
//     nome: pegarinfo.question('Qual o seu nome? '),
//     notas: [pegarinfo.questionInt('Quais as suas notas? '),pegarinfo.questionInt('Mais uma: ') ,pegarinfo.questionInt('Mais uma: ' )]
// }
// let aluno2 = {
//     nome: pegarinfo.question('Qual o seu nome? '),
//     notas: [pegarinfo.questionInt('Quais as suas notas? '),pegarinfo.questionInt('Mais uma: ') ,pegarinfo.questionInt('Mais uma: ' )]
// }
// let aluno3 = {
//     nome: pegarinfo.question('Qual o seu nome? '),
//     notas: [pegarinfo.questionInt('Quais as suas notas? '),pegarinfo.questionInt('Mais uma: ') ,pegarinfo.questionInt('Mais uma: ' )]
// }

// let turma = [aluno1, aluno2, aluno3]
// console.table(turma)
// console.log(aluno2.nome, aluno2.notas[0])
// console.log(aluno3.nome, aluno3.notas[1])
// console.log(aluno1.nome, aluno1.notas[2])
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:
// let nomeProduto = pegarinfo.question('Digite o nome de um produto: ')
// let categoria = pegarinfo.question('Digite a categoria desse produto: ')
// let preco = pegarinfo.questionFloat('Digite o preco desse produto: ')
// let estoque = pegarinfo.questionInt('Digite a quantidade no estoque desse produto: ')
// let disponibilidade = pegarinfo.keyInYN('Esse produto está disponível para venda? y/n ')

// let produto = {
//     produto: nomeProduto,
//     secao: categoria,
//     valor: preco,
//     deposito: estoque,
//     disponivel: disponibilidade
// }
// console.table(produto)
// let resumo = (`Produto: ${nomeProduto} | Categoria: ${categoria} | Estoque: ${estoque} un`)
// console.log(resumo)
// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.

let medicamento1 = pegarinfo.question('Digite o nome de um medicamento: ')
let medicamento2 = pegarinfo.question('Digite o nome de outro medicamento: ')
let preco1 = pegarinfo.questionFloat('Digite o preco do medicamento: ')
let preco2 = pegarinfo.questionFloat('Digite o preco do outro medicamento: ')
let estoque1 = pegarinfo.keyInYN('Esse medicamento esta em estoque? y/n ')
let estoque2 = pegarinfo.keyInYN('Esse outro medicamento esta em estoque? y/n ')
estoqueFarmacia = []
estoqueFarmacia.push(medicamento1, preco1, estoque1, medicamento2, preco2, estoque2)
console.table(estoqueFarmacia)
console.log(medicamento2[3], medicamento2[4])
console.log(medicamento1, medicamento1[2])