const rl = require('readline-sync')

const palavras = [
    'bolsonaro',
    'flamengo',
    'ovni',
    'colega',
    'bola de cristal',
    'espaco do estudante'
]

function escolherPalavra(lista) {
    const indice = Math.floor(Math.random() * lista.length)
    return lista[indice]
}

function criarPalavraOculta(palavra) {
    let oculta = []

    for (let letra of palavra) {
        if (letra === ' ') {
            oculta.push(' ')
        } else {
            oculta.push('_')
        }
    }

    return oculta
}

function exibirStatus(oculta, vidas, letrasTentadas) {
    console.log('\nPalavra:')
    console.log(oculta.join(' '))
    console.log(`Vidas: ${vidas}`)
    console.log(`Letras usadas: ${letrasTentadas.join(', ')}`)
}

function validarLetra(letra) {
    return letra.length === 1 && /[a-z]/.test(letra)
}

function revelarLetra(palavra, oculta, letra) {
    let acertou = false

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === letra) {
            oculta[i] = letra
            acertou = true
        }
    }

    return acertou
}

function venceu(oculta) {
    return !oculta.includes('_')
}

function regras() {
    console.log(`
=========================
        REGRAS
=========================

- Uma palavra será sorteada.
- Você deve adivinhar letra por letra.
- Cada erro custa uma vida.
- Você começa com 6 vidas.
- O jogo termina quando:
  * a palavra for descoberta;
  * ou as vidas acabarem.
`)
}

function jogar() {
    const palavra = escolherPalavra(palavras)

    let vidas = 6
    let letrasTentadas = []
    let palavraOculta = criarPalavraOculta(palavra)

    console.clear()
    console.log('\n=== JOGO INICIADO ===')

    while (vidas > 0) {

        exibirStatus(
            palavraOculta,
            vidas,
            letrasTentadas
        )

        let letra = rl.question('\nDigite uma letra: ')
            .toLowerCase()
            .trim()

        if (!validarLetra(letra)) {
            console.log('\nDigite apenas uma letra.')
            continue
        }

        if (letrasTentadas.includes(letra)) {
            console.log('\nVocê já tentou essa letra.')
            continue
        }

        letrasTentadas.push(letra)

        const acertou = revelarLetra(
            palavra,
            palavraOculta,
            letra
        )

        if (acertou) {
            console.log('\nAcertou!')
        } else {
            vidas--
            console.log('\nErrou!')
        }

        if (venceu(palavraOculta)) {
            console.log('\nParabéns! Você venceu!')
            console.log(`A palavra era: ${palavra}`)
            rl.question('\nPressione ENTER para voltar ao menu...')
            return
        }
    }

    console.log('\nFim de jogo!')
    console.log(`A palavra era: ${palavra}`)
    rl.question('\nPressione ENTER para voltar ao menu...')
}

function menu() {
    let opcao

    do {
        console.clear()

        console.log(`
=========================
      JOGO DA FORCA
=========================
1 - Jogar
2 - Regras
0 - Sair
`)

        opcao = rl.questionInt('Escolha uma opcao: ')

        switch (opcao) {
            case 1:
                jogar()
                break

            case 2:
                console.clear()
                regras()
                rl.question('\nPressione ENTER para voltar ao menu...')
                break

            case 0:
                console.log('\nAté logo!')
                break

            default:
                console.log('\nOpcao invalida.')
                rl.question('\nPressione ENTER para continuar...')
        }

    } while (opcao !== 0)
}

menu()