// Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const number01 = 10;
const number02 = 100;
const number03 = 1000;

if (number01 > number02 && number01 > number03) {
    console.log(number01);
}
else if (number02 > number01 && number02 > number03) {
    console.log(number02);
}
else {
    console.log(number03);
}
