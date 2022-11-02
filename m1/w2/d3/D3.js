  /* ESERCIZIO 1
  Scrivi un algoritmo per trovare il più grande tra due numeri interi.
  */

  let numero1= prompt('decidi un numero')
  let numero2=prompt('decidi un secondo numero')
  let totalShoppingCart=prompt('quanto decidi di spendere per il tuo carrello?')
  let cosimo=prompt('inserisci quello che ti pare, stringa o numero')
  let pod=prompt('calcola te me metti un numero ed io ti dico se è pari o dispari, e se ce la faccio me fai un caffè')

  if (numero1>numero2){
      console.log(numero1+ ' è il più grande tra i due')
  }else if (numero2>numero1){
      console.log(numero2+ ' è il più grande tra i due')
  }else{
      console.log('i due numeri sono uguali')
  }

  /* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
  */

  if (numero1!= 5 || numero2!= 5){
      console.log('not equal')
  }

  /* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  */

  if (numero1 % 5== 0){
  console.log('divisibile per 5')
  }else if (numero2 % 5==0) {
      console.log('divisibile per 5')
  }

   /* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
  */

  if(numero1==8 || numero2==8){
    console.log('uno dei numeri inseriti è uguale a 8')
  } else if(Number(numero1)+Number(numero2)==8){ 
    console.log('la somma dei due numeri da come risultato 8')
  } else if (Number(numero1)-Number(numero2)==8 || Number(numero2)-Number(numero1)==8){
    console.log('facendo la sottrazione dei due numeri da come risultato 8')
  }

  /* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
  */

  if (totalShoppingCart<50){
    console.log('il totale è ' +totalShoppingCart+ ' più il costo di spedizione')
  }else if(totalShoppingCart>50){
    console.log('il totale è ' + totalShoppingCart + ' senza costi di spedizione grazie alla promozione +50')
  }

  /* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
  */
  let sconto = totalShoppingCart/100*20
  if (totalShoppingCart - sconto<50){
    console.log('il totale è ' +(totalShoppingCart-sconto)+ ' più il costo di spedizione ma con il 20% di sconto')
  }else if(totalShoppingCart-sconto>50){
    console.log('il totale è ' + (totalShoppingCart-sconto) + ' senza costi di spedizione grazie alla promozione +50 e in più con il 20% di sconto, cioè fratè quanti soldi hai da spendere fio mio')
  }
  /* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
  */

 let x = 8 
 let y = 5
 let z = 2

 if (z>x && z>y){
  console.log(z+ ' è il numero più grande' )
 } else if(y>x && y>z){
  console.log(y+ ' è il numero più grande')
 }else if(x>y && x>z){
  console.log(x+' è il numero più grande')
 }

  /* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  */

  if (typeof(cosimo)== Number){
    console.log('cosimo è un numero')
  }else{
    console.log('cosimo non è un numero')
  }

  /* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  */
  if (pod%2==0){
    console.log('calcola fratè il numero che mi hai messo è pari')
  }else{
    console.log('non ti permettere mai più di mettermi un numero dispari')
  }
  

  /* ESERCIZIO 10*/
  /*Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  let val = 7
  if (val < 5) {
      console.log("Meno di 5");
      } else if (val < 10) {
      console.log("Meno di 10");
      } else {
      console.log("Uguale a 10 o maggiore");
      }
  



  /* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
  */

  const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  }

  me.city='Toronto'



  /* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */

 delete me['lastName']

  /* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */

  delete me.skills['css']

  /* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */


  let numeriacaso=[]

  numeriacaso.push('1','2','3','4','5','6','7','8','9','10')

  console.log(numeriacaso)



  /* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */

  numeriacaso.splice(9,9,'100')
  console.log(numeriacaso)
