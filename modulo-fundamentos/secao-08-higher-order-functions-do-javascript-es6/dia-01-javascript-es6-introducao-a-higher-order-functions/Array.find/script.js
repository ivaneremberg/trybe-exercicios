console.log('\nExample 01\n');
let idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];
console.log(idades.find((idade) => idade < 20)); // 18

console.log('\nExample 02\n');
idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];
console.log(idades.find((idade) => idade > 50)); // 73

console.log('\nExample 03\n');
idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];
console.log(idades.find((idade) => idade === 33)); // undefined

console.log('\nExample 04\n');
let numbers = [19, 21, 30, 3, 45, 22, 15];
const verifyNumbers = numbers.find((number) => number % 2 === 0);
console.log(verifyNumbers); // 30

console.log('\nUtilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:\n');
numbers = [19, 21, 15, 3, 45, 22, 30];
console.log(numbers.find((numbers) => numbers % 3 === 0 && numbers % 5 === 0)); //15

console.log('\nUtilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:\n');
const names = ['João', 'Irene', 'Fernando', 'Maria'];
console.log(names.find((name) => name.length > 5)); //Fernando

console.log('\nUtilize o find para encontrar a música com id igual a 31031685, caso ela exista:\n');
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];

console.log(musicas.find((musica)  => musica.id === '31031685')); //{ id: '31031685', title: 'Partita in C moll BWV 997' }