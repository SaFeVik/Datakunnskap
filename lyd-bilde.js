const bildeEl = document.querySelector('.bilde')
const bildetekstEl = document.querySelector('.bildetekst')
const bildekompresjonEl = document.querySelector('.bilde-kompresjon')
const bildekompresjontekstEl = document.querySelector('.bilde-kompresjontekst')

const lydEl = document.querySelector('.lyd')
const lydtekstEl = document.querySelector('.lydtekst')
const lydkompresjonEl = document.querySelector('.lyd-kompresjon')
const lydkompresjontekstEl = document.querySelector('.lyd-kompresjontekst')

const penEl = document.querySelector('.en')
const ptoEl = document.querySelector('.to')
const ptreEl = document.querySelector('.tre')
const pfireEl = document.querySelector('.fire')

bildeEl.addEventListener('click', showBilPen)
bildekompresjonEl.addEventListener('click', showBilPto)
lydEl.addEventListener('click', showLydPtre)
lydkompresjonEl.addEventListener('click', showLydPfire)

function showBilPen(){
bildetekstEl.classList.toggle('show')
penEl.classList.toggle('show')
}
function showBilPto(){
bildekompresjontekstEl.classList.toggle('show')
ptoEl.classList.toggle('show')
}
function showLydPtre(){
lydtekstEl.classList.toggle('show')
ptreEl.classList.toggle('show')
}
function showLydPfire(){
lydkompresjontekstEl.classList.toggle('show')
pfireEl.classList.toggle('show')
}