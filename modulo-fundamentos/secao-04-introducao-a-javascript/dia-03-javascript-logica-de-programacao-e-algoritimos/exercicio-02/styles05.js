// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
// n = 5
// *****
// *****
// *****
// *****
// *****

let n = 7;
let row = "";

if ( n > 1){
    for (let i = 1; i <= n; i += 1) {
        for (let x = 1; x <= n; x += 1) {
            row = row + "*";
        }
   console.log(row); 
   row = "";
    }
}