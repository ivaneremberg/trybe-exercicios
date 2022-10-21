let jogoRodrigo = [7, 58, 9, 13, 27, 35];
jogoRodrigo.sort(function(a, b) { 
    return a - b;
});

let n1 = Math.floor(Math.random() * 60) +1;
let n2 = Math.floor(Math.random() * 60) +1;
let n3 = Math.floor(Math.random() * 60) +1;
let n4 = Math.floor(Math.random() * 60) +1;
let n5 = Math.floor(Math.random() * 60) +1;
let n6 = Math.floor(Math.random() * 60) +1;

let megaSenaJogo = [n1, n2, n3 ,n4, n5, n6];
megaSenaJogo.sort(function(a, b) { 
    return a - b;
});


console.log("Numeros escolhidos");

for (let index = 0; index < jogoRodrigo.length; index += 1) {
    console.log(jogoRodrigo[index]);
}

console.log("Numeros sorteados");

for (let index = 0; index < megaSenaJogo.length; index += 1) {
    console.log(megaSenaJogo[index]);
}

let acertos = 0;

for (let iJogo = 0; iJogo < jogoRodrigo.length; iJogo += 1) {
    for (let iSorteio = 0; iSorteio < megaSenaJogo.length; iSorteio += 1) {
        if (jogoRodrigo[iJogo] === megaSenaJogo[iSorteio]) {
            acertos +=1;
        }
    }
}

console.log("Numero de acertos: " + acertos)