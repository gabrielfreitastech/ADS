const rl = require('readline-sync')

// 1.
// Adicionar
// – cadastrar uma nova tarefa (card), informando título e texto/descrição.
// 2.
// Visualizar lista
// – exibir a lista de tarefas mostrando
// apenas os títulos
// cadastrados.
// 3.
// Visualizar item
// – solicitar ao usuário qual item deseja exibir, e o sistema deve exibir o
// texto/descriçãocompleta
// daquela tarefa.
// 4.
// Editar
// – solicitar ao usuário qual item deseja editar e se a edição é do título ou do texto/descrição; permitira edição da informação desejada do item selecionado.
// 5.
// Excluir
// – solicitar ao usuário uma tarefa existente e removê-la da lista.
// 6.
// Filtrar
// – buscar tarefas a partir de um termo digitado pelo usuário, comparando com o
// título
// das tarefas, eexibir somente os resultados que atendam ao filtro.
// 7.
// Encerrar
// – O menu deve permanecer em execução (loop) até que o usuário escolha a opção de saída,retornando sempre ao menu principal após concluir uma ação.


const list = []

function menu(){
    return console.log(`
    ===TO-DO-LIST===
    1 - ADD TASK
    2 - VIEW LIST
    3 - VIEW ITEM
    4 - EDIT
    5 - DELETE
    6 - FILTER
    7 - TO CLOSE
    0 - EXIT
    ===============
    `)
}

function addTask(task, txt){ // 1 - Função que cria a tarefa, onde tarefa é um objeto com titulo e descrição e após isso, 'empurra' o objeto para dentro da lista e retorna a mesma.
    let tarefa = {
        title: task,
        description: txt
    }
    list.push(tarefa)
    return list
}

function viewList(list){ // 2 - 
    for(let task of list){
        console.log(list.title)
    }
}