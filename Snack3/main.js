// Ciclo For
// snack 3
// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro

// Creazione di due array con un numero diverso di elementi
let array1 = [1, 2, 3];

let array2 = [4, 5, 6, 7, 8];

// Funzione per ottenere l'array più corto
function arrayPiuCorto1() {

    return array1.length <= array2.length ? array1 : array2;
}

// variabile del pulsante
let button = document.getElementById ('aggiungiButton')


// pulsante con un evento onclick per aggiungere elementi all'array più corto
button.addEventListener ('click',function() {

    let arrayPiuCorto = arrayPiuCorto1();

    arrayPiuCorto.push(Math.floor(Math.random() * 10) + 1); // Aggiungi un numero casuale

    console.log("Array 1:", array1);

    console.log("Array 2:", array2);

    

    // Disabilita il pulsante se gli array hanno lo stesso numero di elementi
    if (array1.length === array2.length) {

        button.disabled = true;
    }
})

// Terminato esercizio
