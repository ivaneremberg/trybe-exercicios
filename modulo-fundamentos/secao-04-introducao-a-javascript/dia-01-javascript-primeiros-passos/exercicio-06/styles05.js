// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let piece = "RoCk".toLowerCase();

switch (piece) {
    case "pawn":
        console.log(piece, "-> It may move one vacant square directly forward, it may move two vacant squares directly forward on its first move, and it may capture one square diagonally forward.");
        break;
    case "knights":
        console.log(piece, "-> It may move two squares vertically and one square horizontally or two squares horizontally and one square vertically, jumping over other pieces.");
        break;
    case "bishop":
        console.log(piece, "-> It moves and captures along diagonals without jumping over intervening pieces.");
        break;
    case "rock":
        console.log(piece, "-> It may move any number of squares horizontally or vertically without jumping, and it may capture an enemy piece on its path; additionally, it may participate in castling.");
        break;
    case "queen":
        console.log(piece, "-> It may move any number of squares vertically, horizontally or diagonally, combining the power of the rook and bishop.");
        break;
    case "king":
        console.log(piece, "-> It may move to any adjoining square; it may also perform a move known as castling.");
        break;
    default:
        console.log(piece, "Not a valid chess piece");
}