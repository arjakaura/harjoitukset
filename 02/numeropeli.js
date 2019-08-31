'use strict'

// arvotaan arvattava numero väliltä 0-100, 0 ja sata myös mahdollisia
var arvattava = Math.floor(Math.random() * (100 + 1) );

// debug-tulostus kehittäjälle, kommentoi pois tuotantoversiosta
console.log("Arvattava: " + arvattava);

// muuttuja pelaajan nykyistä arvausta varten
// alkuarvo on undefined, jotta erotetaan, onko tehty yhtään arvausta
// vai ei
var arvaus = undefined;

// määrittele myös muuttujat pelaajan nykyistä arvausta, parasta
// alinta ja parasta ylintä arvausta varten sekä tehtyjen arvausten
// lukumäärää varten
var lkm = 0; 
var parasYlin = 100;
var parasAlin = 0;
var nollausnappi = arvaus


// kannattaa myös hakea tarvitsemasi DOM-elementit muuttujiin,
// jotta niitä on helpompi käyttää, muuttujanimet ovat lyhyempiä
// kirjoittaa kuin "document.getElementById(...)..."
var vihjeElem = document.getElementById('vihje');
var alempiElem = document.getElementById('alempi');
var ylempiElem = document.getElementById('ylempi');
var nollausnappi = document.getElementById('nollaa');
var lowerBar = document.getElementById('lower-bar');
var middleBar = document.getElementById('middle-bar');
var upperBar = document.getElementById('upper-bar');
//
// Event-käsittelijä lomakkeelle
//
function arvausTehty() {
  // haetaan käyttäjän syöttämä arvo ja tulkitaan se numeroksi
  var syote = document.getElementById('luku').value;
  arvaus = parseInt(syote);
  console.log("Arvaus: " + arvaus);
 
  // tyhjennetään lomake uutta arvausta varten
  document.getElementById('lomake').reset();
 //päivitä arvausten määrä
  lkm = lkm + 1;
  console.log("Arvauksia tehty:", lkm);
  vihjeElem.innerHTML = "Arvauksia tehty" + lkm;

  if (arvaus < arvattava) {
    vihjeElem.innerHTML = "Luku on suurempi ";
       if (arvaus > parasAlin) {
        parasAlin = arvaus;
        console.log("Paras alin ",  parasAlin);
      alempiElem.innerHTML = "Paras alin "  + parasAlin;
      lowerBar.style.width = parasAlin + "%";
      middleBar.style.width = 100 - parasAlin - (100 - parasYlin) + "%";
      document.getElementById("lower").innerHTML = parasAlin;
      }
  } 
  else if (arvaus > arvattava) {
    vihjeElem.innerHTML = "Luku on pienempi" ;  
      if (arvaus < parasYlin) {
        parasYlin = arvaus;
        console.log("Paras ylin ",  parasYlin ); 
        ylempiElem.innerHTML = "Paras ylin "  + parasYlin;
        upperBar.style.width = 100 - parasYlin + "%";
        middleBar.style.width = 100 - parasAlin - (100 - parasYlin) + "%";
        document.getElementById("upper").innerHTML = parasYlin;

              }
  } 
  else {
    vihjeElem.innerHTML = "Arvaus " + arvaus + " Onnittelut, arvasit oikein! Arvauksia " + lkm + "."
   var text = "";
    var i = 0;
    while (i <=arvattava) {
      text += "<br>" + i;
      i++;
    }
    document.getElementById("numerot").innerHTML = text;

    

  }
  

  /*                                         

  Toteuta tähän algoritmi:

    Päivitä arvausten määrä
    Jos pelaajan arvaus on pienempi kuin arvattava,
        Jos arvaus on parempi kuin nykyinen alempi arvaus,
          päivitä alempi arvaus
        Anna vihje "Luku on suurempi"
    Jos pelaajan arvaus on suurempi kuin arvattava,
        Jos arvaus on parempi kuin nykyinen ylempi arvaus,
          päivitä ylempi arvaus
        Anna vihje "Luku on pienempi"
    Jos arvaus on yhtäsuuri kuin arvattava
        Kirjoita vihje-elementtiin onnitttelut ja arvausten määrä
        Kirjoita numerot-elementtiin luvut nollasta arvattavaan
          Huomaa, että numerot on kirjoitettava html-koodina, jotta
          ne näytetään oikein!
  */




  // onsubmit-käsittelijä palauttaa false, jotta lomaketta ei oikeasti lähetettäisi
  // lähetys lataisi sivun uudelleen ja nollaisi koko pelin
  return false;
}

// asetetaan tapahtumankäsittelijä lomakkeelle, siis määritellään,
// mitä funktiota kutsutaan, kun lomake lähetetään
document.getElementById('lomake').onsubmit = arvausTehty;
function nollaa() {
  console.log(arvaus);
  /*nollaa.innerHTML = arvaus;
     }
 nollausnappi.onclick = nollaa;*/
     location.reload();
    }
