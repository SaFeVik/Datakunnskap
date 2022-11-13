const burgerEl = document.querySelector('.fa-bars')

const navEl = document.querySelector('.komponent-link')
const burEl = document.querySelector('.fa-bars')

burgerEl.addEventListener('click', showNavBur)

function showNavBur(){
navEl.classList.toggle('show')
burEl.classList.toggle('show')
}