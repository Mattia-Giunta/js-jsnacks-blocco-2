// Ciclo While
// snack 2
// genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale

// Genera un numero casuale tra 1 e 100
let numeroCasuale = Math.floor(Math.random() * 100) + 1;

console.log('Il numero estratto:',numeroCasuale)

// Avvia il gioco utilizzando un ciclo while
while (true) {

    // Chiedi all'utente di indovinare il numero
    let tentativo = parseInt(prompt("Indovina il numero (tra 1 e 100):"));

    // Verifica se il tentativo è corretto
    if (!isNaN(tentativo)) {

        if (tentativo === numeroCasuale) {

            alert("Complimenti! Hai indovinato il numero!");

            break; // Esci dal ciclo while quando il numero viene indovinato

        } else if (tentativo < numeroCasuale) {

            alert("Il numero è troppo basso. Prova di nuovo.");

        } else {

            alert("Il numero è troppo alto. Prova di nuovo.");
        }
    } else {

        alert("Inserisci un numero valido.");
    }
}

// Terminato esercizio