let ukljucen = false;
let ukljucenMob = false;
let ukljuceneUslugeMob = false;

let header2 = document.querySelector(".header2");
let strelicaNaDole = document.querySelector("#strelica-na-dole");
let strelicaNaDoleMob = document.querySelector("#strelica-na-dole-mob");
let header2Opener = document.querySelector("#header2-opener");
let nav3Icon = document.querySelector("#nav-icon3");
let header2UslugeOpener = document.querySelector("#header2-usluge-opener");
let header2MobUsluge = document.querySelector(".header2-mob-usluge");

header2Opener.addEventListener('click', function() {

    if (ukljucen == false) {

        header2.classList.add("header2-open");
        strelicaNaDole.classList.add("okreni-strelicu");
        ukljucen = true;

    } else {

        header2.classList.remove("header2-open");
        strelicaNaDole.classList.remove("okreni-strelicu");
        ukljucen = false;

    }

});

nav3Icon.addEventListener('click', function() {

    if (ukljucenMob == false) {

        nav3Icon.classList.add('open');
        header2.classList.add("header2-open");
        ukljucenMob = true;

    } else {

        nav3Icon.classList.remove('open');
        header2.classList.remove("header2-open");
        ukljucenMob = false;
        header2MobUsluge.classList.remove("header2-mob-usluge-open");
        strelicaNaDoleMob.classList.remove("okreni-strelicu");
        ukljuceneUslugeMob = false;

    }

});

header2UslugeOpener.addEventListener('click', function() {

    if (ukljuceneUslugeMob == false) {

        header2MobUsluge.classList.add("header2-mob-usluge-open");
        strelicaNaDoleMob.classList.add("okreni-strelicu");
        ukljuceneUslugeMob = true;

    } else {

        header2MobUsluge.classList.remove("header2-mob-usluge-open");
        strelicaNaDoleMob.classList.remove("okreni-strelicu");
        ukljuceneUslugeMob = false;

    }

});
