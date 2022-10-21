// Utilize o for para imprimir os elementos da lista groceryList com o console.log():
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

console.log("for");

for (let index = 0; index < groceryList.length; index +=1){
    console.log(groceryList[index]);
}

console.log("for of");

for (let index of groceryList){
    console.log(index);
}

// Utilize o for/of para imprimir os elementos da lista names com o console.log():
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let index of names){
    console.log(index);
}

let name0 = 'João';

for (let index of name0){
    console.log(index);
}