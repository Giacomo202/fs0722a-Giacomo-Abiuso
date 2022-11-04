//la funzione cifra, farà si che al click del tasto verrà printato l'elemento al suo interno sullo 'screen'
function cifra (elemento){

    let cifraCliccata = elemento.textContent;
    document.getElementById('screen').value += cifraCliccata;

}

//la funzione tot va a prendere ciò che è scritto nello 'screen' e lo trasformerà da stringa a numero così da poter fare l'operazione
function tot(){

    let numeri= document.getElementById('screen');
    numeri.value= eval(numeri.value);

}
//la funzione canc va a prendere direttamente il valore di screen (ovvero ciò che vi è dentro) e lo va a cambiare con una striinga vuota
function canc(){

    document.getElementById('screen').value='';

}
//la funzione del permette di eliminare l'ultima cifra dello schermo
function del(){

    let str=document.getElementById('screen').value;
    str=str.slice(0,-1);
    document.getElementById('screen').value=str;

    str=Math.sin(eval(str))

    let snd=new Audio('Vivo per lei con testo -Andrea Bocelli e Giorgia.mp3')
    snd.play
}

//la funzione sin ci permette di fare il seno di un numero 
function sin(){
    
    let str=document.getElementById('screen').value;
    str=Math.sin(eval(str))
    document.getElementById('screen').value=str 

}

//la funzione cos ci permette di fare il seno di un numero 
function cos(){
    
    let str=document.getElementById('screen').value;
    str=Math.cos(eval(str))
    document.getElementById('screen').value=str
    
}

//la funzione sqrt ci permette di fare la radice quadrata di un numero
function sqrt(){

    let str=document.getElementById('screen').value;
    str=Math.sqrt(eval(str))
    document.getElementById('screen').value=str

}

//la funzione pow ci permette di trovare il quadrato di un numero
function pow(){

    let str=document.getElementById('screen').value;
    str=Math.pow(eval(str), 2)
    document.getElementById('screen').value=str
}

//la funzione cube ci permette di trovare il cubo di un numero
function cube(){

    let str=document.getElementById('screen').value;
    str=Math.pow(eval(str), 3)
    document.getElementById('screen').value=str
}



