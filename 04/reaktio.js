"use strict";

// nappulaelementit taulukkoon
var nappulat = [
  document.getElementById('nappula0'),
  document.getElementById('nappula1'),
  document.getElementById('nappula2')
];

// onclick-käsittelyjät kaikille nappuloille
nappulat[0].onclick = function() { painallus(0) };
nappulat[1].onclick = function() { painallus(1) };
nappulat[2].onclick = function() { painallus(2) };

var nykyinen = 0;   // nykyinen aktiivinen nappula
var tulos = 0; //aseta tuloslaskuri

// käynnistetään kone
// arvotaan ensimmäinen aktiivinen nappula 1500ms päästä, sitten 1000ms
// 1500 on parametri setTimeout-funktiolle
// 1000 on parametri aktivoiSeuraava-funktiolle
var ajastin = setTimeout(aktivoiSeuraava, 1500, 1000);
const  nappulatArray = [];

// funktio, joka pyörittää konetta: aktivoi seuraavan nappulan ja ajastaa
// sitä seuraavan nappulanvaihdon
function aktivoiSeuraava(aika) {
  // arvo seuraava aktiivinen nappula
  var seuraava = arvoUusi(nykyinen);
  nappulatArray.push(seuraava);
  console.log(nappulatArray);
  console.log(nappulatArray.length);

  // päivitä nappuloiden värit: vanha mustaksi, uusi punaiseksi
  nappulat[nykyinen].style.backgroundColor = "black"; // vanha mustaksi
  nappulat[seuraava].style.backgroundColor = "red"; // uusi punaiseksi

  // aseta uusi nykyinen nappula
  nykyinen = seuraava;

  // aseta ajastin seuraavalle vaihdolle
  // Koodaa niin, että vaihtumistahti kiihtyy koko ajan!
  console.log("Aktiivinen " + nykyinen);
  ajastin = setTimeout(aktivoiSeuraava, aika, aika);

  function arvoUusi(edellinen) {
    // Tämä on vain demotarkoituksessa näin!
    // Koodaa tämä niin, että seuraava arvotaan. Muista, että sama ei saa
    // tulla kahta kertaa peräkkäin.
    var uusi = (edellinen + 1) % 3;
    var uusi = edellinen;
    do var uusi = getRandomInt(0, nappulat.length-1);//arvotaan uusi aktiivinen nappula
    while (uusi==edellinen);//
    return uusi;
  }
  if (nappulatArray.length>=10)
    lopetaPeli();
  }

// Tätä funktiota kutsutaan aina, kun jotain nappulaa painetaan
// Pelilogiikkasi vaatinee, että lisäät tänne jotain...
function painallus(i) {
  console.log("Painallus ", i);
  if (i==nykyinen){
    console.log("ok");
    tulos++;
    document.getElementById("tulos").innerHTML = tulos;
    } else{
      console.log("väärin");
      lopetaPeli();
    }
}

// Kutsu tätä funktiota, kun peli loppuu.
// Tämäkin tarvinnee täydennystä
function lopetaPeli() {
    clearTimeout(ajastin); // pysäytä ajastin
    for (var i = 0; i < 3; i++) {
      nappulat[i].style.backgroundColor = "red"; // aseta kaikki punaisiksi
      nappulat[i].onclick = null; // disabloi nappuloiden käsittelijät
    }
    document.getElementById("overlay").style.visibility = "visible";
    document.getElementById("gameover").innerHTML = "peli loppu! Tuloksesi:" + tulos;
    // ilmoita lopputulos
    // Vinkki: dokumentissa on valmiina taustaelementti ja elementti
    // lopputuloksen näyttämiseen. Aseta overlay-elementti näkyväksi
    // ja näytä tulos gameoover-elementissä
  }

  // generoi satunnaisen kokonaisluvun väliltä min - max
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
