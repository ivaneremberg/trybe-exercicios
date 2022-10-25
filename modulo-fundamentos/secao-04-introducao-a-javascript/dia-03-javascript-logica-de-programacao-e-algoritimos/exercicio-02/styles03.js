// Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let biggestWord = "";
;
for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > biggestWord.length) {
    biggestWord = array[i];
    }
}
console.log("The array's biggest word is: " + biggestWord);

// console.log( "javascript".length > "python".length);