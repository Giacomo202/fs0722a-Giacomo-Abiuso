
//aggiunge un nuovo elemento alla lista
let nuovoElemento=() => {
    let li = document.createElement('li');
    let inputValue = document.querySelector('#input').value;
    let task= document.createTextNode(inputValue);
    li.appendChild(task);
    if (inputValue===''){//se non c'è scritto nulla non passa
        document.querySelector('#input').value= 'scrivi una task'
    }else{//se c'è scritto qualcosa passa
        document.querySelector('#ul').appendChild(li)
    }

    document.querySelector('#input').value=''//reset del input

    //per ogni item della lista creo uno span che ci servirà dopo per eliminare quel item
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}




//al click sull'item della lista aggiunge la classe checked
{

    let list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
    
}



// se si sclicca sul bottone 'close' si nasconde quel list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
 
    




































