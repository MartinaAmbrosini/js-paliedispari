// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

const send = document.getElementById("send");

send.addEventListener("click", function() {

    // Chiediamo all'utente di scegliere pari o dispari e inserisce un numero da 1 a 5

    var pariOdispari = document.getElementById("pariOdispari").value;

    var userNum = parseInt(document.getElementById("num").value);

    // generiamo numero random (da 1 a 5)

    var random = Math.floor(Math.random() * 5) + 1 ;

    console.log(random);

    // sommiamo i numeri usando funzione per stabilire se la somma è pari o dispari

    var somma = sommaNumeri(userNum, random);

    console.log(somma);

    // stampiamo chi ha vinto

    if(somma % 2 === 0 && pariOdispari === "pari") { //la somma è pari e l'utente ha scelto pari
        alert("Hai indovinato");
    } else if (somma % 2 === 1 && pariOdispari === "dispari") { //la somma è dispari e l'utente ha scelto dispari
        alert("Hai indovinato");
    } else { // altrimenti in tutti gli altri casi non ha indovinato
        alert("Non hai indovinato");
    }
});


// funzione che, dati in ingresso due numeri, ne restituisce la somma.

function sommaNumeri(num1, num2) {
    var risultato = num1 + num2;
    return risultato 
}