// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// intro
alert('Scopri se una parola e Palindroma o no')

// chiedo all utente di inserire una parola
var parolaUtente = prompt("inserisci una parola").toUpperCase();

// scompongo la parola di quante lettere e composta
var parola = parolaUtente.length;

// divido la parola
var parolaDivisa = Math.floor(parola / 2 );

// funzione per confrontare la parola
function palindromia(parolaUtente){
  for (var i = 0; i < parolaDivisa; i++) {
    if (parolaUtente[i] !== parolaUtente[parola - 1 - i]) {
      return false;
    }
  }
  return true;
}

// variabili
var messaggio = "La parola non e palindroma" ;
var risposta = palindromia(parolaUtente)

// messaggio finale
if (risposta == true) {
  messaggio = 'La parola e palindroma'
  alert('hai inserito la parola ' +  parolaUtente + ' ' + messaggio );

}
else {
  alert('hai inserito la parola ' +  parolaUtente + ' ' + messaggio);
}
