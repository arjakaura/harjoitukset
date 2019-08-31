"use strict";
let i = 0;
let image = document.getElementById("kuvat");
function runner(){
   if (i <= 3){
      i++;
      image.src = "runner/"+"runner"+i+".png";
   }else{
      i = 0;
   }
   // document.getElementById("kuvat").src ="runner/runner1.png" + kuvalista[i];
}

setInterval(runner, 60);