// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5
// *
// **
// ***
// ****
// *****

let n = 7;
let row = "";

if ( n > 1){
    for (let x = 1; x <= n; x += 1) {
        row = row + "*";
        console.log(row); 
    }
}