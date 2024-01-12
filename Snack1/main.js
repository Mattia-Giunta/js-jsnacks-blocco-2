// Ciclo While
// snack 1:
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50

// Array vuoto per memorizzare i numeri inseriti dall'utente
let numeriUtente = [];

// Ciclo per chiedere all'utente di inserire numeri finché la somma è inferiore a 50
while (numeriUtente.reduce((a, b) => a + b, 0) < 49) {

    // Chiedi all'utente di inserire un numero
    let numero = parseInt(prompt("Inserisci un numero:"));

    // Aggiungi il numero all'array
    numeriUtente.push(numero);

    // Stampa la somma degli elementi attuali nell'array
    let sommaAttuale = numeriUtente.reduce((a, b) => a + b, 0);
    console.log("Somma attuale degli elementi:", sommaAttuale);

    // Stampa della somma in pagina
    document.write("<h2>Somma dei numeri inseriti: " + sommaAttuale + "</h2>");
}

// Stampa l'array 
console.log("Array :", numeriUtente)

// terminato esercizio





