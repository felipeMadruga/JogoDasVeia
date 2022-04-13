let btn = document.querySelector("#btn")
let msg = document.querySelector("#winner")
let tabuleiro = document.querySelector(".tabuleiro")

let contClo = 0
let contFlo = 0

/////////
/////////
addEventListener("DOMContentLoaded", () => {                        // Espera todo HTML carregar antes de disparar a função                    
    let squares = document.querySelectorAll(".square")

    squares.forEach(square => {                                     // Adiciona eventListener de click em cada um dos elementos da classe .square  
        square.addEventListener("click", handleClick)
    });
})

/////////
function handleClick(event) {                                       // Maneja o que acontece quando o elemento quadrado é clicado...
                                                                     // ... e passa as infos para a função handleMove
    let square = event.target
    let position = square.id

    if (handleMove(position)) {                                     // Se a função handleMove retornar true, ou seja, se a variavel gameOver...                                                            
        setTimeout(() => {                                           // ... for verdadeira por existir um vencedor, um alerta com o nome do...
            let name = whosPlayer(playerTime)                         // ... vencedor aparece.  
            alert(`${name}`)
        }, 100)                                                     // Foi usado setTimeOut para o alerta pq ele disparamais rapido que o resto               
    }
    updateSquares()                                                 // Após o clique no elemento, essa função é ativada              
}

/////////
function updateSquares() {                                          // Varre o array e atualiza a classe dos elementos referentes modificados
    let squares = document.querySelectorAll(".square")

    squares.forEach(square => {
        let position = square.id
        let symbol = board[position]

        if (symbol != "") {                                         // Para cada posição diferente de vazio, preenche o HTML naquele elemento...
            square.innerHTML = `<div class="${symbol}"></div>`       // ... com um elemento de classe referente a vez do jogador
        } else {
            square.innerHTML = ""                                   // Senão, o element é vazio
        }
    });

    isTie()                                                         // Chama função para verificar empate       
}

/////////
function reset() {                                                  // Reseta o tabuleiro (board) a partir do click no botao
    board.splice(0, 9, "", "", "", "", "", "", "", "", "")          // Ao clicar no botao referente, substitui os elementos do array por ""

    console.log(board)
    updateSquares()                                                 // Chama essa func para limpar o board dos jogadores
    gameOver = false                                                // Muda o status do jogo para possibilitar o jogo novamente
    msg.style.display = "none"                                      // Seconde a msg de vencedor     
    tabuleiro.style.animationName = ""                              // Retira a animação da classe

    hideWinSeq(winSeq)                                              // Retorna os squares para a cor normal, escondendo a seq vencedora
    console.log(winSeq)
}

/////////                                                                     
function isTie() {                                                  // Verifica todos elementos do array "board, se não houver...
    if (board.find(elem => elem == "") == undefined) {                // ... nenhuma vazio, encerra o jogo e mostra o alerta"
        gameOver = true                                             // .find retorna undefined se não houver no array o elemento que procura
        tabuleiro.style.animationName = "blur"
        msg.style.display = "flex"
        msg.innerHTML = "<p>Não houve vencedor... tentem novamente!</p>"

    // setTimeout(() => {alert("Acabou, niguém ganhou")}, 100) // Usar setTimeOut pq o alert dispara mais rápido que outras funções...
    }                                                               // ... portanto antes de o jogador aparecer no quadrado

}
/////////
function whosPlayer() {                                             // Mostra msg de vitoria ao jogador vencedor    

    if (playerTime == 0) {                                          // Se o vencedor for o player 0
        tabuleiro.style.animationName = "blur"
        msg.style.display = "flex"
        msg.innerHTML = '<h2>Clotilde venceu!</h2> <p>"Ai, madruguinha, ganhei!"</p>'
        contClo++                                                   // Adiciona ponto ao placar
        placarClo(contClo)
    } else {
        tabuleiro.style.animationName = "blur"
        msg.style.display = "flex"
        msg.innerHTML = '<h2>Florinda venceu!</h2> <p>"E da proxima vez vá jogar com a sua avó!"</p>'
        contFlo++
        placarFlo(contFlo)
    }
    return playerName                                               // NAO ENTENDI A NECESSIDADE DESSE RETURN
}

/////////
function placarClo(x) {
    let clo = document.querySelector("#contClo")                    // Pega o elemento e adciona uma imagem a cada ponto ganho
    clo.innerHTML += '<img src="./assets/seu-madruga.png" alt=""></img>'
}
/////////
function placarFlo(x) {
    let flo = document.querySelector("#contFlo")
    flo.innerHTML += '<img src="./assets/seu-madruga.png" alt=""></img>'
}

/////////
function showWinSeq(elem) {                                         // Usa a seq vencedora para marcar os elementos correspondentes
    let squares = document.querySelectorAll(".square")
    for (let i of elem) {
        squares[i].style.backgroundColor = "rgb(20, 130, 214)"
    }
}
/////////
function hideWinSeq(elem) {                                         // Usa a seq vencedora para retornar ao estado normal os elementos...
    let squares = document.querySelectorAll(".square")               // ... ao eprtar o botão de resetar
    for (let i of elem) {
        squares[i].style.backgroundColor = "rgb(130,185,227)"
    }
}

// REFAZER ESTILO PARA ADAPTAR A TELA DE CELULAR. FICOU MUITO GRANDE O TABULEIRO