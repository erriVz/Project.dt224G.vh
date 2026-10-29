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
//Function som kollar att alla required fält i create-meet är ifylld
function publishCheck(){

    //Tömmer errormeddelanden
    missedFields.innerHTML = ""

    let correct = 0;

    if(selectTimeDate.value === ""){ 
        missedFields.innerHTML += "<p>Vänlig välj datum och tid</p>";
        correct = 1;
    }
    if(selectPlace.value === ""){ 
        missedFields.innerHTML += "<p>Vänlig välj plats för träffen</p>";
        correct = 1;
    }
    if(checkboxS.checked === false && checkboxM.checked === false && checkboxL.checked === false){
        missedFields.innerHTML += "<p>Vänlig fyll i välkomna storlekar</p>";
        correct = 1;
    }
    
    return correct === 0;
}
//Function som skapar ett object med information från create-meet formuläret
function createcardMeet(){
    //Hämtar data från create-meet form
    const eventMeet = {
        city: selectCity.value,
        timedate: selectTimeDate.value,
        place: selectPlace.value,
        small: checkboxS.checked,
        medium: checkboxM.checked,
        large: checkboxL.checked,
    };

    //Lägger eventMeet i meets
    meets.push(eventMeet);

    //Sparar meets
    storeMeets();

    return eventMeet;
}
//EventListener som kallar function när publish knappen klickas
publishButton.addEventListener("click", function(event){
    event.preventDefault();

    if(publishCheck()){
        const eventMeet = createcardMeet();
        let size = "";
        if(eventMeet.small===true){
            size += "Liten ";
        }
        if(eventMeet.medium===true){
            size += "Mellan ";
        }
        if(eventMeet.large===true){
            size += "Stor ";
        }
        if(eventMeet.small===true && eventMeet.medium===true && eventMeet.large===true){
            size = "Alla storlekar"
        }
        
        meetups.innerHTML += 
                "<article class='meetup-card'>" +
                    "<div class='stad-storlek'>" +
                        "<p class='stadpuff'>" + eventMeet.city + "</p>" +
                        "<p class='storlekpuff'>" + size + "</p>" +
                    "</div>" +
                    "<p class='platstext'>" + eventMeet.place + "</p>" +
                    "<p class='datumtext'>" + eventMeet.timedate + "</p>" +
                "</article>";

        //stänger Skapa träff rutan
        createMeet.classList.toggle("open")
    }

})

//Laddar in puffar när sidan laddas in
window.addEventListener("load", function(){
    loadMeets();
    for(let i=0; i<meets.length; i++){
        let size = "";
        if(meets[i].small===true){
            size += "Liten ";
        }
        if(meets[i].medium===true){
            size += "Mellan ";
        }
        if(meets[i].large===true){
            size += "Stor ";
        }
        if(meets[i].small===true && meets[i].medium===true && meets[i].large===true){
            size = "Alla storlekar"
        }
        
        meetups.innerHTML += 
                "<article class='meetup-card'>" +
                    "<div class='stad-storlek'>" +
                        "<p class='stadpuff'>" + meets[i].city + "</p>" +
                        "<p class='storlekpuff'>" + size + "</p>" +
                    "</div>" +
                    "<p class='platstext'>" + meets[i].place + "</p>" +
                    "<p class='datumtext'>" + meets[i].timedate + "</p>" +
                "</article>";
    }

})

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