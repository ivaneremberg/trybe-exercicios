// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15

let number = 5;

function sumN (a) {
    let sum = 0;
    if ( a > 0)
        for (let i = 0; i <= a; i += 1) {
            sum += i;
        } else {
            return "ERROR: Not a positive number!"
        }
    return sum;
}

console.log(sumN(number));