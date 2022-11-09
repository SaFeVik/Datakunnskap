const navEl = document.querySelector('.nav')
const burgerxEl = document.querySelector('.burgerx')
const linje1El = document.querySelector('.linje1')
const linje2El = document.querySelector('.linje2')
const linje3El = document.querySelector('.linje3')

burgerxEl.addEventListener('click', x)

function x(){
navEl.classList.toggle('show')
linje1El.classList.toggle('show')
linje2El.classList.toggle('show')
linje3El.classList.toggle('show')
}