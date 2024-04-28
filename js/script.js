let dote1 = document.querySelector("#dote1");
let dote2 = document.querySelector("#dote2");
let dote3 = document.querySelector("#dote3");
let dote4 = document.querySelector("#dote4");
let uslugeRightCont = document.getElementById("usluge-right-cont");

dote1.addEventListener('click', function() {

    uslugeRightCont.classList = "usluge-right-cont usluge-right-cont-1";
    dote1.classList = "usluge-right-dote usluge-right-dote-on";
    dote2.classList = "usluge-right-dote";
    dote3.classList = "usluge-right-dote";
    dote4.classList = "usluge-right-dote";

});

dote2.addEventListener('click', function() {

    uslugeRightCont.classList = "usluge-right-cont usluge-right-cont-2";
    dote1.classList = "usluge-right-dote";
    dote2.classList = "usluge-right-dote usluge-right-dote-on";
    dote3.classList = "usluge-right-dote";
    dote4.classList = "usluge-right-dote";

});

dote3.addEventListener('click', function() {

    uslugeRightCont.classList = "usluge-right-cont usluge-right-cont-3";
    dote1.classList = "usluge-right-dote";
    dote2.classList = "usluge-right-dote";
    dote3.classList = "usluge-right-dote usluge-right-dote-on";
    dote4.classList = "usluge-right-dote";

});

dote4.addEventListener('click', function() {

    uslugeRightCont.classList = "usluge-right-cont usluge-right-cont-4";
    dote1.classList = "usluge-right-dote";
    dote2.classList = "usluge-right-dote";
    dote3.classList = "usluge-right-dote";
    dote4.classList = "usluge-right-dote usluge-right-dote-on";

});

//

// let projektiJos = document.querySelector("#projekti-jos");
// let projektiPopup = document.querySelector("#projekti-popup");

// projektiJos.addEventListener('click', function() {

//     projektiPopup.classList.toggle("projekti-popup-visible");

// });