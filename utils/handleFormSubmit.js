import getInformationMessage from './getInformationMessage.js'

function handleFormSubmit(form, displayWindow) {
  const informationMessage = getInformationMessage(form)
  displayWindow.innerHTML = informationMessage
}

export default handleFormSubmit
