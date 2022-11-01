const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
firstLi.addEventListener("click", recebeClick);
secondLi.addEventListener("click", recebeClick);
thirdLi.addEventListener("click", recebeClick);

function recebeClick (eventoDeOrigem) {
    let techClass = document.querySelector(".tech");
    techClass.classList.remove("tech");
    eventoDeOrigem.target.classList.add("tech");
    input.value = "";
}
  
// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener("keyup", recebeText);

function recebeText (eventoDeOrigem) {
    let changeText = document.querySelector(".tech");
    changeText.innerText = eventoDeOrigem.target.value;
}

// input.addEventListener('input', (event) => {
//     const techElement = document.querySelector('.tech');
//     techElement.innerText = event.target.value;
//   });

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
let clickSpotrybefy = document.getElementById("my-spotrybefy");
clickSpotrybefy.addEventListener("dblclick", openWindow);

function openWindow (eventoDeOrigem) {
    window.location.href = "https://www.google.com";
}

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
let hoverSpotrybefy = document.getElementById("my-spotrybefy");
hoverSpotrybefy.addEventListener("mouseover", changeColor);
hoverSpotrybefy.addEventListener("mouseout", changeColor1);

function changeColor (eventoDeOrigem) {
    eventoDeOrigem.target.style.color = "yellow";
}

function changeColor1 (eventoDeOrigem) {
    eventoDeOrigem.target.style.color = "unset";
}


// Segue abaixo um exemplo do uso de event.target:
const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.