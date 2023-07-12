import handleFormSubmit from './utils/handleFormSubmit.js'

const registrationForm = document.getElementById('registrationForm')
const containerMessage = document.getElementById('containerMessage')
const containerStars = document.getElementById('containerStars')

registrationForm.addEventListener('submit', event => {
  event.preventDefault()
  handleFormSubmit(registrationForm, containerMessage)
})

let str = ''

for (let i = 0; i < 20; i++) {
  str = str + '*'
  containerStars.innerHTML += `<p>${str}</p>`
}
