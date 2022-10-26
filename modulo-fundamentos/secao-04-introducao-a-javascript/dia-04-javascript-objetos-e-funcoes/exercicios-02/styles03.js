// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara
// verificaPalindrome('arara')
// Retorno esperado: true
// verificaPalindrome('desenvolvimento')
// Retorno esperado: false

function verificaPalindrome (a) {
    let result = "";
    for (let x of a) {
        result = x + result;
    }  
    if (result === a) {
        console.log(result);
        return true;        
    }
    else {
        console.log(result);
        return false;        
    }
}
console.log(verificaPalindrome("desenvolvimento"));