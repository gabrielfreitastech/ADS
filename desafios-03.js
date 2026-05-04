let rl = require('readline-sync');
// ============================================================
//   DESAFIOS (para quem já terminou a atividade 03) – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Cadastro completo
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados:
//    nome, idade, profissão, cidade, se gosta de JavaScript, lista de comida favoritos e lista de pessoa(s) com que mora (nome e idade).
//    pense em qual tipo de dado cada resposta representa para armazena-los corretamente.
// b) Crie um objeto "cadastro" com todas essas propriedades.
// c) Exiba o objeto com console.table().
// d) Exiba também uma mensagem usando template literal com todos os dados, ex:
//    "Nome: <nome>. Idade: <idade> anos. Profissão: <profissão> em <cidade>. Gosta de JS: <sim/não> ...."

// → Seu código aqui:
// let cadastro = {
//     nome: rl.question('Qual o seu nome? '),
//     idade: rl.questionInt('Qual a sua idade? '),
//     profissao: rl.question('Qual a sua profissao? '),
//     cidade: rl.question('Qual a sua cidade? '),
//     gostaJS: rl.keyInYN('Você gosta de JavaScript? y/n '),
//     comidasFavoritas: rl.question('Quais as suas comidas favoritas?(separe por virgulas) '),
//     pessoasComQuemMora: {
//         pessoa1: rl.question('Digite o nome de uma pessoa com quem com voce mora: '),
//         idadePessoa1: rl.questionInt('Digite a idade dessa pessoa' )
//     }
    
// }
// console.log(cadastro);
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Dois amigos
// ------------------------------------------------------------
// a) Peça os dados de 2 pessoas diferentes (nome, idade e cidade de cada uma).
// b) Crie um objeto para cada pessoa com essas propriedades.
// c) Crie uma array chamada "amigos" contendo os dois objetos.
// d) Exiba a array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:

// let pessoa1 = {
//     nome: rl.question('Qual o nome do primeiro amigo? '),
//     idade: rl.questionInt('Qual a idade do primeiro amigo? '),
//     cidade: rl.question('Qual a cidade do primeiro amigo? ')
// }

// let pessoa2 = {
//     nome: rl.question('Qual o nome do segundo amigo? '),
//     idade: rl.questionInt('Qual a idade do segundo amigo? '),
//     cidade: rl.question('Qual a cidade do segundo amigo? ')
// }
// let amigos = [pessoa1, pessoa2];
// console.table(amigos);
// console.log(`O nome do segundo amigo é ${amigos[1].nome} e ele tem ${amigos[1].idade} anos.`);
// console.log(`O nome do primeiro amigo é ${amigos[0].nome} e ele mora na cidade de ${amigos[0].cidade}.`);


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Pedido de restaurante
// ------------------------------------------------------------
// a) Informe ao usuário (com console.info) que ele vai montar um pedido.
// b) Exiba um menu (quanto mais estilizado melhor!) com as opções de entrada, prato principal, sobremesa e bebidas.
// b) Peça ao usuário que escolha:
//    - Uma entrada
//    - Um prato principal
//    - Uma sobremesa
//    - Duas bebidas (uma de cada vez)
// c) Crie um objeto "pedido" com as propriedades: entrada, pratoPrincipal, sobremesa e listaBebidas.
// d) Exiba o pedido com console.table().
// e) Exiba também no console a mensagem:
//    "Seu pedido: Entrada: <entrada>, Prato Principal: <pratoPrincipal>, Sobremesa: <sobremesa>, Bebida 1: <bebida1>, Bebida 2: <bebida2>. Bom apetite!"

// → Seu código aqui:

// console.info('Vamos montar o seu pedido!');
// console.log('Menu:');
// console.log('Entrada: Salada, Sopa, Bruschetta');
// console.log('Prato Principal: Lasanha, Risoto, Strogonoff');
// console.log('Sobremesa: Sorvete, Pudim, Mousse');
// console.log('Bebidas: Refrigerante, Suco, Água');
// let pedido = {
//     entrada: rl.question('Escolha uma entrada: '),
//     pratoPrincipal: rl.question('Escolha um prato principal: '),
//     sobremesa: rl.question('Escolha uma sobremesa: '),
//     listaBebidas: [rl.question('Escolha a primeira bebida: '), rl.question('Escolha a segunda bebida: ')]
// }
// console.table(pedido);
// console.log(`Seu pedido: Entrada: ${pedido.entrada}, Prato Principal: ${pedido.pratoPrincipal}, Sobremesa: ${pedido.sobremesa}, Bebida 1: ${pedido.listaBebidas[0]}, Bebida 2: ${pedido.listaBebidas[1]}. Bom apetite!`);


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Perfil de jogador
// ------------------------------------------------------------
// a) Peça ao usuário: apelido, jogo favorito e horas totais jogadas (aproximadas)
// b) Pergunte se ele joga em time (sim/não).
// c) Crie um objeto "perfil" com todas as propriedades:
//    apelido, jogoFavorito, horasTotaisJogadas, jogaEmTime.
// d) Exiba o perfil com console.table().
// e) Use console.warn() para exibir: "Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade."

// → Seu código aqui:

// let perfil = {
//     apelido: rl.question('Qual o seu apelido? '),
//     jogoFavorito: rl.question('Qual o seu jogo favorito? '),
//     horasTotaisJogadas: rl.questionInt('Quantas horas totais você já jogou? '),
//     jogaEmTime: rl.keyInYN('Você joga em time? y/n ')
// }
// console.table(perfil);
// console.warn('Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade.');


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 5 – Comparador de dados
// ------------------------------------------------------------
// a) Peça o nome e a cidade favorita de 3 pessoas diferentes.
// b) Crie um objeto para cada pessoa com as propriedades: nome e cidadeFavorita.
// c) Exiba um dos objetos com console.table().
// d) Crie uma array "viajantes" com os 3 objetos.
// e) Exiba a array com console.table().
// f) Exiba com console.info() quantos viajantes estão na lista (use .length).
// g) Exiba com console.log() a cidade favorita do 2º viajante.
// h) Exiba com console.log() o nome do 1º viajante.

// → Seu código aqui:

// let pessoa1 = {
//     nome: rl.question('Qual o nome do primeiro viajante? '),
//     cidadeFavorita: rl.question('Qual a cidade favorita do primeiro viajante? ')
// }

// let pessoa2 = {
//     nome: rl.question('Qual o nome do segundo viajante? '),
//     cidadeFavorita: rl.question('Qual a cidade favorita do segundo viajante? ')
// }

// let pessoa3 = {
//     nome: rl.question('Qual o nome do terceiro viajante? '),
//     cidadeFavorita: rl.question('Qual a cidade favorita do terceiro viajante? ')
// }

// let viajantes = [pessoa1, pessoa2, pessoa3];
// console.table(pessoa1);
// console.table(viajantes);
// console.info(`Há ${viajantes.length} viajantes na lista.`);
// console.log(`A cidade favorita do segundo viajante é ${viajantes[1].cidadeFavorita}.`);
// console.log(`O nome do primeiro viajante é ${viajantes[0].nome}.`);

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 6 – Cardápio de Restaurante
// ------------------------------------------------------------
//
// Monte a estrutura de dados de um restaurante.
// Todos os dados do passo A devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A:
//   • Crie um objeto "restaurante" com:
//       - nome (string)
//       - tipoCozinha (string)   ex: "Italiana", "Japonesa"
//       - nota (number)          ex: 8.7
//       - aberto (boolean)
//       - endereco → objeto com: rua, numero, bairro, cidade
//       - cardapio → array com pelo menos 4 objetos de pratos, cada um com:
//           • nomePrato (string)
//           • preco     (number)
//           • vegano    (boolean)
//
// PASSO B: Acessos e exibições
//   • Exiba o nome do restaurante e sua nota.
//   • Exiba o endereço completo em uma única frase (rua, numero, bairro, cidade). ex. "O restaurante <nome> está localizado na <rua>, <numero>, <bairro>, <cidade>".
//   • Exiba o nome e o preço do 1º prato do cardápio.
//   • Exiba se o 3º prato é vegano ou não, usando template literal. ex. "O prato <nomePrato> é vegano: <vegano>".
//
// PASSO C: Alterações
//   • Altere o preço do 2º prato para um valor diferente.
//   • Adicione um novo prato ao cardápio usando push().
//   • Altere "aberto" para false.
//
// PASSO D: Relatório do cardápio
//   • Usando console.log() e template literals, exiba:
//       - Nome do restaurante, tipo de cozinha e nota
//       - Status: aberto ou fechado
//       - Quantos pratos há no cardápio (.length)
//       - Nome, preço e se é vegano de CADA prato (um prato por linha)
//
// → Seu código aqui:

// let restaurante = {
//     nome: rl.question('Qual o nome do restaurante? '),
//     tipoCozinha: rl.question('Qual o tipo de cozinha? '),
//     nota: rl.questionFloat('Qual a nota do restaurante? '),
//     aberto: rl.keyInYN('O restaurante está aberto? y/n '),
//     endereco: {
//         rua: rl.question('Qual a rua do restaurante? '),
//         numero: rl.questionInt('Qual o número do restaurante? '),
//         bairro: rl.question('Qual o bairro do restaurante? '),
//         cidade: rl.question('Qual a cidade do restaurante? ')
//     },
//     cardapio: [
//         {
//             nomePrato: rl.question('Digite o nome do primeiro prato: '),
//             preco: rl.questionFloat('Digite o preço do primeiro prato: '),
//             vegano: rl.keyInYN('O primeiro prato é vegano? y/n ')
//         },
//         {
//             nomePrato: rl.question('Digite o nome do segundo prato: '), 
//             preco: rl.questionFloat('Digite o preço do segundo prato: '),
//             vegano: rl.keyInYN('O segundo prato é vegano? y/n ')
//         },
//         {
//             nomePrato: rl.question('Digite o nome do terceiro prato: '), 
//             preco: rl.questionFloat('Digite o preço do terceiro prato: '),
//             vegano: rl.keyInYN('O terceiro prato é vegano? y/n ')
//         },
//         {
//             nomePrato: rl.question('Digite o nome do quarto prato: '), 
//             preco: rl.questionFloat('Digite o preço do quarto prato: '),
//             vegano: rl.keyInYN('O quarto prato é vegano? y/n ')
//         }
//     ]
// }
// console.table(restaurante);
// console.log(`O restaurante ${restaurante.nome} tem nota ${restaurante.nota}.`);
// console.log(`O restaurante ${restaurante.nome} está localizado na ${restaurante.endereco.rua}, ${restaurante.endereco.numero}, ${restaurante.endereco.bairro}, ${restaurante.endereco.cidade}.`);
// console.log(`O nome do primeiro prato é ${restaurante.cardapio[0].nomePrato} e ele custa R$${restaurante.cardapio[0].preco}.`);
// console.log(`O prato ${restaurante.cardapio[2].nomePrato} é vegano: ${restaurante.cardapio[2].vegano}.`);
// restaurante.cardapio[1].preco = rl.questionFloat('Digite o novo preço do segundo prato: ');
// restaurante.cardapio.push({
//     nomePrato: rl.question('Digite o nome do novo prato: '),
//     preco: rl.questionFloat('Digite o preço do novo prato: '),
//     vegano: rl.keyInYN('O novo prato é vegano? y/n ')
// });
// restaurante.aberto = false;
// console.log(`Restaurante: ${restaurante.nome}, Tipo de cozinha: ${restaurante.tipoCozinha}, Nota: ${restaurante.nota}`);
// console.log(`Status: ${restaurante.aberto ? 'Aberto' : 'Fechado'}`);
// console.log(`O cardápio tem ${restaurante.cardapio.length} pratos.`);
// restaurante.cardapio.forEach((prato, index) => {
//     console.log(`Prato ${index + 1}: Nome: ${prato.nomePrato}, Preço: R$${prato.preco}, Vegano: ${prato.vegano}`);
// });

console.log("_______________________________");