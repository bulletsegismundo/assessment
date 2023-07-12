import handleFormSubmit from './utils/handleFormSubmit.js'
import renderStars from './utils/renderStars.js'

const registrationForm = document.getElementById('registrationForm')
const containerMessage = document.getElementById('containerMessage')

registrationForm.addEventListener('submit', event => {
  event.preventDefault()
  handleFormSubmit(registrationForm, containerMessage)
})

renderStars()
