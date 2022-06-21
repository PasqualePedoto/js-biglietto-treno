/*

************ STEP DA SEGUIRE ************

1) Chiediamo all'utente il numero di km che desidera percorrere
    * A questo punto memorizziamo quest'informazione e la stampiamo a mo' di controllo
2) Chiediamo all'utente la sua età in modo da valutare un eventuale sconto
    * A questo punto memorizziamo quest'informazione e la stampiamo a mo' di controllo
3) A questo punto, in primis, calcoliamo il costo del viaggio a quanto ammonta in funzione del numero di km da percorrere
    * A questo punto memorizziamo quest'informazione e la stampiamo a mo' di controllo
4) Successivamente confrontiamo l'età dell'utente con le soglie d'età che aderiscono allo sconto
    * Valutiamo se quindi è minorenne (età inferiore ai 18 anni) oppure è over 65
    * A questo punto, dovesse aderire a qualche forma di sconto, verrà calcolato il prezzo scontato
5) Raccogliamo le varie informazioni 
6) Manipoliamo l'HTML in modo tale da ottenere l'output desiderato


*/

/*
*** Step 1 *** - Chiediamo quanti km desidera percorrere
*/

/* Ci serviamo del parseInt per restituirci un tipo di dato number */
const kmNumber = parseInt(prompt('Quanti chilometri desideri percorrere?','345'));
console.log('L\'utente desidera percorrere ' + kmNumber + ' km.');
console.log(typeof kmNumber);

/* 
*** Step 2 *** - Chiediamo all'utente la sua età in modo da valutare un eventuale sconto
*/

/* Ci serviamo del parseInt per restituirci un tipo di dato number */
const userAge = parseInt(prompt('Quanti anni hai?','22'));
console.log('L\'utente ha ' + userAge + ' anni.');
console.log(typeof userAge);


/*
*** Step 3 *** - A questo punto, in primis, calcoliamo il costo del viaggio a quanto ammonta in funzione del numero di km da percorrere
*/

let initialTripPrice = (0.21 * kmNumber).toFixed(2);
console.log('Il prezzo del vaiggio ammonta a ' + initialTripPrice + ' <i class="fa-solid fa-euro-sign"></i>.');

/*
*** Step 4 *** - Successivamente confrontiamo l'età dell'utente con le soglie d'età che aderiscono allo sconto
*/

/* Realizziamo la logica servendoci del costrutto if */

let saleMessage = null;
let cutTripPrice = null;

if(userAge < 18){
    /* Formula per il calcolo dello sconto */
    cutTripPrice = (initialTripPrice - ((initialTripPrice * 20) / 100)).toFixed(2);
    saleMessage = 'E\' previsto uno sconto del 20 % per gli under 18, il prezzo scontato ammonta a: ' + cutTripPrice + ' <i class="fa-solid fa-euro-sign"></i>.';
    console.log(saleMessage);
}else if(userAge > 65){
    /* Formula per il calcolo dello sconto */
    cutTripPrice = (initialTripPrice - (initialTripPrice * 40) / 100).toFixed(2);
    saleMessage = 'E\' previsto uno sconto del 40 % per gli over 65, il prezzo scontato ammonta a: ' + cutTripPrice + ' <i class="fa-solid fa-euro-sign"></i>.';
    console.log(saleMessage);
}

/*
*** Step 5 - Raccogliamo le varie informazioni 
*/

let ticketOutput = null;

if(cutTripPrice === null){
    ticketOutput = `Il viaggiatore, di anni <strong>${userAge}</strong>, 
    percorrerà <strong>${kmNumber}</strong> chilometri. Il prezzo del ticket ammonta a <strong>${initialTripPrice} <i class="fa-solid fa-euro-sign"></i></strong>.`;
}else{
    if(userAge < 18){
        ticketOutput = `Il viaggiatore, di anni <strong>${userAge}</strong>, 
            percorrerà <strong>${kmNumber}</strong> chilometri. Il prezzo del ticket ammonterebbe a <strong>${initialTripPrice} <i class="fa-solid fa-euro-sign"></i></strong>,
            ma poichè l'età del passeggero rientra nella <strong>fascia di prezzo "under 18"</strong>, otterrà uno <strong>sconto del 20%</strong>
            diminuendo il costo del ticket a <strong>${cutTripPrice} <i class="fa-solid fa-euro-sign"></i></strong>.`;
    }else{
        ticketOutput = `Il viaggiatore, di anni <strong>${userAge}</strong>, 
            percorrerà <strong>${kmNumber}</strong> chilometri. Il prezzo del ticket ammonterebbe a <strong>${initialTripPrice} <i class="fa-solid fa-euro-sign"></i></strong>,
            ma poichè l'età del passeggero rientra nella <strong>fascia di prezzo "over 65"</strong>, otterrà uno <strong>sconto del 40%</strong> diminuendo
            il costo del ticket a <strong>${cutTripPrice} <i class="fa-solid fa-euro-sign"></i></strong>.`;
    }
}

/*
*** Step 6 *** - Manipoliamo l'HTML in modo tale da ottenere l'output desiderato
*/

const bersaglio = document.getElementById('ticket-output');
bersaglio.innerHTML = ticketOutput;
