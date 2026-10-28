"use strict";

const menubutton = document.querySelector(".menu-button")
const menu = document.querySelector(".menu")
const createMeet = document.querySelector(".create-meet")
const createButton = document.querySelector(".button-create")

menubutton.addEventListener("click", function(){
    menu.classList.toggle("open")
})

createButton.addEventListener("click", function(){
    createMeet.classList.toggle("open")
})