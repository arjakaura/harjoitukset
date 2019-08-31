'use strict'
document.getElementById("config-form").onsubmit = paivitaTiedot;

function paivitaTiedot() {
    let otsikko = document.getElementById("otsikko").value;
    let paiva = document.getElementById("paiva").value;
    let aika = document.getElementById("aika").value;
    let viesti = document.getElementById("viesti").value;
    console.log ("ostikko: ", otsikko);
    console.log ("päivä : ", paiva);
    console.log ("Aika: ", aika);
    console.log ("Viesti: ", viesti);
    console.log ("nappula lähetä tiedot");

    let paivitetytTiedot = {
        otsikko: otsikko,
        aika: aika,
        paiva: paiva,
        viesti: viesti
    }    

    console.log (paivitetytTiedot);
    console.log (JSON.stringify(paivitetytTiedot));

    window.localStorage.setItem("config", JSON.stringify(paivitetytTiedot));


    return false;
}