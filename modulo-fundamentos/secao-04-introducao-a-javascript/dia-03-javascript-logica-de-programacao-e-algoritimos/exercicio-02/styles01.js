// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

let factoral = 10;
let sum = factoral;

for (let i = factoral-1; i > 1; i -= 1) {
    sum += sum * (i -1); 
    // console.log(sum);
    // console.log(i-1);
    // console.log(sum);
}

console.log("10! is: " + sum);