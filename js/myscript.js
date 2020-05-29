// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

alert('scopri se una parola e Palindroma o no')
// chiedo all utente di inserire una parola
var parolaUtente = prompt("inserisci una parola");

function palindromia(palindrom){
  var parola = parolaUtente.length;
  console.log(parola);
  var parolaDivisa = Math.floor(parola/2);
  console.log(parolaDivisa);
  for (var i = 0; i < parolaDivisa; i++) {
    if (parolaUtente[i] !== parolaUtente[parola - 1 - i]) {
      return false;
    }
  }
  return true;
}

var risposta = palindromia(parolaUtente)
console.log(risposta);
