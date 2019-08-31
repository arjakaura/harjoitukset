'use strict'
// var countDownDate = new Date("June 5, 2019 15:37:25").getTime();

var uusiAika = window.localStorage.getItem("config");

var uusiAikaObjekti;

if (uusiAika) {
  uusiAikaObjekti = JSON.parse(uusiAika);
  console.log ("uusi aika on: ", uusiAikaObjekti);
  document.getElementById("paaOtsikko").innerHTML = uusiAikaObjekti.otsikko;
} else {
  location.replace("config.html");
}




 var uusiAika2 = uusiAikaObjekti.paiva + " " + uusiAikaObjekti.aika;

 var aika = new Date(uusiAika2).getTime();





var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = aika - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
 // document.getElementById("main").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

 document.getElementById("d").innerHTML = days;
 document.getElementById("h").innerHTML = hours;
 document.getElementById("m").innerHTML = minutes;
 document.getElementById("s").innerHTML = seconds;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("ilmoitus").innerHTML = uusiAikaObjekti.viesti;
    document.getElementById("d").innerHTML = "0";
    document.getElementById("h").innerHTML = "0";
    document.getElementById("m").innerHTML = "0";
    document.getElementById("s").innerHTML = "0";
  }
}, 1000);


