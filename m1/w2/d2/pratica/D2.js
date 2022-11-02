/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype in Javascript sono:
number, string, object, array e boolean.
ognuno di essi è un tipo di dato diverso,
il primo comprende solo numeri con il quale possiamo fare operazioni di qualsiasi genere.
la stringa viene vista da javascript come un testo (che può esesere anche vuoto). 
il terzo è un oggetto a cui vengono date più variabili che lo gestiscono, se l'oggetto che stiamo descrivendo per esempio è un telefono gli diremo qual'è il prezzo, la marca, la grandezza e così via.
un array, è una lista di oggetti, quindi un raggruppamento di oggetti che ci serve da avere insieme, per esempio possiamo fare un array per fare la lista della spesa, così da mettere tutto ciò che dobbiamo comprare, ed essendo oggetti possiamo andare a ricavare ogni specificità come il prezzo.
infine il boolean ha solo due possibilità, o true o false dipendentemente dal risultato fa o non fa passare la variabile. 
*/


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = 'Giacomo'
console.log (myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let addendo1= 12
let addendo2= 20 
console.log(addendo1+addendo2) 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName= 'Abiuso'
console.log(myName)

const name = 'Giacomo'
name = 'Abiuso'  /* darà error perché non si può cambiare il valore di una costante*/



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4-x) 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).

*/

let name1 = 'john'
let name2 = 'John'

if (name1 == name2) {
  console.log ('i nomi sono uguale')
} else{
  console.log('i nomi sono diversi')
}
 

