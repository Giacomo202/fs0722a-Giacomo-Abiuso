const header = document.querySelector('.header')

const bottone = document.querySelector('.nero')

window.addEventListener('scroll', () => {
    

    if (window.scrollY > 280) {
        header.classList.add('sfondo')
        bottone.classList.add('verde')

    } else {
        header.classList.remove('sfondo')
        bottone.classList.remove('verde')

    }
})




