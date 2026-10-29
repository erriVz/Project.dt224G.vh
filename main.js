"use strict";
/*meny const*/
const menubutton = document.querySelector(".menu-button")
const menu = document.querySelector(".menu")
/*Skapa träff knapp const*/
const createMeet = document.querySelector(".create-meet")
const createButton = document.querySelector(".button-create")

/*Sortering plats & storlek const*/
const cAlla = document.querySelector("#cAlla")
const cGBG = document.querySelector("#cGBG")
const cSthlm = document.querySelector("#cSthlm")
const cMal = document.querySelector("#cMal")

const sAlla = document.querySelector("#sAlla")
const sSma = document.querySelector("#sSma")
const sMel = document.querySelector("#sMel")
const sStor = document.querySelector("#sStor")

/*Const Skapaträff*/
const publishButton = document.querySelector(".button-publish")
const meetups = document.querySelector(".meetups")
const missedFields = document.querySelector(".missedfield")
const selectCity = document.querySelector("#select-city")
const selectTimeDate = document.querySelector("#select-timedate")
const selectPlace = document.querySelector("#select-place")
const checkboxS = document.querySelector("#small")
const checkboxM = document.querySelector("#medium")
const checkboxL = document.querySelector("#large")

let meets = [];

//Sparar meets i localstorage
function storeMeets(){
    localStorage.setItem("meets", JSON.stringify(meets));
}
//Läser in meets från localstorage
function loadMeets(){
    //Hämtar eventuell sparad meets
    const savedMeets = localStorage.getItem("meets")

    //uppdaterar meets[]
    if (savedMeets){
        meets = JSON.parse(savedMeets);
    }
}

function publishCheck(){

    //Tömmer errormeddelanden
    missedFields.innerHTML = ""

    if(selectTimeDate.value === ""){ 
        missedFields.innerHTML += "<p>Vänlig välj datum och tid"
    }
    if(selectPlace.value === ""){ 
        missedFields.innerHTML += "<p>Vänlig välj plats för träffen"
    }
    if(checkboxS.checked === false && checkboxM.checked === false && checkboxL.checked === false){
        missedFields.innerHTML += "<p>Vänlig fyll i välkomna storlekar</p>"
    }
    else {
        return true;
    }
}


//Öppnar och stänger menyn i header på mobil
menubutton.addEventListener("click", function(event){
    event.preventDefault();
    menu.classList.toggle("open")
})

//Öppnar och stänger Skapa träff form i meets.html
createButton.addEventListener("click", function(event){
    event.preventDefault();
    createMeet.classList.toggle("open")
})

//Ändrar utseende på buttons Plats när klickade för att se vad som är valt
cAlla.addEventListener("click", function(event){
    event.preventDefault();
    cAlla.classList.toggle("pressed")
    cGBG.classList.remove("pressed")
    cSthlm.classList.remove("pressed")
    cMal.classList.remove("pressed")
} )
cGBG.addEventListener("click", function(event){
    event.preventDefault();
    cAlla.classList.remove("pressed")
    cGBG.classList.toggle("pressed")
    cSthlm.classList.remove("pressed")
    cMal.classList.remove("pressed")
} )
cSthlm.addEventListener("click", function(event){
    event.preventDefault();
    cAlla.classList.remove("pressed")
    cGBG.classList.remove("pressed")
    cSthlm.classList.toggle("pressed")
    cMal.classList.remove("pressed")
} )
cMal.addEventListener("click", function(event){
    event.preventDefault();
    cAlla.classList.remove("pressed")
    cGBG.classList.remove("pressed")
    cSthlm.classList.remove("pressed")
    cMal.classList.toggle("pressed")
} )

//Ändrar utseende på buttons Storlek när klickade för att se vad som är valt
sAlla.addEventListener("click", function(event){
    event.preventDefault();
    sAlla.classList.toggle("pressed")
    sSma.classList.remove("pressed")
    sMel.classList.remove("pressed")
    sStor.classList.remove("pressed")
} )
sSma.addEventListener("click", function(event){
    event.preventDefault();
    sAlla.classList.remove("pressed")
    sSma.classList.toggle("pressed")
    sMel.classList.remove("pressed")
    sStor.classList.remove("pressed")
} )
sMel.addEventListener("click", function(event){
    event.preventDefault();
    sAlla.classList.remove("pressed")
    sSma.classList.remove("pressed")
    sMel.classList.toggle("pressed")
    sStor.classList.remove("pressed")
} )
sStor.addEventListener("click", function(event){
    event.preventDefault();
    sAlla.classList.remove("pressed")
    sSma.classList.remove("pressed")
    sMel.classList.remove("pressed")
    sStor.classList.toggle("pressed")
} )