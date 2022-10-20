// Crie uma constante chamada “currentHour”, que receba um número entre 4 e 24 de sua escolha, para representar as horas do dia.
// Crie uma variável chamada “message” que, inicialmente, é uma string vazia.
// Implemente condicionais para que:
// Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” na variável “message”.
// Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos jantar :D” na variável “message”.
// Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro café da tarde?” na variável “message”.
// Se o horário estiver entre 11 e 14, insira “Hora do almoço!!!” na variável “message”.
// Se o horário estiver entre 4 e 11, insira “Hmmm, cheiro de café recém-passado” na variável “message”.
// Agora imprima a variável message fora das suas condições.

const currentHour = 9;
let message = "";

if ( currentHour >= 22 ) {
  message = "Não deveríamos comer nada, é hora de dormir";
}
else if ( currentHour >= 18 && currentHour < 22 ) {
  message = "Rango da noite, vamos jantar :D";
}

else if ( currentHour >= 14 && currentHour < 18 ) {
  message = "Vamos fazer um bolo pro café da tarde?";
}

else if ( currentHour > 11 && currentHour < 14 ) {
    message = "Hora do almoço!!!";
}

else if ( currentHour > 4 && currentHour < 11 ) {
    message = "Hmmm, cheiro de café recém-passado";
}

console.log(message);

// Crie uma variável chamada “weekDay” que receba a string “quarta-feira”.
// Utilizando if/else, implemente condicionais para que:
// Se nossa variável “weekDay” for “segunda-feira”, “terça-feira”, “quarta-feira”, “quinta-feira” ou “sexta-feira”, imprima “Oba, mais um dia de aprendizado na Trybe >:D”.
// Se for algum dia de fim de semana, imprima “FINALMENTE, descanso merecido UwU”.
// Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado :).

let weekDay = "domingo";

if ( weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "sexta-feira") {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}

else {
  console.log("FINALMENTE, descanso merecido UwU");
}

// Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
// Crie uma estrutura condicional com o switch/case que irá imprimir as seguintes mensagens:
// Caso 'aprovada', imprima “Parabéns, você foi aprovada(o)!”.
// Caso 'lista', imprima “Você está na nossa lista de espera”.
// Caso 'reprovada', imprima “Você foi reprovada(o)”.
// Caso default, imprima a mensagem de “Informação incorreta”.

let candidate = "reprovado";

switch(candidate) {
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;

  case "lista":
    console.log("Você está na nossa lista de espera");
    break;

  case "reprovado":
    console.log("Você foi reprovada(o)");
    break;

  default:
    console.log("Informação incorreta");
}