JS
Arquivo "game.js"

Criar variável do tabuleiro que será um array com 9 posições vazias, ou seja, "".

Criar variável da vez do jogador (playerTime), onde possíveis valores são: 0 - jogador 1 || 1 - jogador 1.

Criar variável do símbolo (symbols) do  jogador. Num array, "clo" será o jogador 1 && "flo" o jogador 2.

Quando estiver na vez do jogador 1, o simbolo a preencher a posição do array, será o "clo" e assim por diante
---

Arquivo "interface.js"
 
Criar um addEventListener no html geral com o tipo "DOMContentLoaded", que dispara uma função quando todo o html tiver sido carregado. 
Essa função executa:
	Cria uma variavel com todos os quadrados (squares) através do querySelectorAll, buscando pela classe .square, resultando num array.
	forEach nessa variavel para adicionar um eventListener para lidar com o clique e cada um dos quadrados. Cada event listener dispara uma função (handleClick), que acessa o target do item e pega o id dele, fazendo possível saber em que posição do board foi clicado. Essa mesma função ativa outra função (handleMove, no game.js):
	a partir do id do item clicado, o board sabe o posição do array que será alterado, colocando no lugar o valor do "symbols" na posição da vez do jogador (playerTime). Fazer um if para trocar a vez do jogador a cada clique.

A função handleClick dispara outra função (updateSquares):
	Novamente pega todos elementos da classe .square;
	forEach nesse array de elementos, usando o id de cada um deles para checar se no array "board" houve alguma mudança. Se não é mais vazia a posição, ou seja, está preenchido com "clo" ou "flo", pega posição desse array preenchido e usa ela para, na mesma posição/id do elemento (div) adicionar um html de div com a classe que leva o nome do simbolo (referente a variavel "symbols") que está naquela posição preenchida. 

Para isso, dentro do forEach usa-se uma variavel que recebe a posição do elemento analisado atraves do id, e usando essa posição, outra variavel que pega o symbol usado no array "board". 
Em outras palavras, a função analisa cada elemento do html com a classe .square, usa o id para verificar se no array "board" alguma posição foi preenchida com um dos dois simbolos (symbols). Se sim, usa-se a mesma posição para criar um html nesse elemento e usa o simbolo preenchido como classe.

---

Logica para vencer o jogo

Criar uma variavel "gameOver", quando estiver true, acabou o jogo, quando falsa, continua. Por padrão, ela é falsa.

A variavel "gameOver" recebe a função isWin(). Nela testaremos a logica da vitoria, que é basicamente 8 possibilidades de cenario para vitoria, compostas de 3 sequencias cada. Usar "winStates" como variavel de array que contem as 8 possibilidades (tb arrays)  dentro os isWin().










