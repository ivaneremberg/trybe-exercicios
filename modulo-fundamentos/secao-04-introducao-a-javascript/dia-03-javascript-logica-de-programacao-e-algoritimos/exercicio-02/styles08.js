// Agora inverta o lado do triângulo. Por exemplo:
// n = 5
//     *
//    **
//   ***
//  ****
// *****
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
let n = 5;
let row = "";

if ( n > 1){
    for (let i = 1; i <= n; i += 1) {
        for (let x = 1; x <= n; x += 1) {
            if (x <= n-i) {
                row = row + " ";
            } else {
                row = row + "*";
            }
        }
        console.log(row); 
        row = "";
    }
}