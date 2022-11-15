let risposteCarine= sessionStorage.getItem('array');
let ciccioGamer89= JSON.parse(risposteCarine)
console.log(ciccioGamer89)

let risposteCorrette=
[
"Central Processing Unit",
"Final",
"The logo for Snapchat is a Bell.",
"Falso",
".svg",
"Cascading Style Sheet",
"Nougat",
"140",
"Falso",
"Java",
"7417",
"si, a malincuore",
"il guanciale"
]

let contatoreRisposte=0
for (const risposta of ciccioGamer89) {
    if (risposteCorrette.includes(risposta)){
        contatoreRisposte++
    }
       
}
console.log(contatoreRisposte)

let result= document.querySelector('#speranza')
let percentuale= function(a, b){
    return (a/b)*100

}
result.innerHTML= percentuale(contatoreRisposte,risposteCorrette.length).toFixed(2)+'%'

let risposteSbagliate= risposteCorrette.length - contatoreRisposte
console.log(risposteSbagliate)

let resultSbagliati=document.querySelector('#dannazione')

resultSbagliati.innerHTML= percentuale(risposteSbagliate,risposteCorrette.length).toFixed(2)+'%'

let numeroCorrette=document.querySelector('#p-risposte-corrette')
let numeroSbagliate=document.querySelector('#p-risposte-sbagliate')

numeroCorrette.innerHTML= `${contatoreRisposte}/${ciccioGamer89.length} questions`

numeroSbagliate.innerHTML= `${risposteSbagliate}/${ciccioGamer89.length} questions`

let congratulazioni=document.querySelector('#congratulazioni')
let esamePassato=document.querySelector('#esame-passato')

if (result.textContent>=60){
   congratulazioni.innerHTML ='Congratulazioni Paguro!'
   esamePassato.innerHTML="Hai passato l'esame da Paguro."
}else{
    congratulazioni.innerHTML ='Sei proprio un granchio!'
    esamePassato.innerHTML="Non hai passato l'esame da Paguro." 
}

let reindirizzamento=function(){
    window.location.href = 'feedback.html'
}

let bottone = document.querySelector('#bottone-result');
bottone.addEventListener('click', reindirizzamento);


