// Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};
// Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
console.log("O livro favorito de " + leitor["nome"] + " " + leitor["sobrenome"] + " se chama '" + leitor["livrosFavoritos"][0]["titulo"] + "'.");

// Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:
// {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
// }

leitor["livrosFavoritos"].push ( 
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',    
    },
);

// Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.

function countLivrosFavoritos () {
    let count = 0;
    for ( x in leitor["livrosFavoritos"]) {
        // console.log(leitor["livrosFavoritos"][x]["titulo"]);
        count = count += 1;
    }
    return count;
}
console.log(leitor.nome + " tem " + countLivrosFavoritos() + " livros favoritos.");
// OU
console.log(leitor['nome'] + ' tem ' + leitor['livrosFavoritos'].length + ' livros favoritos.');
// OU
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');