"use strict";
/*meny const*/
const menubutton = document.querySelector(".menu-button")
const menu = document.querySelector(".menu")
/*Skapa träff knapp const*/
const createMeet = document.querySelector(".create-meet")
const createButton = document.querySelector(".button-create")

/*Sortering plats & storlek const*/


menubutton.addEventListener("click", function(event){
    event.preventDefault();
    menu.classList.toggle("open")
})

createButton.addEventListener("click", function(event){
    event.preventDefault();
    createMeet.classList.toggle("open")
})