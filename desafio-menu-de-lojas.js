// ============================================================
// Loja de Itens – Menu Persistente
// ============================================================
//
// INSTRUÇÕES e REGRAS:
// Uma loja vende itens de um catálogo.
// O menu principal repete até o usuário escolher "Sair".
// O usuário começa com nenhum item e 200 reais.
// O usuário deve poder:
//   Visualizar o catálogo
//   Comprar itens do catálogo
//   Vender itens do inventário
//   Visualizar seus itens
// O valor de revenda de itens deve ser 70% do preço original, arredondado.
// Após o usuário escolher "Sair", exiba um resumo do cliente: nome, dinheiro restante e itens no inventário.
//
// ============================================================

let rl = require('readline-sync');

// ============================================================
// CATÁLOGO DA LOJA - Altere a vontade, mantendo a estrutura { id, nome, preco, estoque }
// ============================================================

const catalogo = [
  { id: 1, nome: "Espada de Ferro",   preco: 80, estoque: 2  },
  { id: 2, nome: "Escudo de Madeira", preco: 50, estoque: 5  },
  { id: 3, nome: "Poção de Cura",     preco: 30, estoque: 10 },
  { id: 4, nome: "Arco Longo",        preco: 65, estoque: 3  },
  { id: 5, nome: "Botas Velozes",     preco: 45, estoque: 4  },
  { id: 6, nome: "Batata",            preco: 15, estoque: 20 },
  { id: 7, nome: "Cajado Mágico",     preco: 95, estoque: 1  },
  { id: 8, nome: "Armadura de Couro", preco: 85, estoque: 2  }
];

// ============================================================
// ESTADO DO CLIENTE - não altere a estrutura
// ============================================================

const Cliente = {
  nome: "", // deve ser preenchido pelo usuário
  moedas: 150,
  inventario: []
};

// ============================================================
// INÍCIO
// ============================================================

console.log("╔════════════════════════════╗");
console.log("║        LOJA LOJINHA        ║");
console.log("╚════════════════════════════╝\n");

// ============================================================
// OBTER NOME DO CLIENTE
// ============================================================

do {
  Cliente.nome = rl.question('📝 Qual é o seu nome? ').trim();
  
  if (Cliente.nome.length === 0) {
    console.log('❌ Nome não pode ser vazio!');
  }
} while (Cliente.nome.length === 0);

console.log(`\n✅ Bem-vindo(a), ${Cliente.nome}!\n`);

// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function exibirCatalogo() {
  console.log('\n┌──────────────────────────────────────────────┐');
  console.log('│         📦 CATÁLOGO DA LOJA 📦              │');
  console.log('├──────────────────────────────────────────────┤');
  
  catalogo.forEach(item => {
    console.log(`│ ID: ${item.id} | ${item.nome.padEnd(20)} | R$ ${item.preco.toString().padStart(3)} | Est: ${item.estoque}`);
  });
  
  console.log('└──────────────────────────────────────────────┘');
}

function exibirInventario() {
  console.log('\n┌──────────────────────────────────────────────┐');
  console.log('│       🎒 INVENTÁRIO DO CLIENTE 🎒           │');
  console.log('├──────────────────────────────────────────────┤');
  
  if (Cliente.inventario.length === 0) {
    console.log('│ Seu inventário está vazio!                   │');
  } else {
    Cliente.inventario.forEach((item, index) => {
      let precoRevenda = Math.round(item.preco * 0.7);
      console.log(`│ ${(index + 1).toString().padEnd(2)} | ${item.nome.padEnd(20)} | R$ ${item.preco.toString().padStart(3)} (Revenda: R$ ${precoRevenda}) │`);
    });
  }
  
  console.log('└──────────────────────────────────────────────┘');
}

function comprarItem() {
  exibirCatalogo();
  
  let idValido = false;
  let id = 0;
  
  do {
    id = rl.questionInt('\n🛒 Qual é o ID do item que deseja comprar? ');
    const item = catalogo.find(x => x.id === id);
    
    if (!item) {
      console.log('❌ ID inválido!');
    } else if (item.estoque === 0) {
      console.log(`❌ "${item.nome}" está fora de estoque!`);
    } else {
      idValido = true;
    }
  } while (!idValido);
  
  const item = catalogo.find(x => x.id === id);
  
  if (Cliente.moedas < item.preco) {
    console.log(`❌ Você não tem dinheiro suficiente! Você tem R$ ${Cliente.moedas}, mas o item custa R$ ${item.preco}.`);
    return;
  }
  
  Cliente.moedas -= item.preco;
  Cliente.inventario.push({ ...item });
  item.estoque--;
  
  console.log(`✅ Compra realizada! "${item.nome}" foi adicionado ao seu inventário.`);
  console.log(`💰 Saldo restante: R$ ${Cliente.moedas}`);
}

function venderItem() {
  exibirInventario();
  
  if (Cliente.inventario.length === 0) {
    console.log('❌ Você não tem itens para vender!');
    return;
  }
  
  let indiceValido = false;
  let indice = 0;
  
  do {
    indice = rl.questionInt('\n🏪 Qual é o número do item que deseja vender? ');
    
    if (indice < 1 || indice > Cliente.inventario.length) {
      console.log('❌ Número inválido!');
    } else {
      indiceValido = true;
    }
  } while (!indiceValido);
  
  const item = Cliente.inventario[indice - 1];
  const precoRevenda = Math.round(item.preco * 0.7);
  
  Cliente.moedas += precoRevenda;
  Cliente.inventario.splice(indice - 1, 1);
  
  // Restaurar estoque na loja
  const itemCatalogo = catalogo.find(x => x.id === item.id);
  if (itemCatalogo) {
    itemCatalogo.estoque++;
  }
  
  console.log(`✅ Item vendido! "${item.nome}" foi removido do inventário.`);
  console.log(`💰 Você recebeu R$ ${precoRevenda}. Saldo atual: R$ ${Cliente.moedas}`);
}

function exibirStatusCliente() {
  console.log('\n┌──────────────────────────────────────────────┐');
  console.log('│          💼 STATUS DO CLIENTE 💼            │');
  console.log('├──────────────────────────────────────────────┤');
  console.log(`│ Nome: ${Cliente.nome.padEnd(37)}│`);
  console.log(`│ Saldo: R$ ${Cliente.moedas.toString().padEnd(34)}│`);
  console.log(`│ Itens no Inventário: ${Cliente.inventario.length.toString().padEnd(22)}│`);
  console.log('└──────────────────────────────────────────────┘');
}

// ============================================================
// MENU PRINCIPAL
// ============================================================

let sair = false;

do {
  exibirStatusCliente();
  
  console.log('\n╔════════════════════════════╗');
  console.log('║      MENU PRINCIPAL        ║');
  console.log('╠════════════════════════════╣');
  console.log('║ 1 - Ver Catálogo          ║');
  console.log('║ 2 - Comprar Item          ║');
  console.log('║ 3 - Vender Item           ║');
  console.log('║ 4 - Ver Inventário        ║');
  console.log('║ 5 - Sair                  ║');
  console.log('╚════════════════════════════╝');
  
  let opcao = 0;
  let opcaoValida = false;
  
  do {
    opcao = rl.questionInt('\n📌 Escolha uma opção (1-5): ');
    
    if (opcao >= 1 && opcao <= 5) {
      opcaoValida = true;
    } else {
      console.log('❌ Opção inválida! Digite um número de 1 a 5.');
    }
  } while (!opcaoValida);
  
  console.log('');
  
  switch (opcao) {
    case 1:
      exibirCatalogo();
      break;
      
    case 2:
      comprarItem();
      break;
      
    case 3:
      venderItem();
      break;
      
    case 4:
      exibirInventario();
      break;
      
    case 5:
      sair = true;
      break;
  }
  
  if (!sair) {
    rl.question('\n[Pressione Enter para continuar...]');
  }
  
} while (!sair);

// ============================================================
// RESUMO FINAL
// ============================================================

console.log('\n╔════════════════════════════════════════════════╗');
console.log('║          👋 RESUMO FINAL - ATÉ LOGO! 👋       ║');
console.log('╠════════════════════════════════════════════════╣');
console.log(`║ Cliente: ${Cliente.nome.padEnd(40)}║`);
console.log(`║ Dinheiro Final: R$ ${Cliente.moedas.toString().padEnd(29)}║`);
console.log(`║ Total de Itens: ${Cliente.inventario.length.toString().padEnd(32)}║`);

if (Cliente.inventario.length > 0) {
  console.log('║                                                ║');
  console.log('║ Itens no Inventário:                           ║');
  
  Cliente.inventario.forEach((item, index) => {
    console.log(`║  ${(index + 1).toString().padEnd(2)} | ${item.nome.padEnd(37)}║`);
  });
}

console.log('╚════════════════════════════════════════════════╝\n');
console.log('✅ Obrigado por usar a Loja Lojinha!');
