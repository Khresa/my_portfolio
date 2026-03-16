const text = "Student developer currently learning programming and exploring new technologies.";

let index = 0;

function typeEffect(){

if(index < text.length){

document.getElementById("typing").innerHTML += text.charAt(index);

index++;

setTimeout(typeEffect,50);

}

}

typeEffect();



function showMessage(){

alert("Scroll down to see my projects!");

}