/*

Il programma dovrà mostrare un form da compilare con cui chiedere all'utente il numero di
 chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo
queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina
(formattato con massimo due decimali, per indicare centesimi sul prezzo).




Bonus:
Aggiungere stile in modo da avere una bella pagina per la nostra compagnia di treni.
Allego un'immagine di riferimento per chi non ha fantasia. :occhiolino:
Potete usare quel che vi pare (Bootstrap, bool12 , CSS plain)
Se volete potete anche spingervi al responsive ma l'importante è che facciate
funzionare il form e stampare correttamente i dati del biglietto!

*/


// 1 -
//form creazione biglietto
const inputName = document.getElementById('name');
const inputKm = document.getElementById('distance');
const inputAge = document.getElementById('age-selection');
const nextButton = document.getElementById('proceed');
const backButton = document.getElementById('back')

//form biglietto creato
const passengerName = document.getElementById('passenger-name');
const priceStamp = document.getElementById('prezzo');
const discount = document.getElementById('sconto');
const ticket = document.getElementById('ticket');


// 2
nextButton.addEventListener('click', function () {
    const nameValue = inputName.value;
    const kmValue = inputKm.value;
    const ageValue = inputAge.value;
    console.log(nameValue, kmValue, ageValue);

    let discountName = 'Prezzo Base'
    let price = kmValue * 0.21;
    console.log('prezzo base € :' + price);

    if (ageValue === 'min') {
        price *= 0.8;
        discountName = 'Prezzo Scontato 20%';
    } else if (ageValue === 'over-65') {
        price *= 0.6
        discountName = 'Prezzo Scontato 40%';
    }
    console.log('prezzo socntato € :' + price);


    passengerName.innerText = nameValue;
    priceStamp.innerText = '€ ' + price.toFixed(2);
    discount.innerText = discountName;

    ticket.className = 'd-block';
})


