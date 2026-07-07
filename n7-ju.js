//VERSAO 3 - COM READLINE, VERIFICACOES E LOOPING

let rl = require('readline-sync');  // Importa o módulo readline-sync para entrada de dados no terminal

// Lista de tarefas (array de objetos) - C4/C10 - PASSO 1
let tarefas = [];

// Função para mostrar o menu
function mostrarMenu() { //Loop do menu principal
    let opcao = 0;
    while (opcao !== 7) {    // Loop para manter o menu ativo até que o usuário escolha encerrar
        console.log("\n=== MENU ===");
        console.log("1 - Adicionar tarefa");
        console.log("2 - Visualizar lista");
        console.log("3 - Visualizar tarefa");
        console.log("4 - Editar tarefa");
        console.log("5 - Excluir tarefa");
        console.log("6 - Filtrar tarefa");
        console.log("7 - Encerrar programa");

        opcao = rl.questionInt("Escolha uma opcao do menu: ");  // Solicita ao usuário que escolha uma opção do menu e armazena a escolha na variável 'opcao'

        switch (opcao) {     // Switch case para tratar a opção escolhida pelo usuário
            case 1: adicionarTarefa(); break;
            case 2: visualizarLista(); break;
            case 3: visualizarItemTarefa(); break;
            case 4: editarTarefa(); break;
            case 5: excluirTarefa(); break;
            case 6: filtrarTarefas(); break;
            case 7: console.log("Encerrando o programa..."); break;
            default: console.log("Opcao invalida, tente novamente...");
        }
    }
}

// Função para adicionar tarefa - C1/C3/C7/C8 - PASSO 2
function adicionarTarefa() {
    let titulo;  // Variável para armazenar o título da tarefa
    let descricao;  // Variável para armazenar a descrição da tarefa

    // Validação do título
    while (true) {  // Loop para garantir que o título seja válido
        titulo = rl.question("Informe o Titulo da tarefa: ").trim(); // Remove espaços em branco no início e no final da string

        if (titulo === "") {  // Verifica se o título está vazio
            console.log("Erro... O titulo nao pode estar vazio.");
        } else if (!/^[A-Za-zÀ-ÿ0-9\s./()]+$/.test(titulo)) {   // Verifica se o título contém apenas letras, números e espaços
            console.log("Erro... O campo contem caracteres invalidos.");
        } else if (titulo.length < 2) {   // Verifica se o título tem pelo menos 2 caracteres
            console.log("Erro... O titulo deve ter pelo menos 2 caracteres.");
        } else if (tarefas.some(tarefa => tarefa.titulo.toLowerCase() === titulo.toLowerCase())) {  // Verifica se o título já existe na lista de tarefas
            console.log("Erro... O titulo ja existe na lista de tarefas.");
        } else {   // Se o título for válido, sai do loop
            break;
        }
    }

    // Validação da descrição
    while (true) {  // Loop para garantir que a descrição seja válida
        descricao = rl.question("Informe a Descricao da tarefa: ").trim(); // Remove espaços em branco no início e no final da string

        if (descricao === "") {  // Verifica se a descrição está vazia
            console.log("Erro... A descricao nao pode estar vazia.");
        } else if (!/^[A-Za-zÀ-ÿ0-9\s./()]+$/.test(descricao)) {   // Verifica se a descrição contém apenas letras, números e espaços
            console.log("Erro... O campo contem caracteres invalidos.");
        } else if (descricao.length < 2) {   // Verifica se a descrição tem pelo menos 2 caracteres
            console.log("Erro... A descricao deve ter pelo menos 2 caracteres.");
        } else if (tarefas.some(tarefa => tarefa.descricao.toLowerCase() === descricao.toLowerCase())) {  // Verifica se a descrição já existe na lista de tarefas
            console.log("Erro... A descricao ja existe na lista de tarefas.");
        } else {  // Se a descrição for válida, sai do loop
            break;
        }
    }

    tarefas.push({  // Adiciona a nova tarefa à lista de tarefas
        titulo: titulo,  // Adiciona o título da tarefa
        descricao: descricao  // Adiciona a descrição da tarefa
    });

    console.log("Tarefa adicionada com sucesso!");  // Mensagem de sucesso após adicionar a tarefa
}

// Função para visualizar lista - C1/C3/C7 - PASSO 3
function visualizarLista() {
    console.log("\n=== LISTA DE TAREFAS ===");  // Mensagem de cabeçalho para a lista de tarefas

    if(tarefas.length === 0){
        console.log('Nenhuma tarefa dispovínel!')
    } else{
        
        for (let i = 0; i < tarefas.length; i++) {  // Loop para percorrer todas as tarefas na lista
            console.log((i + 1) + " - " + tarefas[i].titulo);  // Exibe o número da tarefa (índice + 1) e o título da tarefa
        }
    }

}

// Função para visualizar item - C1/C2/C8 - PASSO 4
function visualizarItemTarefa() {
    let numero = rl.questionInt("Informe o numero da tarefa que deseja visualizar: "); // Solicita ao usuário que informe o número da tarefa que deseja visualizar
    let indice = numero - 1;  // Ajuste para índice baseado em 0, já que o usuário vê a lista começando do 1

    if (indice >= 0 && indice < tarefas.length) {  // Verifica se o índice é válido (dentro do intervalo da lista de tarefas)
        console.log("Título: " + tarefas[indice].titulo);  // Exibe o título da tarefa correspondente ao índice informado
        console.log("Descrição: " + tarefas[indice].descricao);  // Exibe a descrição da tarefa correspondente ao índice informado
    } else {
        console.log("Tarefa não encontrada.");  // Mensagem de erro caso o índice informado não corresponda a nenhuma tarefa na lista
    }
}

// Função para editar tarefa - C1/C3/C7 - PASSO 5
function editarTarefa() {
    let numero = rl.questionInt("Informe o numero da tarefa que deseja editar: "); // Solicita ao usuário que informe o número da tarefa que deseja editar ou 0 para cancelar
    let indice = numero - 1;  // Ajuste para índice baseado em 0, já que o usuário vê a lista começando do 1

    if (indice >= 0 && indice < tarefas.length) {  // Verifica se o índice é válido (dentro do intervalo da lista de tarefas)

        console.log("\nTarefa atual:");  // Exibe a mensagem indicando que a tarefa atual será mostrada
        console.log("Titulo:", tarefas[indice].titulo);  // Exibe o título da tarefa correspondente ao índice informado
        console.log("Descricao:", tarefas[indice].descricao);  // Exibe a descrição da tarefa correspondente ao índice informado

        let novoTitulo;  // Variável para armazenar o novo título da tarefa
        let novaDescricao;  // Variável para armazenar a nova descrição da tarefa


        while (true) {  // Loop para garantir que o novo título seja válido
            novoTitulo = rl.question("Digite o novo titulo ou pressione Enter para manter o atual: ").trim();  // Remove espaços em branco no início e no final da string

            if (novoTitulo === "") {  // Enter mantém o valor atual, então sai do loop
                break;
            }
            if (!/^[A-Za-zÀ-ÿ0-9\s./()]+$/.test(novoTitulo)) {  // Verifica se o novo título contém apenas letras, números e espaços
                console.log("Erro... O campo contem caracteres invalidos.");
            } else if (novoTitulo.length < 2) {  // Verifica se o novo título tem pelo menos 2 caracteres
                console.log("Erro... O titulo deve ter pelo menos 2 caracteres.");
            } else if (tarefas.some((tarefa, i) => tarefa.titulo.toLowerCase() === novoTitulo.toLowerCase() && i !== indice)) {  // Verifica se o novo título já existe na lista de tarefas, ignorando a tarefa atual
                console.log("Erro... O titulo ja existe na lista de tarefas.");
            } else {
                tarefas[indice].titulo = novoTitulo;  // Atualiza o título da tarefa correspondente ao índice informado
                break;
            }
        }

        while (true) {  // Loop para garantir que a nova descrição seja válida
            novaDescricao = rl.question("Digite a nova descricao ou pressione Enter para manter a atual: ").trim(); // Remove espaços em branco no início e no final da string

            if (novaDescricao === "") {  // Enter mantém o valor atual, então sai do loop
                break;
            }
            if (!/^[A-Za-zÀ-ÿ0-9\s./()]+$/.test(novaDescricao)) {  // Verifica se a nova descrição contém apenas letras, números e espaços
                console.log("Erro... O campo contem caracteres invalidos.");
            } else if (novaDescricao.length < 2) {  // Verifica se a nova descrição tem pelo menos 2 caracteres
                console.log("Erro... A descricao deve ter pelo menos 2 caracteres.");
            } else if (tarefas.some((tarefa, i) => tarefa.descricao.toLowerCase() === novaDescricao.toLowerCase() && i !== indice)) {  // Verifica se a nova descrição já existe na lista de tarefas, ignorando a tarefa atual
                console.log("Erro... A descricao ja existe na lista de tarefas.");
            } else {
                tarefas[indice].descricao = novaDescricao;  // Atualiza a descrição da tarefa correspondente ao índice informado
                break;
            }
        }

        console.log("\nTarefa atualizada com sucesso!");  // Mensagem de sucesso após atualizar a tarefa   
        console.log("Titulo:", tarefas[indice].titulo);  // Exibe o título atualizado da tarefa correspondente ao índice informado
        console.log("Descricao:", tarefas[indice].descricao);  // Exibe a descrição atualizada da tarefa correspondente ao índice informado

    } else {
        console.log("Tarefa nao encontrada, tente novamente."); // Mensagem de erro caso o índice informado não corresponda a nenhuma tarefa na lista
    }
}

// Função para excluir tarefa - C1/C3/C4 - PASSO 6
function excluirTarefa() {
    let numero = rl.questionInt("Informe o numero da tarefa que deseja excluir da lista: ");  // Solicita ao usuário que informe o número da tarefa que deseja excluir
    let indice = numero - 1;  // Ajuste para índice baseado em 0, já que o usuário vê a lista começando do 1

    if (indice >= 0 && indice < tarefas.length) {  // Verifica se o índice é válido (dentro do intervalo da lista de tarefas)
        tarefas.splice(indice, 1);   // Remove a tarefa correspondente ao índice informado da lista de tarefas
        console.log("Tarefa excluida com sucesso!");  // Mensagem de sucesso após excluir a tarefa
    } else {
        console.log("Tarefa não encontrada, tente novamente");  // Mensagem de erro caso o índice informado não corresponda a nenhuma tarefa na lista
    }
}

// Função para filtrar tarefas - C1/C2/C7/C8 - PASSO 7
function filtrarTarefas() {
    console.log("\n=== FILTRAR TAREFAS ===");
    console.log("1 - Filtrar por título");
    console.log("2 - Filtrar por descrição");
    console.log("3 - Filtrar por número");
    console.log("4 - Filtrar por título ou descrição");
    console.log("5 - Voltar ao menu principal");

    let opcao = rl.questionInt("Escolha uma opção: ");  // Solicita ao usuário que escolha uma opção de filtro e armazena a escolha na variável 'opcao'
    let encontrou = false;  // Variável para indicar se alguma tarefa foi encontrada durante o filtro

    switch (opcao) {  // Switch case para tratar a opção de filtro escolhida pelo usuário
        case 1:
            let titulo = rl.question("Digite o título que deseja filtrar: ").trim();  // Solicita ao usuário que digite o título para filtrar as tarefas e remove espaços em branco no início e no final da string

            for (let i = 0; i < tarefas.length; i++) {  // Loop para percorrer todas as tarefas na lista
                if (tarefas[i].titulo.toLowerCase().includes(titulo.toLowerCase())) {  // Verifica se o título da tarefa contém o termo de filtro (ignorando maiúsculas e minúsculas)
                    console.log(`\n${i + 1} - ${tarefas[i].titulo}`);  // Exibe o número da tarefa (índice + 1) e o título da tarefa correspondente ao índice informado
                    console.log(`Descrição: ${tarefas[i].descricao}`);  //  Exibe a descrição da tarefa correspondente ao índice informado
                    encontrou = true;  // Indica que pelo menos uma tarefa foi encontrada durante o filtro
                }
            }
            break;

        case 2:
            let descricao = rl.question("Digite a descrição que deseja filtrar: ").trim();  // Solicita ao usuário que digite a descrição para filtrar as tarefas e remove espaços em branco no início e no final da string

            for (let i = 0; i < tarefas.length; i++) {  // Loop para percorrer todas as tarefas na lista
                if (tarefas[i].descricao.toLowerCase().includes(descricao.toLowerCase())) {  // Verifica se a descrição da tarefa contém o termo de filtro (ignorando maiúsculas e minúsculas)
                    console.log(`\n${i + 1} - ${tarefas[i].titulo}`); // Exibe o número da tarefa (índice + 1) e o título da tarefa correspondente ao índice informado
                    console.log(`Descrição: ${tarefas[i].descricao}`);  // Exibe a descrição da tarefa correspondente ao índice informado
                    encontrou = true;  // Indica que pelo menos uma tarefa foi encontrada durante o filtro
                }
            }
            break;

        case 3:
            let numero = rl.questionInt("Digite o número da tarefa: "); // Solicita ao usuário que digite o número da tarefa que deseja visualizar
            let indice = numero - 1;  // Ajuste para índice baseado em 0, já que o usuário vê a lista começando do 1

            if (indice >= 0 && indice < tarefas.length) {  // Verifica se o índice é válido (dentro do intervalo da lista de tarefas)
                console.log(`\n${numero} - ${tarefas[indice].titulo}`);  // Exibe o número da tarefa (índice + 1) e o título da tarefa correspondente ao índice informado
                console.log(`Descrição: ${tarefas[indice].descricao}`);  // Exibe a descrição da tarefa correspondente ao índice informado
                encontrou = true;  // Indica que pelo menos uma tarefa foi encontrada durante o filtro
            }
            break;

        case 4:
            let filtro = rl.question("Digite o termo de busca: ").trim();  // Solicita ao usuário que digite o termo de busca e remove espaços em branco no início e no final da string

            for (let i = 0; i < tarefas.length; i++) {  // Loop para percorrer todas as tarefas na lista
                if (tarefas[i].titulo.toLowerCase().includes(filtro.toLowerCase()) || tarefas[i].descricao.toLowerCase().includes(filtro.toLowerCase())) {  // Verifica se o título ou a descrição da tarefa contém o termo de filtro (ignorando maiúsculas e minúsculas)
                    console.log(`\n${i + 1} - ${tarefas[i].titulo}`);  // Exibe o número da tarefa (índice + 1) e o título da tarefa correspondente ao índice informado
                    console.log(`Descrição: ${tarefas[i].descricao}`);  // Exibe a descrição da tarefa correspondente ao índice informado
                    encontrou = true;  // Indica que pelo menos uma tarefa foi encontrada durante o filtro
                }
            }
            break;

        case 5:
            let voltar = rl.question("Deseja realmente voltar ao menu principal? (s/n): ").trim().toLowerCase();  // Solicita ao usuário que confirme se deseja voltar ao menu principal e armazena a resposta na variável 'voltar'
            if (voltar === 's') {  // Se o usuário confirmar que deseja voltar ao menu principal, exibe uma mensagem e retorna para o menu principal
                console.log("Voltando ao menu principal...");  // Exibe uma mensagem indicando que o programa está voltando ao menu principal
                return;
            } else {
                console.log("Continuar filtrando...");  // Exibe uma mensagem indicando que o programa continuará filtrando as tarefas
                filtrarTarefas(); // Chama a função novamente para continuar filtrando
                return; // Retorna para a função filtrarTarefas() para continuar filtrando as tarefas
            }

        default:
            console.log("Opção inválida.");  // Exibe uma mensagem de erro caso o usuário escolha uma opção inválida no menu de filtro
            return;
    } 

    if (!encontrou) {  // Se nenhuma tarefa foi encontrada durante o filtro, exibe uma mensagem indicando que nenhuma tarefa foi encontrada
        console.log("\nNenhuma tarefa encontrada.");
    }
}

mostrarMenu();  // Chama a função mostrarMenu() para iniciar o programa e exibir o menu principal para o usuário