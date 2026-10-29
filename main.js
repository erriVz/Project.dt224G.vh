"use strict";

const menubutton = document.querySelector(".menu-button")
const menu = document.querySelector(".menu")
const createMeet = document.querySelector(".create-meet")
const createButton = document.querySelector(".button-create")

menubutton.addEventListener("click", function(event){
    event.preventDefault();
    menu.classList.toggle("open")
})

createButton.addEventListener("click", function(event){
    event.preventDefault();
    createMeet.classList.toggle("open")
})