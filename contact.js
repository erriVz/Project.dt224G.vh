"use strict";
/*meny const*/
const menubutton = document.querySelector(".menu-button")
const menu = document.querySelector(".menu")

//Öppnar och stänger menyn i header på mobil
menubutton.addEventListener("click", function(event){
    event.preventDefault();
    menu.classList.toggle("open")
})

/*contact formulär const*/
const cName = document.querySelector("#c-name")
const cEmail = document.querySelector("#c-email")
const cMessage = document.querySelector("#c-message")
const contactmessage = document.querySelector(".contactmessage")
const contactButton = document.querySelector(".button-sub")

let questions = [];

function checkContact(){
    contactmessage.innerHTML ="";
    let nowrong = 0;
    if(cName.value.trim()===""){
        contactmessage.innerHTML += "<p class='errormsg'>Namn saknas</p>"
        nowrong = 1;
    }
    if(cEmail.value.trim()===""){
        contactmessage.innerHTML += "<p class='errormsg'>Email saknas</p>"
        nowrong = 1;
    }
    if(cMessage.value.trim()===""){
        contactmessage.innerHTML += "<p class='errormsg'>Lämna ett meddelande tack :)</p>"
        nowrong = 1;
    }

    return nowrong === 0;
}

contactButton.addEventListener("click", function(event){
    event.preventDefault();

    if(checkContact()){
        contactmessage.innerHTML = "<p class='tnxmsg'>Vi besvara din fråga så for vi kan :)</p>"
        const contactQ = {
            name: cName.value,
            email: cEmail.value,
            Message: cMessage.value,
        }
        
        questions.push(contactQ);

        localStorage.setItem("questions", JSON.stringify(questions));

    }
})