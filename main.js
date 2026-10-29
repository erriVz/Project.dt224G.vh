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