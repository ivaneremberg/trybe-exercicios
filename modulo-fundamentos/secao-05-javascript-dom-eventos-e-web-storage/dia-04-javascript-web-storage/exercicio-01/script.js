window.onload = function() {

    let articleText = document.querySelector(".inputText");

    let savedBackgroundColor = localStorage.getItem("backroundColor");
    document.body.style.backgroundColor = savedBackgroundColor;

    let savedFontColor = localStorage.getItem("fontColor");
    articleText.style.color = savedFontColor;

    let savedFontSize = localStorage.getItem("fontSize");
    articleText.style.fontSize = savedFontSize;

    let savedLineSpacing = localStorage.getItem("lineSpacing");
    articleText.style.lineHeight = savedLineSpacing;

    let savedFontType = localStorage.getItem("fontType");
    articleText.style.fontFamily = savedFontType;
        
    
    let backgroudColorButtons = document.querySelectorAll(".border .backgroudColor button");
    for (let x of backgroudColorButtons) {
        x.addEventListener ("click", changeBackgroudColor);
    }
    function changeBackgroudColor (event) {
        document.body.style.backgroundColor = event.target.innerText;
        localStorage.setItem("backroundColor", event.target.innerText);
    }

    let fontColorButtons = document.querySelectorAll(".border .fontColor button");
    for (let x of fontColorButtons) {
        x.addEventListener ("click", changeFontColor);
    }
    function changeFontColor (event) {
        articleText.style.color = event.target.innerText;
        localStorage.setItem("fontColor", event.target.innerText);
    }

    let fontSizeButtons = document.querySelectorAll(".border .fontSize button");
    for (let x of fontSizeButtons) {
        x.addEventListener ("click", changeFontSize);
    }
    function changeFontSize (event) {
        articleText.style.fontSize = event.target.innerText;
        localStorage.setItem("fontSize", event.target.innerText);
    }

    let lineSpacingButtons = document.querySelectorAll(".border .lineSpacing button");
    for (let x of lineSpacingButtons) {
        x.addEventListener ("click", changeLineSpacing);
    }
    function changeLineSpacing (event) {
        articleText.style.lineHeight = event.target.innerText;
        localStorage.setItem("lineSpacing", event.target.innerText);
    }

    let fontTypeButtons = document.querySelectorAll(".border .fontType button");
    for (let x of fontTypeButtons) {
        x.addEventListener ("click", changeFontType);
    }
    function changeFontType (event) {
        articleText.style.fontFamily = event.target.innerText;
        localStorage.setItem("fontType", event.target.innerText);
    }
}