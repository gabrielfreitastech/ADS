
// ============================================================
//   JOGO: Adivinhe o Número
// ============================================================
//
// O jogo tem DOIS modos, ambos devem ser implementados:
//
//   MODO 1 – Computador pensa, você adivinha
//     O computador sorteia um número de 1 a 100.
//     O jogador tem até 7 tentativas para descobrir qual é.
//     A cada erro, o programa diz se o palpite foi alto ou baixo.
//
//   MODO 2 – Você pensa, computador adivinha
//     O jogador pensa em um número de 1 a 100 (não digita).
//     O computador tenta adivinhar usando busca binária:
//        sempre chuta o meio do intervalo restante.
//     O jogador responde: 1 = correto | 2 = muito alto | 3 = muito baixo
//     O computador deve acertar em no máximo 7 tentativas.
//
// Para números aleatórios, utilize a função Math.random() do Javascript
// ============================================================

let rl = require('readline-sync');

// ============================================================
// CONFIGURAÇÕES DO JOGO (não altere)
// ============================================================

const MAX_TENTATIVAS = 7;
const NUM_MIN = 1;
const NUM_MAX = 100;

// ============================================================
// MENU PRINCIPAL
// ============================================================

console.log("|==============================|");
console.log("|     ADIVINHE O NÚMERO        |");
console.log("|==============================|");
console.log("|  1 – Eu adivinho o número    |");
console.log("|  2 – Computador adivinha     |");
console.log("|  3 – Sair                    |");
console.log("|==============================|");

const modo = rl.questionInt("\nEscolha o modo: ");

console.log("_______________________________");


// ============================================================
// MODO 1 – Computador pensa, jogador adivinha
// ============================================================
//
// Instruções para implementação do Modo 1:
//
// PASSO 1 – Gere o número secreto do computador Math.random();
// PASSO 2 – Passe as instruções do jogo.
// PASSO 3 – Use um for para as tentativas.
//  - Se acertou, exiba: "Parabéns! Você acertou em <i> tentativa(s)!", e encerre o jogo.
//  - Se o palpite for maior que o secreto, exiba: "Muito alto! Tente um número menor."
//  - Se o palpite for menor que o secreto, exiba: "Muito baixo! Tente um número maior."
//  - Ao final de cada tentativa errada, exiba quantas tentativas restam.
//  - Se o jogador NÃO acertou, exiba: "Fim de jogo! O número era <secreto>."
// PASSO 4 – Exiba um resumo:
//           "Número secreto: <secreto>"
//           "Tentativas usadas: <i>"
//           "Resultado: Vitória" ou "Resultado: Derrota"

// → Seu código do MODO 1 aqui:

function getRandomInt(NUM_MIN, NUM_MAX) {
  NUM_MIN = Math.ceil(NUM_MIN);
  NUM_MAX = Math.floor(NUM_MAX);
  return Math.floor(Math.random() * (NUM_MAX - NUM_MIN) + NUM_MIN);
}

// ============================================================
// MODO 1 – Computador pensa, jogador adivinha
// ============================================================

switch (modo) {
  case 1: {
    console.log("O computador pensa em um número de 1 a 100.");
    console.log("Você deve chutar até acertar, tendo até 7 tentativas!");
    console.log("_______________________________\n");

    // PASSO 1 – Gera o número secreto
    const numeroSecreto = getRandomInt(NUM_MIN, NUM_MAX + 1);
    let acertou = false;
    let tentativaUsada = 0;

    // PASSO 3 – Loop das tentativas
    for (let i = 1; i <= MAX_TENTATIVAS; i++) {
      tentativaUsada = i;
      const palpite = rl.questionInt(`Tentativa ${i}: Qual eh seu palpite? `);

      switch (true) {
        case palpite === numeroSecreto:
          acertou = true;
          console.log(`\nParabéns! Você acertou em ${i} tentativa(s)!\n`);
          i = MAX_TENTATIVAS; // Force exit from loop
          break;
        case palpite > numeroSecreto:
          console.log("Muito alto! Tente um numero menor.");
          console.log(`Tentativas restantes: ${MAX_TENTATIVAS - i}\n`);
          break;
        default:
          console.log("Muito baixo! Tente um numero maior.");
          console.log(`Tentativas restantes: ${MAX_TENTATIVAS - i}\n`);
      }
    }

    // PASSO 4 – Resumo do jogo
    console.log("_______________________________");
    console.log(`Número secreto: ${numeroSecreto}`);
    console.log(`Tentativas usadas: ${tentativaUsada}`);
    switch (acertou) {
      case true:
        console.log("Resultado: Vitória!");
        break;
      case false:
        console.log(`Resultado: Derrota! O número era ${numeroSecreto}`);
        break;
    }
    break;
  }

  // ============================================================
  // MODO 2 – Jogador pensa, computador adivinha
  // ============================================================

  case 2: {
    console.log("\nMODO SUPER INTELIGENTE ATIVADO!");
    console.log("Pense em um número entre 1 e 100 (não precisa digitar).");
    console.log("Usarei BUSCA BINÁRIA para descobrir com certeza!");
    console.log("Responda com:");
    console.log("  1 – Se acertei");
    console.log("  2 – Se meu palpite foi muito alto");
    console.log("  3 – Se meu palpite foi muito baixo");
    console.log("_______________________________\n");

    // PASSO 2 – Inicializa o intervalo de busca (busca binária)
    let min = NUM_MIN;
    let max = NUM_MAX;
    let acertou = false;
    let palpite = 0;
    let tentativasUsadas = 0;

    // PASSO 3 – Loop das tentativas com busca binária inteligente
    for (let i = 1; i <= MAX_TENTATIVAS; i++) {
      tentativasUsadas = i;
      
      // PASSO 3a – Calcula o palpite (meio do intervalo) - BUSCA BINÁRIA
      palpite = Math.floor((min + max) / 2);

      // PASSO 3b – Exibe o palpite com análise
      console.log(`Tentativa ${i}: Meu palpite é ${palpite}!`);
      console.log(`   (Procurando entre ${min} e ${max})`);

      // PASSO 3c – Pergunta o resultado
      const resposta = rl.questionInt("Resultado (1=acertei, 2=muito alto, 3=muito baixo): ");

      switch (resposta) {
        case 1:
          // ACERTOU!
          acertou = true;
          console.log(`\nACERTEI! O número que você estava pensando era ${palpite}!`);
          console.log(`Levei apenas ${i} tentativa(s) para descobrir!`);
          console.log(`A busca binária é IMPARÁVEL!\n`);
          i = MAX_TENTATIVAS; // Force exit from loop
          break;
        case 2:
          // Muito alto, reduz o máximo
          console.log(`   Entendi! ${palpite} é muito alto.`);
          max = palpite - 1;
          console.log(`   Novo intervalo: [${min}, ${max}] - Possíveis números: ${max - min + 1}\n`);
          
          // Validação: se min > max, o jogador está mentindo
          if (min > max) {
            console.log("DETECÇÃO: Você mentiu em alguma resposta anterior!");
            console.log("   Com minha lógica inteligente, descobri que isso é impossível!");
            i = MAX_TENTATIVAS; // Force exit from loop
          }
          break;
        case 3:
          // Muito baixo, aumenta o mínimo
          console.log(`   Entendi! ${palpite} é muito baixo.`);
          min = palpite + 1;
          console.log(`   Novo intervalo: [${min}, ${max}] - Possíveis números: ${max - min + 1}\n`);
          
          // Validação: se min > max, o jogador está mentindo
          if (min > max) {
            console.log("DETECÇÃO: Você mentiu em alguma resposta anterior!");
            console.log("   Com minha lógica inteligente, descobri que isso é impossível!");
            i = MAX_TENTATIVAS; // Force exit from loop
          }
          break;
        default:
          console.log("Resposta inválida! Digite 1, 2 ou 3.\n");
          i--; // Não conta como tentativa se a entrada for inválida
      }
    }

    // PASSO 4 e 5 – Resultado final
    console.log("_______________________________");
    switch (acertou) {
      case true:
        console.log("Resultado: VITÓRIA DO COMPUTADOR!");
        break;
      case false:
        console.log("Resultado: O computador não conseguiu adivinhar em 7 tentativas!");
        break;
    }
    break;
  }

  // ============================================================
  // MODO 3 – Sair
  // ============================================================

  case 3:
    console.log("Até logo! Obrigado por jogar!");
    break;

  default:
    console.log("Escolha um modo válido (1, 2 ou 3)!");
}
