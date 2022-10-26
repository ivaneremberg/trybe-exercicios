// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.

let teste = [2, 3, 6, 7, 10, 1];

function highestArrayIndexValue (a) {
    let value = 0;
    for (let x in a) {
        if (a[value] < a[x]) {
            value = x;
        }
    }    
    return value;
}

console.log("The position of the highest value in the array is: " + highestArrayIndexValue(teste));


// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.

let teste1 = [2, 4, 6, 7, 10, 0, -3];

function lowesttArrayIndexValue (a) {
    let value = 0;
    for (let x in a) {
        if (a[value] > a[x]) {
            value = x;
        }
    }    
    return value;
}

console.log("The position of the lowest value in the array is: " + lowesttArrayIndexValue(teste1));