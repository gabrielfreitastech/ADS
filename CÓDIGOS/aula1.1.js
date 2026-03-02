
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:
nome = 'Gabriel'
idade = 21
hobby = 'Andar de moto'
template1 = `Boa noite, meu nome é ${nome}, tenho ${idade} anos e meu hobby favorito é ${hobby}.`
console.log(template1);

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:
cidade = 'Jaraguá do Sul'
temperatura = 26
template2 = (`Hoje em ${cidade} está fazendo ${temperatura}°C, perfeito para jogar FIFA.`)
console.log(template2);

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui: = 'Predio'
string = 'Predio'
number = 10
boolean = true
indefinido = undefined
vizinho = null
template3 = `O valor do string é ${string} e seu tipo é ${typeof string}.`
template4 = `O valor de number é ${number} e seu  tipo é ${typeof number}.`
template5 = `O valor de boolean é ${boolean} e seu tipo é ${typeof boolean}.`
template6 = `O valor de indefenido é ${indefinido} e seu tipo é ${typeof indefinido}.`
console.log(template3);
console.log(template4);
console.log(template5);
console.log(template6);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:
personagem = 'Batman'
idade = 40
city = 'Gotham City'
missao = 'Defender Gotham dos perigos noturnos'
template7 = `O anti-herói ${personagem} tem seus ${idade} anos, vive em ${city} e sua missao é ${missao}.`
console.log(template7);

// ------------------------------------------------------------
// EXERCÍCIO 5 – Desafio: Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:
name = 'Gabriel'
objetivo = 'Aprender JavaScript'
template8 = `Boa Noite ${name}! Este ano seu objetivo é ${objetivo}. Mantenha o foco e a determinação para alcançar os seus objetivos!`
console.log(template8);
console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:

console.log('===================================')
console.log('         SISTEMA DE USUARIO      ')
console.log('===================================')
console.log('1 - Ver Perfil')
console.log('2 - Editar Perfil')
console.log('3 - Configurações')
console.log('4 - Notificações')
console.log('5 - Relatórios')
console.log('6 - Ajuda')
console.log('7 - Sobre o Sistema')
console.log('8 - Sair')
console.log('===================================')
console.log('Digite o número da opção desejada')
console.log('===================================')

