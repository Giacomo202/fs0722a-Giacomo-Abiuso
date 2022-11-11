/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A FATTO
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
{

  let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  let sum = 0
  let i = 0


  while (i <= 10) {
    sum += arr[i]
    i++

  }

}
/* ESERCIZIO B FATTO
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

{
  let rannum = Math.floor(Math.random() * 21)

}



/* ESERCIZIO C FATTO
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: 'giacomo',
  surname: 'abiuso',
  age: '20'
}


/* ESERCIZIO D FATTO
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age





/* ESERCIZIO E FATTO
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
let skills = ['html anche se non è un linguaggio di programmazione', 'css anche se non è un linguaggio di programmazione', 'javascript', 'python']

Object.assign(me, skills)






/* ESERCIZIO F FATTO
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
lingua = 'italiano'
skills.push(lingua)
me = Object.assign(me, skills)


/* ESERCIZIO G FATTO
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

skills.pop()



// Funzioni

/* ESERCIZIO 1 FATTO
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

let dice = function () {
  var rannum = Math.floor(Math.random() * 7)

  return rannum
}

/* ESERCIZIO 2 FATTO
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
let whoIsBigger = function (a, b) {
  if (a > b) {

    console.log(`${a} è più grande`)

  } else if (a < b) {

    console.log(`${b} è più grande`)

  } else {

    console.log(`${a} e ${b} sono uguali`)

  }
}

/* ESERCIZIO 3 FATTO
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
let splitMe = function (str) {

  let arr = str.split(' ')

  return arr

}

/* ESERCIZIO 4 FATTO
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
let deleteOne = function (str, bool) {

  if (bool) {

    str = str.slice(1)

    return str

  } else {

    str = str.slice(0, length - 1)

    return str

  }

}

/* ESERCIZIO 5 FATTO
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

let onlyLetters = function (str) {

  let strNoNumber = str.replace(/[0-9]/gi, '')

  return strNoNumber

}

/* ESERCIZIO 6 FATTO
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
let isThisAnEmail = function (str) {
  let strFiltrata = str.includes('@' && '.com' || '.it')
  if (strFiltrata) {
    console.log('la mail inserita è valida')
  } else {
    console.log('la mail inserita non è valida')
  }

}

/* ESERCIZIO 7 FATTO
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

let whatDayIsIt = function () {
  let data = new Date()
  let giorno = data.getDay()
  let settimana
  if (giorno == 0) {
    settimana = 'domenica'
  } else if (giorno == 1) {
    settimana = 'lunedi'
  } else if (giorno == 2) {
    settimana = 'martedì'
  } else if (giorno == 3) {
    settimana = 'mercoledì'
  } else if (giorno == 4) {
    settimana = 'govedì'
  } else if (giorno == 5) {
    settimana = 'venerdì'
  } else if (giorno == 6) {
    settimana = 'sabato'
  }

  return settimana
}

/* ESERCIZIO 8 FATTO
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
let rollTheDices = function (num) {
  let i = 0
  let velues
  let x = 0
  let arr = []
  while (i < num) {

    values = dice()
    arr.push(values)
    x += values
    i++

  }
  console.log(arr)
  return x


}

/* ESERCIZIO 9 FATTO
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
let howManyDays=function(DD,MM,YYYY){
  let newData=new Date(YYYY,MM,DD)
  let newTempo=newData.getTime()
  console.log(newTempo)
  let data = new Date
  tempo=data.getTime()
  console.log(tempo)

  if (newTempo>tempo){
    let diff=newTempo-tempo;
    let giorniDiDiff= Math.floor(diff/8.64e+7);
    console.log(`alla data scelta mancano ${giorniDiDiff} giorni` )
  }
  else{
    let diff=tempo-newTempo;
    let giorniDiDiff= Math.floor(diff/8.64e+7);
    console.log(`dalla data scelta sono passati ${giorniDiDiff} giorni`)
  }

}



/* ESERCIZIO 10 FATTO
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
let isTodayMyBirthday = function () {
  let data = new Date()
  data.getMonth()
  data.getDate()
  if (data.getDate == 03 && data.getMonth == 09) {
    console.log('Auguri Giacomo!')
  } else {
    console.log('non è ancora il tuo compleanno')
  }

}
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11 FATTO
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
let oggetti = {
  oggetto1: 'giocattolo',
  oggetto2: 'videogioco',
  oggetto3: 'biberon'

}
let deleteProp = function (obj, str) {

  delete obj[str]
  console.log(obj)

}

/* ESERCIZIO 12 FATTO
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie= function(){
  let ultimoAnno=0
  for (let i=0; i<movies.length; i++){
    let currentYear=movies[i].Year
    if (currentYear>ultimoAnno){
      ultimoAnno=currentYear
    }
  }
  let ultimoFilm=movies.find(movies=> movies.Year==ultimoAnno)
  return ultimoFilm
  
}
/* ESERCIZIO 13 FATTO
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
let countMovies = function () {
  let i = 0
  for (film in movies) {
    i++
  }
  return i
}

/* ESERCIZIO 14 FATTO
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
let onlyTheYears = function () {
 let arr=[]
 for (let i=0; i<movies.length; i++){
  let currentYear=movies[i].Year
  arr.push(currentYear)
 }
 return arr
}

/* ESERCIZIO 15 FATTO
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium= function(){
  let Anni=2000
  let arr=[]
  for (let i=0; i<movies.length; i++){
    let currentYear=movies[i].Year
    if (currentYear<Anni){
      arr.push(movies[i])
    }
  }
  return arr
}

/* ESERCIZIO 16 FATTO
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
let sumAllTheYears=function(){
    let annoIniziale=0
    let arr=[]
    for (let i=0; i<movies.length; i++){
     let currentYear=movies[i].Year
     arr.push(currentYear)
    }
     let tot= arr.reduce((p,c) => eval(p) + eval(c),
    annoIniziale)
  
  return tot
}

/* ESERCIZIO 17 FATTO
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
let searchByTitle=function(str){
  let arr=[]
  for (let i = 0; i < movies.length; i++){
    let titolo=movies[i].Title
    if(titolo.includes(str)){
      arr.push(titolo)
    }
  }
  return arr
}

/* ESERCIZIO 18 FATTO
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
let searchAndDivide=function(str){
  let match=[]
  let unmatch=[]
  for (let i = 0; i < movies.length; i++){
    let titolo=movies[i].Title
    if(titolo.includes(str)){
      match.push(titolo)
    }else{
      unmatch.push(titolo)
    }
  }
  console.log(match)
  console.log(unmatch)
  

}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

let removeIndex=function(num){

  let arr=[]
  for (let i = 0; i < movies.length; i++){
    let titolo=movies[i].Title
    if(i!=num){

      arr.push(titolo)
      
    }
  }
  return arr
  

}

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20 FATTO
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
document.querySelector('#container')

/* ESERCIZIO 21 FATTO
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
document.querySelectorAll('td')

/* ESERCIZIO 22 FATTO
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

/*
let td=document.querySelectorAll('td')
for (let t in td){
  console.log(t.innertext)
}*/


/* ESERCIZIO 23 FATTO
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

/*let ancora=document.querySelectorAll('a')
ancora.style.backgroundcolor=red*/

/* ESERCIZIO 24 FATTO
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

/*let lista =document.querySelector('#mylist')
let nelemento='ciao'
lista.append(nelemento)*/

/* ESERCIZIO 25 FATTO
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
let eliminaLista = function () {
  let i = 0
  while (i < myList.length) {
    myList.pop(0)
  }
}

/* ESERCIZIO 26 FATTO
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

//lista.classList.add('test')

// [EXTRA] JS Avanzato

/* ESERCIZIO 27 FATTO
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
function halfTree(num) {
  for (let i = 0; i < num; i++) {
    let spazio = '';
    for (let x = 0; x <= i; x++) {
      spazio = spazio + '*';
    }
    console.log(spazio)
  }
}

/* ESERCIZIO 28 FATTO
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
function Tree(num) {
  for (let i = 0; i < num; i++) {
    let spazio = ' ';
    let spazio2 = ' ';
    for (let x = num; x > i; x--) {
      spazio += spazio2



    }
    for (let j = 0; j <= i; j++) {
      if (j == 0) {
        spazio = spazio + '*'
      } else {

        spazio = spazio + '**';
      }
    }
    console.log(spazio)
  }

}





/* ESERCIZIO 29 FATTO
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

let isItPrime=function(n){

  let i = 1;
  let count=0;
	
  while(count <= 1 && i <= n/2) {
    if(n % i == 0)  {
      count++;	
    }
    i++;
  }
	
  if (count == 1){
    console.log('Il numero è primo ');
  }   
  else {
    console.log('Il numero non è primo ');
  }
  
} 



/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
