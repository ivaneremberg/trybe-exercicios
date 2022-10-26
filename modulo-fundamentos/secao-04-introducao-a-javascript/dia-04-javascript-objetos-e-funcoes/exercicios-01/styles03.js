// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function addition (a, b){
    return (a + b);
}

function subtraction (a, b){
    return (a - b);
}

function multiplication (a, b){
    return (a * b);
}

function division (a, b){
    return (a / b);
}

function modulation (a, b){
    return (a % b);
}

console.log(addition(2, 10));
console.log(subtraction(2, 10));
console.log(multiplication(2, 10));
console.log(division(2, 10));
console.log(modulation(2, 10));

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

const value1 = 2; 
const value2 = 10;

function compareNumbers (a, b){
    if ( a > b){
        return "The greater value between numbers is: " + a;
    }
    else if ( a < b){
        return "The greater value between numbers is: " + b;
    }
    else {
        return "Both numbers are equals!";
    }
}

console.log(compareNumbers(value1, value2));

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const value3 = 10; 
const value4 = 10;
const value5 = 10;

function compareNumbers1 (a, b, c) {
    if ( a > b && a > c) {
        return "The greater value between the three numbers is: " + a;
    }
    else if ( b > a && b > c) {
        return "The greater value between the three numbers is: " + b;
    }
    else if ( c > a && c > b) {
        return "The greater value between the three numbers is: " + c;
    }
    else {
        return "All three numbers are equals!";
    }
}

console.log(compareNumbers1(value3, value4, value5));

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function isPositive (a) {
    if ( a > 0) {
        return a + " is positive."
    }
    else if ( a < 0) {
        return a + " is negative."
    }
    else {
        return a + " is zero.";
    }
}

console.log(isPositive(-1));

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

const value6 = 30; 
const value7 = 50;
const value8 = 100;

function isValid (a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        if ( a + b + c === 180) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Please insert a positive number!"
    }    
}

console.log(isValid(value6, value7, value8));