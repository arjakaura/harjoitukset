print("Hello, Word!");

function parilliset() {
    let i = 2;
    while (i <= 50) {
        println(i);
        i = i + 2;
    }
}


/*function parilliset() {
    for (let i = 2; i <= 50; i = i + 2) {
     println(i);
       
    }
}*/


function yhdestaJohonkin(x) {
    let i = 1;
    while (i <= x){
       println(i);
       i++;
    }
   }
   yhdestaJohonkin(12);

   function jostainJohonkin (a, b){
       while (a <= b){
           println (a);
           a++;
       }
   }
   jostainJohonkin();

 /* function tulostaTahtia(lkm){
       let tahti = "";
        for (i = 1; i<=lkm; i++){
          tahti = "*" + tahti;    
       }
      println(tahti);
   }*/

function tulostaTahtia(montako){
       let tahti = "";
       let lkm = 1;
         while (lkm <=montako){
             lkm = lkm + 1;
             tahti = "*" + tahti;    
       }
      println(tahti);
   } 
    tulostaTahtia(9);

   function tulostaNelio(sivunpituus){
       let lkm = 1;
        while (lkm <= sivunpituus) {
            lkm ++;
        tulostaTahtia(sivunpituus);
       }
   }   
    tulostaNelio(4);

    function tulostaSuorakulmio(leveys, korkeus){
        let lkm = 1;
        while (lkm <= korkeus){
            lkm ++;
            tulostaTahtia(leveys);
        }
    }
           tulostaSuorakulmio(17,3);


    function tulostaKolmio(koko){
        let lkm = 1;
        while (lkm <= koko){
            tulostaTahtia(lkm);
            lkm = lkm + 1;

           }
    }
        tulostaKolmio(5);

    function lukusarjanSumma(n){
        let i = 1;
        let summa = 0;
        while (i <= n){
            summa += i;
            i++;
        }
        return summa;
    }

    function kertoma(n){
        let i = 1
        let kertoma = 1;
        while (i <=n) {
            kertoma = kertoma * i;
            i++;
                              
        }
        return kertoma;
    }

    function ajaKaikki(){
       otsikko("parilliset");
        parilliset();
       otsikko("yhdestaJohonkin");
        yhdestaJohonkin(12);
       otsikko("jostainJohonkin");
        jostainJohonkin(5, 17);
        otsikko("tulostaTahtia");
        tulostaTahtia(9);
       otsikko("tulostaNelio");
        tulostaNelio(4);
        otsikko("tulostaSuorakulmio");
        tulostaSuorakulmio(17, 3);
        otsikko("tulostaKolmio");
        tulostaKolmio(5);
        otsikko("lukusarjanSumma");
        println(lukusarjanSumma(100));
       otsikko("kertoma");
        println(kertoma(10));

    }
        function otsikko(teksti){
            println(teksti);
            println('-'.repeat(teksti.length));

        }

         ajaKaikki();
    

        function rekursiivinenKertoma(n) {
            if (n == 0) {
                return 1;
            } else {
            return n * rekursiivinenKertoma(n - 1);
            }

        }


        function rekursiivinenSumma(n) {
            if(n == 0) {
                return 0;

            } else {
                return n + rekursiivinenSumma (n - 1);
            }

        }