var random1 = Math.ceil(Math.random()*6);    
var random2 = Math.ceil(Math.random()*6);  

var imageArray = ["images/dice1.png","images/dice2.png","images/dice3.png",
  "images/dice4.png","images/dice5.png","images/dice6.png"];

var result1;
  
if (random1 === 1) {
    result1 = imageArray[0];
} else if (random1 === 2) {
    result1 = imageArray[1];
} else if (random1 === 3) {
    result1 = imageArray[2];
} else if (random1 === 4) {
    result1 = imageArray[3];
} else if (random1 === 5) {
    result1 = imageArray[4]; 
} else {
    result1 = imageArray[5];       
}

var result2;
  
if (random2 === 1) {
    result2 = imageArray[0];
} else if (random2 === 2) {
    result2 = imageArray[1];
} else if (random2 === 3) {
    result2 = imageArray[2];
} else if (random2 === 4) {
    result2 = imageArray[3];
} else if (random2 === 5) {
    result2 = imageArray[4]; 
} else {
    result2 = imageArray[5];       
}


var firstDicee = document.querySelector("#firstDicee");
firstDicee.setAttribute("src", result1);

var firstDicee = document.querySelector("#secondDicee");
firstDicee.setAttribute("src", result2);


if (result1 === result2) {
    var draw = document.querySelector("#title");
    draw.textContent = "Draw";
} else if (result1 > result2) {
    var winner1 = document.querySelector("#title");
    winner1.textContent = "Player 1 Wins!";
} else {
    var winner2 = document.querySelector("#title");
    winner2.textContent = "Player 2 Wins!";
}