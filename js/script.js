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

/*

1- recuperare gli input/bottoni
2- calcolare la distanza in km (*0.21)
3- calcolare il prezzo in base agli sconti
4-
5-
*/

// 1 -
const proceedButton = document.getElementById('proceed');
const backButton = document.getElementById('back')
console.log('button proceed: ', proceedButton);
console.log('button back', backButton);

const inputName = document.getElementById('name');
const inputKm = document.getElementById('distance');
const inputAge = document.getElementById('age-selection');
console.log('nome e cognome: ', inputName.value);
console.log('distanza da percorrere: ', inputKm.value);
console.log('età utente: ', inputAge.value);

const ticket = document.getElementById('ticket');

const normalAge = document.getElementById('age-selection').item(0).value;
console.log(normalAge);
const minorAge = document.getElementById('age-selection').item(1).value;
console.log(minorAge);
const majorAge = document.getElementById('age-selection').item(2).value;
console.log(majorAge);
// 2 -

let price = inputKm.value * 0.21;
console.log('Prezzo senza  sconto €: ', price);







