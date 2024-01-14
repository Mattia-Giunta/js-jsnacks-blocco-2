// Ciclo For
// snack 4
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// Numero di volte da ripetere l'operazione
let numeroDiVolte = 5; 

for (let i = 0; i < numeroDiVolte; i++) {

    // Chiedi all'utente di inserire un numero
    let numero = parseInt(prompt("Inserisci un numero:"));

    // Verifica se il numero è pari o dispari
    if (!isNaN(numero)) {

        
        if (numero % 2 === 0) {// se il numero è pari

            console.log("Il numero inserito è pari:", numero);

        } else { // se il numero non è pari

            console.log("Il numero inserito è dispari. Il numero successivo è:", numero + 1);

        }
    } else {

        console.log("Inserisci un numero valido.");

    }
}

// Terminato esercizio