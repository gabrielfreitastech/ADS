const rl = require('readline-sync')

const list = [{
    title: 'Operação lava-jato',
    description: 'Lavar as fakes na fast-detailing do Bruno Gomes no Vieiras'
}]

// Função que exibe o menu
function menu() {
    console.log(`
    === TO-DO-LIST ===
    1 - ADD TASK
    2 - VIEW LIST
    3 - VIEW ITEM
    4 - EDIT
    5 - DELETE
    6 - FILTER
    0 - EXIT
    ==================
    `)
}

// 1. Adicionar Tarefa
function addTask() {
    let tarefa = {
        title: rl.question('Qual o titulo da tarefa? '),
        description: rl.question('Qual a descricao da tarefa? ')
    }
    list.push(tarefa)
    console.log('Tarefa adicionada com sucesso!')
}

// 2. Visualizar Lista (mostra apenas os títulos e o número do índice)
function viewList() {
    if (list.length <= 0) {
        console.log('Sem tarefas para exibir!')
    } else {
        console.log('--- Suas Tarefas ---')
        for (let i = 0; i < list.length; i++) {
            console.log(`[${i}] - ${list[i].title}`)
        }
    }
}

// 3. Visualizar Item Completo
function viewItem() {
    if (list.length <= 0) {
        console.log('Sem itens para exibir!')
        return;
    }
    
    viewList(); // Chama a lista para o usuário ver os números

    let index = rl.questionInt('\nExibir qual tarefa? (digite o numero): ')
    
    // Verifica se o número digitado existe na lista
    if (index >= 0 && index < list.length) {
        console.log(`\n=== TAREFA [${index}] ===`)
        console.log(`Titulo: ${list[index].title}`)
        console.log(`Descricao: ${list[index].description}`)
        console.log(`===================`)
    } else {
        console.log('Numero de tarefa invalido!')
    }
}

// 4. Editar Tarefa
function editItem() {
    if (list.length <= 0) {
        console.log('Sem itens para editar!')
        return;
    }

    viewList();
    let index = rl.questionInt('\nEditar qual tarefa? (digite o numero): ')

    if (index >= 0 && index < list.length) {
        let choice = rl.questionInt('O que deseja editar? (1 - Titulo / 2 - Descricao): ')
        
        if (choice === 1) {
            list[index].title = rl.question('Novo titulo: ')
            console.log('Titulo editado com sucesso!')
        } else if (choice === 2) {
            list[index].description = rl.question('Nova descricao: ')
            console.log('Descricao editada com sucesso!')
        } else {
            console.log('Opcao invalida!')
        }
    } else {
        console.log('Numero de tarefa invalido!')
    }
}

// 5. Excluir Tarefa
function deleteItem() {
    if (list.length <= 0) {
        console.log('Sem itens para excluir!')
        return;
    }

    viewList();
    let index = rl.questionInt('\nExcluir qual tarefa? (digite o numero): ')

    if (index >= 0 && index < list.length) {
        list.splice(index, 1) // Remove 1 item a partir do índice selecionado
        console.log('Tarefa excluida com sucesso!')
    } else {
        console.log('Numero de tarefa invalido!')
    }
}

// 6. Filtrar
function filterItems() {
    let term = rl.question('Digite o termo para buscar no titulo: ').toLowerCase()
    
    // Cria um novo array apenas com itens que contêm o termo digitado
    let filtered = list.filter(item => item.title.toLowerCase().includes(term))
    
    if (filtered.length === 0) {
        console.log('Nenhuma tarefa encontrada com esse termo.')
    } else {
        console.log('--- Resultados da Busca ---')
        for (let task of filtered) {
            console.log(`- ${task.title}`)
        }
    }
}

// 7. Loop Principal (Encerrar / Manter em execução)
function app() {
    let rodando = true

    while (rodando) {
        menu()
        let opcao = rl.questionInt('Escolha uma opcao: ')
        
        switch (opcao) {
            case 1:
                addTask()
                break
            case 2:
                viewList()
                break
            case 3:
                viewItem()
                break
            case 4:
                editItem()
                break
            case 5:
                deleteItem()
                break
            case 6:
                filterItems()
                break
            case 0:
                console.log('Encerrando o programa... Ate logo!')
                rodando = false
                break
            default:
                console.log('Opcao invalida, tente novamente!')
        }
    }
}

app()