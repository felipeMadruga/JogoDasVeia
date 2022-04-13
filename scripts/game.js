let board = ["", "", "", "", "", "", "", "", ""]        // Tabuleiro com 9 posições vazias predefinidas
let playerTime = 0                                      // Controla a vez do jogador, usa 0 ou 1 como posição do array "symbols"    
let symbols = ["clo", "flo"]                            // Strings usadas pra popular o board e adicionar classe css no elemento clicado
let gameOver = false                                    // variavel uasda para definir fim do jogo 

let winStates = [                                       // São oito possibilidades de sequencia para vitória
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let winSeq = ["", "", ""]                               // Sequencia vencedora

/////////
/////////
function handleMove(position) {                         // Maneja as posições do jogadores onde houver click

    if (gameOver) {                                     // = Se variavel gameOver for true, para a função, não executa à frente
        return
    }

    if (board[position] == "") {                        // Se a id do elemento clicado estiver vazia...
        board[position] = symbols[playerTime]           // ... substitui pelo elemento array symbols referente a vez do jogador (0 ou 1)

        gameOver = isWin()                              // Analisa se existe alguma sequencia vencedora (winStates). Se houver...
                                                        // ... a função retorna true, o q torna a func gameOver tb true e termina o jogo
        if (gameOver != true) {                         // Caso contrário, verifica qual a vez do jogador e alterna
            if (playerTime == 0) {
                playerTime = 1
            } else {
                playerTime = 0
            }
        }
    }
    return gameOver                                     // Se a var gameOver for verdadeira, significa que o jogo acabou. Esse return está ...
}                                                       // ... aqui para ativar um alert em ./interface que dirá quem é o vencedor.

////////
function isWin() {                                      // Analisa se existe alguma sequencia vencedora (winStates)

    for (let i = 0; i < winStates.length; i++) {        // Para cada array que é um item desse array...
        let seq = winStates[i]                          // ... será analisada a sequencia das 3 posições

        pos1 = seq[0]
        pos2 = seq[1]
        pos3 = seq[2]

        if (board[pos1] == board[pos2] &&               // Usando essas mesmas posições no board, se alguma dessas sequencias por encontrada...
            board[pos1] == board[pos3] &&
            board[pos1] != "") {
                winSeq = [pos1, pos2, pos3]             // Recebe a sequencia vencedora em forma de array
                showWinSeq(winSeq)
                console.log(winSeq)                     // Chama a função que mostra a sequencia vencedora
            return true                                 // A func será true. Como acima a var gameOver recebe o valor dessa função, o jo termina
        }
    }
}

