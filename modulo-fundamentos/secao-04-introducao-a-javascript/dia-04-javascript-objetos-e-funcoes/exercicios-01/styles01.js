// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { 
        golden: 2,
        silver: 3
    };

let player = {
    name1: name,
    lastName1: lastName,
    age1: age,
    medals1: medals,
}

console.log("A jogadora " + player['name1'] + " " + player['lastName1'] + " tem " + player["age1"] + " anos de idade.");