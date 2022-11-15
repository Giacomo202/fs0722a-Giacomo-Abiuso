let commento = document.querySelector('#commento')

let bottone = document.querySelector('#bottone-feedback')


let epicode = function () {
    if (commento.value == 'paguro') {
        console.log(commento.value)
        window.location.href = 'https://www.youtube.com/@CiccioGamer89'
    }
    else {

        console.log(commento.value)
        window.location.href = 'https://epicode.com/it/'

    }
}

bottone.addEventListener('click', epicode)



let stars = document.querySelectorAll('.cursor')


let x=0
for(let i=0 ; i<stars.length; i++) {

    stars[i].addEventListener('click', function () {
      x=i
        
        while(i>=0){
            stars[i].classList.remove('stella')
            i--
            console.log(stars)
        }
        while(x<stars.length){
            stars[x].classList.add('stella')

            x++
        }

        


    }
    )


}


let arr = [1, 2, 3]


