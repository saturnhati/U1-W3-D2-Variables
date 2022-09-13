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
    alert("Inserisci un NUMERO, non una stringa!")
    }
    // se la somma è un numero, scrivi il risultato in un div con id "resultsAdd"
    else{
    let resultsAdd = document.getElementById("resultsAdd")
    resultsAdd.innerHTML = parseInt(primoNumero.value) + parseInt(secondoNumero.value);
    }
}

// PROVA DI UNA DIFFERENZA IN INPUT

function diffsNumbers(){
    // se la somma non un numero, dà errore
    if(isNaN(parseInt(terzoNumero.value) + parseInt(quartoNumero.value))){
    console.log('errore');
    // document.getElementById("results").innerHTML = "errore"
    alert("Inserisci un NUMERO, non una stringa!")
    }
    // se la somma è un numero, scrivi il risultato in un div con id "resultsDiff"
    else{
    let resultsDiff = document.getElementById("resultsDiff")
    resultsDiff.innerHTML = parseInt(terzoNumero.value) - parseInt(quartoNumero.value);
    }
}










// let nome = "Mirtilla";
// console.log(nome);
// var utente = "cliente";
// console.log(utente);
// const PI = 3.14;
// console.log(PI);

// //nome = "Lilla";
// console.log(nome);
// utente = "amministratore";
// console.log(utente);
// //PI = 4;
// //console.log(PI);

// let primoLavoro = "developing";
// let secondoLavoro = "formazione";

// let lavoro = primoLavoro + " e " + secondoLavoro;

// console.log('io mi occupo di: ' + lavoro);
// console.log('io mi occupo di: ' + primoLavoro + " e " + secondoLavoro);

// let JS = true;
// console.log('Let JS: ' + JS);

// let anno;
// console.log(anno);

// anno = 1991;

// const annoAttuale = 2021;

// let anniMirtilla = annoAttuale - anno;
// console.log(anniMirtilla);

// console.log(nome + " ha: " + anniMirtilla + " anni");

// let a = 10 + 5;
// let b = 3;
// let c = 10;
// let somma = b + c + 2;
// console.log(somma);

// c++;
// console.log(c);
// a--;
// console.log(a);

// let nomePet = "Billo";
// let colorePet = "rosso";
// const pet = "il nome del pet: " + nomePet + "e il suo colore è: " + colorePet;
// console.log(pet);

// // sintassi letterale con backtick -> apice inverso
// const pet1 = `il nome del pet: ${nomePet}  e il suo colore è: ${colorePet}`;
// console.log(pet1);

// console.log('string con \n\ righe \n\ multiple');
// console.log(`string con 
// righe 
// multiple`);