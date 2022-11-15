const domandaSets = [
    {
        category: "Science: Computers",
        tipo: "multipla",
        difficulty: "easy",
        domandaSet: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        risposteSet: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        tipo: "multipla",
        difficulty: "easy",
        domandaSet:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        risposteSet: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        tipo: "boolean",
        difficulty: "easy",
        domandaSet: "The logo for Snapchat is a Bell.",
        correct_answer: "Falso",
        risposteSet: "Vero",
    },
    {
        category: "Science: Computers",
        tipo: "boolean",
        difficulty: "easy",
        domandaSet:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "Falso",
        risposteSet: "Vero",
    },
    {
        category: "Science: Computers",
        tipo: "multipla",
        difficulty: "easy",
        domandaSet:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        risposteSet: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        tipo: "multipla",
        difficulty: "easy",
        domandaSet: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        risposteSet: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        tipo: "multipla",
        difficulty: "easy",
        domandaSet:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        risposteSet: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        tipo: "multipla",
        difficulty: "easy",
        domandaSet: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        risposteSet: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        tipo: "boolean",
        difficulty: "easy",
        domandaSet: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "Falso",
        risposteSet: "Vero",
    },
    {
        category: "Science: Computers",
        tipo: "multipla",
        difficulty: "easy",
        domandaSet:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        risposteSet: ["Python", "C", "Jakarta"],
    },
];

const setDomande = [
    {
        tipo: "multipla",
        domandaSet: "What does CPU stand for?",
        risposteSet: [
            "Central Processing Unit",
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ]
    },
    {
     
        tipo: "multipla",       
        domandaSet:"In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",       
        risposteSet: ["Static", "Private", "Public","Final"],
    },
    {
        
        tipo: "boolean",     
        domandaSet: "The logo for Snapchat is a Bell.",
        risposteSet: ["Vero","Falso"]
    },
    {
        
        tipo: "boolean",        
        domandaSet:"Pointers were not used in the original C programming language; they were added later on in C++.",
        risposteSet: ["Vero","Falso"]
    },
    {
        
        tipo: "multipla",        
        domandaSet: "What is the most preferred image format used for logos in the Wikimedia database?",
        risposteSet: [".png", ".jpeg",".svg", ".gif"],
    },
    {
       
        tipo: "multipla",      
        domandaSet: "In web design, what does CSS stand for?",
        risposteSet: [
            "Counter Strike: Source",
            "Cascading Style Sheet",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        
        tipo: "multipla",       
        domandaSet:"What is the code name for the mobile operating system Android 7.0?",
        risposteSet: [
            "Nougat",
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        
        tipo: "multipla",       
        domandaSet: "On Twitter, what is the character limit for a Tweet?",
        risposteSet: ["100","120","140", "160"],
    },
    {
        
        tipo: "boolean",        
        domandaSet:"Linux was first created as an alternative to Windows XP.",
        risposteSet: ["Vero","Falso"]
    },
    {
        
        tipo: "multipla",
        domandaSet:"Which programming language shares its name with an island in Indonesia?",
        risposteSet: ["Java","Python", "C", "Jakarta"],
    },
    {
        tipo: "multipla",
        domandaSet:"Quanti video ha fatto Cicciogamer89?",
        risposteSet:["4112", "7417" , " 13964", "7416"]
    },
    {
        tipo:"boolean",
        domandaSet:"Cicciogamer89 è fidanzato?",
        risposteSet:["si, a malincuore", "no, è uno spirito libero(è gay)"]
    },
    {
        tipo:"boolean",
        domandaSet:"Sulla carbocrema suprema ci va... ",
        risposteSet:["il guanciale", "la pancetta"]
    }

    

]

let domanda = document.querySelector("#titolo-test")
let risposte = document.querySelectorAll("label");
let radios = document.querySelectorAll("input");
let bottone = document.querySelector("#button-conferma")
let contatore = document.querySelector("#contatore-domande");

var risposteFornite = [];
let domandaSetNumber = 0;
let secondiSpan= document.getElementById("tempo")




var timeleft = 11;

let downloadTimer = setInterval(function () {
    

    if (timeleft == 0) {
        
        risposteFornite.push('timer scaduto')
        aggiungiDomandatimer()
        timeleft=11
        

    }



    else if(timeleft <=10){
        timeleft--
        secondiSpan.textContent = ` 0${timeleft} seconds remaining`
        
    }
   
   

    else {
        
        
        timeleft--
        secondiSpan.textContent= timeleft + " seconds remaining";
        
    }

    

}, 1000);






window.onload = function () {

    contatore.textContent = domandaSetNumber + 1 + '/'+ setDomande.length;
    domanda.textContent = setDomande[domandaSetNumber].domandaSet;
    for (let i = 0; i < 4; i++) {
        risposte[i].textContent = setDomande[domandaSetNumber].risposteSet[i];
    }


}




let aggiungiDomanda = function () {
    
    timeleft=11
    
    for (let c = 0; c < radios.length; c++) {

        if (radios[c].checked) {
            risposteFornite.push(risposte[c].textContent)
            domandaSetNumber++;
            if (domandaSetNumber == setDomande.length) {
                sessionStorage.setItem('array', JSON.stringify(risposteFornite))
                window.location.href = "result.html"
            }
            contatore.textContent = domandaSetNumber + 1 + "/"+ setDomande.length;
            radios[c].checked = false;
            domanda.textContent = setDomande[domandaSetNumber].domandaSet;
            if (setDomande[domandaSetNumber].tipo == "multipla") {
                for (let i = 0; i < 4; i++) {
                    risposte[i].textContent = setDomande[domandaSetNumber].risposteSet[i];
                }
                radios[2].style.display = "inline";
                radios[3].style.display = "inline";
                risposte[2].style.display = "inline";
                risposte[3].style.display = "inline";
            }
            else {
                for (let i = 0; i < 2; i++) {
                    risposte[i].textContent = setDomande[domandaSetNumber].risposteSet[i];

                }
                radios[2].style.display = "none"
                risposte[2].style.display = "none";
                radios[3].style.display = "none";
                risposte[3].style.display = "none";
            }
        }
    }

}

let aggiungiDomandatimer = function () {

    domandaSetNumber++
    if (domandaSetNumber == setDomande.length) {
       
        window.location.href = "result.html"
        
    }
    contatore.textContent = domandaSetNumber + 1 + "/"+ setDomande.length;
    domanda.textContent = setDomande[domandaSetNumber].domandaSet;
    if (setDomande[domandaSetNumber].tipo == "multipla") {
        for (let i = 0; i < 4; i++) {
            risposte[i].textContent = setDomande[domandaSetNumber].risposteSet[i];
        }
        radios[2].style.display = "inline";
        radios[3].style.display = "inline";
        risposte[2].style.display = "inline";
        risposte[3].style.display = "inline";
    }
    else {
        for (let i = 0; i < 2; i++) {
            risposte[i].textContent = setDomande[domandaSetNumber].risposteSet[i];

        }
        radios[2].style.display = "none"
        risposte[2].style.display = "none";
        radios[3].style.display = "none";
        risposte[3].style.display = "none";
    }
}

bottone.addEventListener("click", aggiungiDomanda)


console.log(risposteFornite);

