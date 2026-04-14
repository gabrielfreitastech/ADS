let rl = require('readline-sync')

// ============================================================
//   RECUPERAÇÃO – ATIVIDADE AVALIATIVA N5
//   Módulos: Operadores e Estruturas Condicionais (if/else, switch/case)
// ============================================================
//
//  Instruções Gerais:
//  • NÃO utilize funções (function) nem laços de repetição (for, while, do/while).
//  • Utilize readline-sync para entrada de dados.
//  • O código deve ser elaborado individualmente (códigos identicos serão considerados plágio - nota 0).
//
// ============================================================


// ------------------------------------------------------------
// QUESTÃO ÚNICA (peso: 10) – Triagem Hospitalar
// ------------------------------------------------------------
//
// Crie um sistema de triagem de pronto-socorro que colete dados
// do paciente e determine o nível de urgência.
//
// Sempre que o usuário digitar um valor inválido, exiba uma mensagem de erro e encerre o programa.
//
// ─────────────────────────────────────────────────────────────
// PASSO A – Coleta de dados
// ─────────────────────────────────────────────────────────────
//
// Colete via terminal:
//   • "nomePaciente"  → nome
//   • "nivelDor"      → nível de dor de 1 a 10
//   • "temperatura"   → temperatura corporal em °C
//
// Exiba: "Paciente <nomePaciente> registrado. Iniciando triagem."
//
// ─────────────────────────────────────────────────────────────
// PASSO B – Categoria do sintoma (switch/case)
// ─────────────────────────────────────────────────────────────
//
// Exiba o menu e colete "categoria":
//
//   Qual é a categoria do sintoma principal?
//   1) Cardiorrespiratório
//   2) Infeccioso / Febril
//   3) Trauma / Lesão
//
// Use switch/case para exibir a categoria escolhida:
//   1 → "Categoria: Cardiorrespiratório"
//   2 → "Categoria: Infeccioso / Febril"
//   3 → "Categoria: Trauma / Lesão"
//
// ─────────────────────────────────────────────────────────────
// PASSO C – Nível de urgência (if/else if/else)
// ─────────────────────────────────────────────────────────────
//
// Com base na combinação de "categoria", "nivelDor" e "temperatura",
// determine o nível de urgência usando if/else:
//
//   categoria igual a 1 (Cardiorrespiratório):
//     nivelDor maior ou igual a 7 OU temperatura maior ou igual a 38.5 → urgencia = "A"
//     senão → urgencia = "B"
//
//   categoria igual a 2 (Infeccioso):
//     temperatura maior ou igual a 39.0 OU nivelDor maior ou igual a 7 → urgencia = "B"
//     senão → urgencia = "D"
//
//   categoria igual a 3 (Trauma):
//     nivelDor maior ou igual a 7 → urgencia = "A"
//     nivelDor maior ou igual a 5 → urgencia = "C"
//     senão → urgencia = "E"
//
// ─────────────────────────────────────────────────────────────
// PASSO D – Exibição do resultado
// ─────────────────────────────────────────────────────────────
//
// Exiba com console.log() e template literal:
//
//   =========================================
//   Paciente    : <nomePaciente>
//   Nível de dor: <nivelDor> de 10
//   Temperatura : <temperatura>°C
//   Resultado   : <descrição do nível>
//   =========================================
//
// Use switch/case para traduzir "urgencia" na descrição:
//   "A"  →  "EMERGÊNCIA — Atendimento imediato"
//   "B"  →  "URGÊNCIA ALTA — Será chamado em breve"
//   "C"  →  "URGÊNCIA MODERADA — Aguarde na sala de espera"
//   "D"  →  "CONSULTA NORMAL — Agende pelo sistema"
//   "E"  →  "BAIXA PRIORIDADE — Procure uma UBS"

// → Seu código aqui:

let nomePaciente = rl.question('Digite o nome do paciente: ')
let nivelDor = rl.questionInt('Digite o nivel de dor de 0 a 10: ')
let temperatura = rl.questionFloat('Digite a temperatura corporal: ')
let categoria = ''
let nivelUrgencia = ''
let resultado = ''

if (nomePaciente === '') {
    console.log('Nome do paciente digitado incorreto, encerrando a Triagem!.')

} else if (nivelDor < 0 || nivelDor > 10) {
    console.log('Nível de dor digitado incorreto, encerrando a Triagem!.')

} else if (temperatura <= 0) {
    console.log('Temperatura digitada incorreta, encerrando a Triagem!.')

} else {
    console.log(`Paciente ${nomePaciente} registrado. Iniciando triagem.`)
    console.log('Qual é a categoria do sintoma principal?')
    console.log('1) Cardiorrespiratório')
    console.log('2) Infeccioso / Febril')
    console.log('3) Trauma / Lesão')
    categoria = rl.questionInt('Digite a categoria do sintoma: ')

    if (categoria < 1 || categoria > 3) {
        console.log('Categoria digitada incorreta, encerrando a Triagem!.')
    } else {
    switch (categoria) {
        case 1:
            console.log('Categoria: Cardiorrespiratório')
            if (nivelDor >= 7 || temperatura >= 38.5) {
                nivelUrgencia = 'A'
            } else {
                nivelUrgencia = 'B'
            }
            break
        case 2:
            console.log('Categoria: Infeccioso / Febril')
            if (temperatura >= 39.0 || nivelDor >= 7) {
                nivelUrgencia = 'B'
            } else {
                nivelUrgencia = 'D'
            }
            break
        case 3:
            console.log('Categoria: Trauma / Lesão')
            if (nivelDor >= 7) {
                nivelUrgencia = 'A'
            } else if (nivelDor >= 5) {
                nivelUrgencia = 'C'
            } else {
                nivelUrgencia = 'E'
            }
            break
    }

    switch (nivelUrgencia) {
        case 'A':
            resultado = 'EMERGÊNCIA — Atendimento imediato'
            break
        case 'B':
            resultado = 'URGÊNCIA ALTA — Será chamado em breve'
            break
        case 'C':
            resultado = 'URGÊNCIA MODERADA — Aguarde na sala de espera'
            break
        case 'D':
            resultado = 'CONSULTA NORMAL — Agende pelo sistema'
            break
        case 'E':
            resultado = 'BAIXA PRIORIDADE — Procure uma UBS'
            break
    }

    console.log('=========================================')
    console.log(`Paciente    : ${nomePaciente}`)
    console.log(`Nível de dor: ${nivelDor} de 10`)
    console.log(`Temperatura : ${temperatura}°C`)
    console.log(`Resultado   : ${resultado}`)
    console.log('=========================================')
    }
}