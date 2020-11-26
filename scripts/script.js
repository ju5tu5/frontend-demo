// JavaScript Document
const demoParagraaf = document.querySelector('#demoParagraaf')

demoParagraaf.addEventListener('mouseenter', toevoegen)
demoParagraaf.addEventListener('mouseleave', verwijderen)

function toevoegen () {
  demoParagraaf.classList.add('anders')
}
function verwijderen () {
  demoParagraaf.classList.remove('anders')
}
