const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
createDaysOfTheWeek();
  
// Parte 1
// Crie um calendário dinamicamente.
// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>;
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>;
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>.

const createDaysOfTheMonth = () => {  
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector("#days");
  
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const daysOfMonth = decemberDaysList[index];
    const daysOfMonthListItem = document.createElement('li');
    daysOfMonthListItem.innerHTML = daysOfMonth;
    daysOfMonthListItem.classList.add("day");
    switch (daysOfMonth) {
      case 24:
      case 31:
        daysOfMonthListItem.classList.add("holiday");
        break;
      case 4:
      case 11:
      case 18:
        daysOfMonthListItem.classList.add("friday");
        break;
      case 25:
        daysOfMonthListItem.classList.add("friday");
        daysOfMonthListItem.classList.add("holiday");
        break;
    }

    daysOfMonthListItem.addEventListener("mouseenter", zoomIn);
    daysOfMonthListItem.addEventListener("mouseleave", zoomOut);
    daysOfMonthListItem.addEventListener("click", addTaskToDay);

    monthDaysList.appendChild(daysOfMonthListItem);
  }
}

createDaysOfTheMonth();

// Parte 2
// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”;
// Sua função deve receber um parâmetro com a string 'Feriados';
// Adicione a este botão a ID "btn-holiday";
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function addButtonFeriado (param1) {
  const buttonFeriadosPlace = document.querySelector(".buttons-container");
  const buttonFeriados = document.createElement("button");
  buttonFeriados.id = "btn-holiday";
  buttonFeriados.innerText = param1;
  buttonFeriados.addEventListener("click", changeColorHoliday);
  buttonFeriadosPlace.appendChild(buttonFeriados);
}

addButtonFeriado("Feriado");

// Parte 3
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday";
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".
// De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.

function changeColorHoliday (event) {
  const holidays = document.querySelectorAll(".holiday");
  for (let x of holidays) {
    if (x.style.background === "black") {
      x.style.background = "unset";
    } else {
      x.style.background = "black";
    }
  }
}

// Parte 4
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira";
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

function addButtonSexta (param1) {
  const buttonSextaPlace = document.querySelector(".buttons-container");
  const buttonSexta = document.createElement("button");
  buttonSexta.id = "btn-friday";
  buttonSexta.innerText = param1;
  buttonSexta.addEventListener("click", changeColorFriday);
  buttonSextaPlace.appendChild(buttonSexta);
}

addButtonSexta("Sexta-Feira");

// Parte 5
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira;
// Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
// De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

function changeColorFriday (event) {
  const fridays = document.querySelectorAll(".friday");
  for (let x of fridays) {
    if (x.style.background === "orange") {
      x.style.background = "unset";
    } else {
      x.style.background = "orange";
    }
  }
}

// Parte 6
// Implemente duas funções que criem um efeito de “zoom”;
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// De olho na dica 👀: Você pode utilizar a propriedade event.target.

function zoomIn (event) {
  event.target.style.fontSize = "xxx-large";
}

function zoomOut (event) {
  event.target.style.fontSize = "";
}

// Parte 7
// Implemente uma função que adicione uma tarefa personalizada ao calendário;
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addTaskToCalendar (param1) {
  const addTaskList = document.querySelector(".my-tasks");
  const addTask = document.createElement("span");
  addTask.innerText = param1;
  addTaskList.appendChild(addTask);
}

addTaskToCalendar("Cozinhar");

// Parte 8
// Implemente uma função que adicione uma legenda com cor para a tarefa;
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task;
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function addColorToTask (param1) {
  const addColorToTaskList = document.querySelector(".my-tasks");
  const addColor = document.createElement("div");
  addColor.classList.add("task");
  addColor.style.backgroundColor = param1;
  addColor.addEventListener("click", selectTask);
  addColorToTaskList.appendChild(addColor);
}

addColorToTask("black");

// Parte 9
// Implemente uma função que selecione uma tarefa;
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada;
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.

function selectTask (event) {
  event.target.classList.add("task");
  if (event.target.className === "task selected") {
    event.target.classList.remove("selected");
  } else {
    event.target.classList.add("selected");
  }
}

// Parte 10
// Implemente uma função que atribua a cor da tarefa ao dia do calendário;
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada;
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).


function addTaskToDay (event) {
  // const addColortoTaskToday = document.getElementsByClassName("task selected")[0];
  if (document.querySelector(".task.selected")) {
    const addColortoTaskToday = document.querySelector(".task.selected");
    const color = addColortoTaskToday.style.backgroundColor;
    if (event.target.style.backgroundColor === color) {
      event.target.style.backgroundColor = "";
    } else {
      event.target.style.backgroundColor = color;
    }
  }
}

// Bônus
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto “COMPROMISSOS”, adiciona o item à lista “MEUS COMPROMISSOS” ao clicar no botão “ADICIONAR”;
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em “ADICIONAR”;
// Ao pressionar a tecla “enter” o evento também deverá ser disparado.
// De olho na dica 👀: Você pode utilizar a propriedade key.

const addApointment = document.querySelector(".task-list");
const buttonAddApoitment = document.querySelector("#btn-add");
const textFieldAddApoitment = document.querySelector("#task-input");

buttonAddApoitment.addEventListener("click", buttonAddApoitmentFunction);
textFieldAddApoitment.addEventListener("keyup", textFieldAddApoitmentFunction);

function buttonAddApoitmentFunction (event){
  if (textFieldAddApoitment.value) {
    const buttonAdd = document.createElement("li");
    buttonAdd.innerText = textFieldAddApoitment.value;
    addApointment.appendChild(buttonAdd);
    textFieldAddApoitment.value = "";
  } else {
    alert("Digite um compromisso!");
  }
}

function textFieldAddApoitmentFunction (event){
  if (event.key === "Enter" && textFieldAddApoitment.value) {
    const buttonList = document.querySelector(".task-list");
    const buttonAdd = document.createElement("li");
    buttonAdd.innerText = event.target.value;
    buttonList.appendChild(buttonAdd);
    textFieldAddApoitment.value = "";
  } else if (event.key === "Enter" && !textFieldAddApoitment.value) {
    alert("Digite um compromisso!");
  }
}



