let myName = 'Gaia'
console.log(`My name is ${myName}`)
myName = 'Satu'
console.log(`My nickname is ${myName}`)
console.log(`This variable is a ${typeof myName}`)
// La variabile let si può aggiornare ma non si può ri-dichiarare
// let nome = 'Satu' " => il file mi dà errore

var color = 'orange'
console.log(`My favorite color is ${color}`)
var color = 'purple'
console.log(`My favorite color is ${color}`)
// La variabile var si può ri-dichiarare e aggiornare

const answer = 42
console.log(`The answer is ${answer}`)
console.log(`This constant is a ${typeof answer}`)
// La costante è fissa e non può essere ri-dichiarata o aggiornata
// answer = 3 => il file mi dà errore

let variable = true
console.log(`The variable is ${variable}`)
// Posso assegnare un valore booleano a una variabile (true or false)

// PROVA DI UNA SOMMA IN INPUT

// Dichiaro e assegno le variabibili degli input
let primoNumero = document.getElementById("primoNumero");
let secondoNumero = document.getElementById("secondoNumero");
let terzoNumero = document.getElementById("terzoNumero");
let quartoNumero = document.getElementById("quartoNumero");

function addsNumbers(){
    // se la somma non un numero, dà errore
    if(isNaN(parseInt(primoNumero.value) + parseInt(secondoNumero.value))){
    console.log('errore');
    alert("Inserisci un NUMERO!")
    }
    // se la somma è un numero, scrivi il risultato in un div con id "resultsAdd"
    else{
    let resultsAdd = document.getElementById("resultsAdd")
    resultsAdd.innerHTML = parseInt(primoNumero.value) + parseInt(secondoNumero.value)
    }
}

// PROVA DI UNA DIFFERENZA IN INPUT

function diffsNumbers(){
    // se la somma non un numero, dà errore
    if(isNaN(parseInt(terzoNumero.value) + parseInt(quartoNumero.value))){
    console.log('errore');
    // document.getElementById("results").innerHTML = "errore"
    alert("Inserisci un NUMERO!")
    }
    // se la somma è un numero, scrivi il risultato in un div con id "resultsDiff"
    else{
    let resultsDiff = document.getElementById("resultsDiff")
    resultsDiff.innerHTML = parseInt(terzoNumero.value) - parseInt(quartoNumero.value)
    }
}

// PROVA COUNTER

let counter = 0

function clickCounter(){
    counter ++
    document.getElementById("clicksNumber").innerHTML = counter
 }

 function resetCounter(){
    counter = 0
    document.getElementById("clicksNumber").innerHTML = counter
 }