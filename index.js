// Call right after refresh clicked
window.onbeforeunload = function() {
    this.sessionStorage.setItem("reloading", "true");   
}

window.onload = function() {
    var reloading = this.sessionStorage.getItem("reloading");
    if (reloading) {
        this.sessionStorage.removeItem ("reloading");
        play();
    }
}


function play() {
var random1 = Math.ceil(Math.random()*6);    
var random2 = Math.ceil(Math.random()*6);  


var Dicee1 = document.querySelector("#firstDicee");
firstDicee.setAttribute("src", "images/dice" + random1 + ".png");

var Dicee2 = document.querySelector("#secondDicee");
secondDicee.setAttribute("src", "images/dice" + random2 + ".png");

var draw = document.querySelector("#title");
if (random1 === random2) {
    draw.textContent = "Draw";
} else if (random1 > random2) {
    draw.textContent = "🚩 Player 1 Wins!";
} else {
    draw.textContent = "Player 2 Wins! 🚩";
}
}