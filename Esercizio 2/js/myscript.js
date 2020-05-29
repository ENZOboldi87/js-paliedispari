// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// intro
alert('gioco del pari o dispari');

// chiediamo all utente pari o dispari
var pariOdispari = prompt('pari o dispari');

// chiediamo all utente il numero
var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));

// numero random del computer
var numeroRandom = Math.floor(Math.random() * 5) + 1;
console.log(numeroRandom);

// somma dei numeri
var somma = numeroUtente + numeroRandom;
console.log(somma);

// funzione

function Gioco(somma) {
  if (pariOdispari == 'pari' && somma % 2 == 0) {
    return true;
  }
  else if (pariOdispari == 'dispari' && somma % 2 != 0) {
      return true;
  }
  else {
    return false;
  }
}

// messaggio per il verdetto

if (Gioco(somma) == true) {
  alert('hai scelto ' + pariOdispari +'. Il tuo numero e ' + numeroUtente + ' Il computer ha scelto il numero ' + numeroRandom + ' La somma e ' + somma);
  alert('Hai vinto');
}
else {
  alert('hai scelto ' + pariOdispari +'. Il tuo numero e ' + numeroUtente + ' Il computer ha scelto il numero ' + numeroRandom + ' La somma e ' + somma);
  alert('Hai perso');
}
