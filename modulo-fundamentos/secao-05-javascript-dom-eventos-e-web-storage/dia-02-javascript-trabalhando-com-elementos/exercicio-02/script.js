// Crie um irmão para elementoOndeVoceEsta.
let pe = document.getElementById("elementoOndeVoceEsta").parentElement;
let addSibling = document.createElement("section");
addSibling.innerText = "Teste irmão";
pe.appendChild(addSibling);


// Crie um filho para elementoOndeVoceEsta.
let filho = document.getElementById("elementoOndeVoceEsta");
let addchild = document.createElement("section");
addchild.innerText = "Teste filho";
filho.appendChild(addchild);


// Crie um filho para primeiroFilhoDoFilho.
let filhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
let addchilds = document.createElement("section");
addchilds.innerText = "Teste filho do filho";
filhoDoFilho.appendChild(addchilds);


// A partir desse filho criado, acesse terceiroFilho.
let tf = addchilds.parentElement.parentElement.nextElementSibling;
let addchildss = document.createElement("p");
addchildss.innerText = "terceiroFilho";
filhoDoFilho.appendChild(addchildss);