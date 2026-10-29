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
const sAllaSma = document.querySelector("#sSma")
const sAllaMel = document.querySelector("#sMel")
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