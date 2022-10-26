// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function quantityOfLetters (a) {
    count = 0;
    count1 = "";
    for (x in a) {
        if (a[x].length > count) {
            // console.log(teste[x].length);
            // console.log(count);
            count = a[x].length;
            count1 = a[x];
        }
    }
    return count1;
}
console.log(quantityOfLetters(teste));