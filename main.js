"use strict";

const menubutton = document.querySelector(".menu-button")
const menu = document.querySelector(".menu")

menubutton.addEventListener("click", function(){
    menu.classList.toggle("open")
})