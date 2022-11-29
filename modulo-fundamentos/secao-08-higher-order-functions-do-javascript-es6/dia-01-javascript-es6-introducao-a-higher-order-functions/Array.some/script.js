console.log('\nExample 01\n');

let pessoas = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
];
let verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Gerência');
console.log(verificaCargo); // true

console.log('\nExample 02\n');

pessoas = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
];
verificaCargo = pessoas.some((pessoa) => pessoa.cargo === 'Product Owner');
console.log(verificaCargo); // false

console.log('\nExample 03\n');

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];
const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);
console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('X', listNames)); // false

console.log(`
Você ficou responsável por conferir a lista de pessoas convidadas de uma festa de casamento e precisa verificar se o nome da pessoa está ou não na lista. Para isso, você deve utilizar o código abaixo e desenvolver sua lógica a partir dele:
O nome das pessoas convidadas está salvo em um array chamado names;
A função hasName é responsável por verificar se o nome da pessoa está ou não na lista. Essa função recebe dois parâmetros: arr, que é o array com o nome das pessoas convidadas, e name, que é o nome a ser verificado na lista de convidados (array names).
Caso a pessoa esteja na lista de convidados, o retorno da função hasName deve ser true. Caso contrário, deve ser false.
`);

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
    return arr.some((arrName) => arrName === name);
};
console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));

// inline
// const hasName = (arr, name) => arr.some((arrName) => arrName === name);