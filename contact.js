"use strict";
/*meny const*/
const menubutton = document.querySelector(".menu-button")
const menu = document.querySelector(".menu")

//Öppnar och stänger menyn i header på mobil
menubutton.addEventListener("click", function(event){
    event.preventDefault();
    menu.classList.toggle("open")
})