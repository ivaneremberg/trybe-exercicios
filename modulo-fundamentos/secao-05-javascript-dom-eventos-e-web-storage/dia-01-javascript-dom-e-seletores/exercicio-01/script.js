document.getElementById("header-container").style.background = "green";
// document.querySelector("#header-container").style.color = "black";

document.getElementById("footer-container").style.background = "black";
// document.querySelector("#footer-container").style.background = "green";

for (let x of document.getElementsByClassName("emergency-tasks")) {
  x.style.background = "orange";
}

for (let x of document.getElementsByClassName("no-emergency-tasks")) {
  x.style.background = "yellow"
}

for (let x of document.querySelectorAll(".emergency-tasks div h3")) {
  x.style.background = "blue";
}

for (let x of document.querySelectorAll(".no-emergency-tasks div h3")) {
  x.style.background = "black";
}

// document.getElementsByClassName("emergency-tasks").style.background = "blue";
// document.getElementById("div").style.background = "black";
// document.querySelectorAll(".emergency-tasks")[0].styles.color = "yellow";
// document.querySelectorAll("div")[0].style.background = "black";
// document.getElementById("body").style.background = "yellow";
// document.getElementsByTagName("container").style.color = "black";
// document.querySelector("#container").style.backgroundColor = "black";
// document.querySelector("#header-container").innerHTML.style.color = "black";
// document.getElementsByClassName(".emergency-tasks").style.background = "black";
// document.getElementsByTagName("section").style.background = "black";