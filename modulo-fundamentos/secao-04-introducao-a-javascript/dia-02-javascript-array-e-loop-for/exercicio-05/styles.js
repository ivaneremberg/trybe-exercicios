// Iremos utilizar esse array para realizar os próximos exercícios.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
// Some todos os valores contidos no array e imprima o resultado;
let sum = 0;
// Calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let highestValue = numbers[0];
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let oddNumbers = 0;
// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let lowestValue = numbers[0];
// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let array1to25 = [];
// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < numbers.length; index += 1){
    sum = sum + numbers[index];
    console.log(numbers[index]);
}

console.log("Sum of numbers in the array is: " + sum + ".");
arithmeticAvg = sum / numbers.length
console.log("Arithmetic average between the array is: " + arithmeticAvg + ".");

if (arithmeticAvg > 20){
    console.log("The Arithmetic value is greater than 20.")
}
else {
    console.log("The Arithmetic value is lower than 20.")
}

// for (let index1 = 0; index1 < numbers.length; index1 += 1) {
//     for (let index2 = 0; index2 < numbers.length; index2 += 1) {
//         if (numbers[index1] >= numbers[index2]) {
//             console.log("Index01 " + numbers[index1]);
//             console.log("Index02 " + numbers[index2]);
//             highestValue = numbers[index1];
//             console.log(highestValue);
//         }
// }
// }

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] >= highestValue) {
        highestValue = numbers[index];
    }    
}
console.log("The highest value between the numbers in the array is: " + highestValue + ".");


for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 == !0) {
        oddNumbers += 1;
    }    
}
console.log("The count of odd numbers in the array is: " + oddNumbers + ".");

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] <= lowestValue) {
        lowestValue = numbers[index];
    }    
}
console.log("The lowest value between the numbers in the array is: " + lowestValue + ".");

for (let index = 0; index < 25; index += 1) {
    array1to25[index] = index + 1;
    console.log(array1to25[index]);
}

for (let index = 0; index < array1to25.length; index += 1) {
    console.log(array1to25[index] + " divided by 2 is " + array1to25[index] / 2);
}