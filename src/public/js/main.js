var theme = document.getElementById("theme");
var background = document.getElementById("background");
let to_blue = document.getElementById("to-blue");
let to_red = document.getElementById("to-red");
let to_black = document.getElementById("to-black");
let myStorage = window.localStorage;


to_red.addEventListener("click", function(){
    localStorage.setItem('theme', 'red');
    window.location.reload();
});

to_black.addEventListener("click", function(){
    localStorage.setItem('theme', 'black');
    window.location.reload();
});

to_blue.addEventListener("click", function(){
    localStorage.setItem('theme', 'blue');
    window.location.reload();
});

let actual = localStorage.getItem('theme');
if (actual == 'red') {
    theme.href="https://bootswatch.com/4/journal/bootstrap.min.css";
    background.href = "/css/red.css";
} else if (actual == 'black') {
    theme.href = "https://bootswatch.com/4/darkly/bootstrap.min.css";
    background.href = "/css/black.css";
} else if (actual == 'blue') {
    theme.href = "https://bootswatch.com/4/cosmo/bootstrap.min.css";
    background.href = "/css/blue.css";
}