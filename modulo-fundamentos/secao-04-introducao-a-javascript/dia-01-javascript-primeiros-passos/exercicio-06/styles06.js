// Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const grade = -10;
let result = "";

if (grade < 0 || grade > 100) {
    console.log("Please insert a valid grade! Valid grades are numbers between 0 and 100.")
}
else if (grade >= 90) {
    result = "A";
}
else if (grade >= 80 && grade < 90) {
    result = "B";
}

else if (grade >= 70 && grade < 80) {
    result = "C";
}

else if (grade >= 60 && grade < 70) {
    result = "D";
}

else if (grade >= 50 && grade < 60) {
    result = "E";
}
else {
    result = "F";
}

console.log(result);