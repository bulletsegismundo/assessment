import getRequirements from './getRequirements.js'
import getPrintMessage from './getPrintMessage.js'

function getInformationMessage(form) {
  const formData = new FormData(form)
  const { uid, fname, lname, birthday } = Object.fromEntries(formData)

  const requirements = getRequirements(uid, fname, lname)
  const printMessage = getPrintMessage(fname, lname, birthday)

  if (requirements) {
    const requirementsList = requirements.map(requirement => `<li>${requirement}</li>`).join('')
    return `<ul>${requirementsList}</ul>`
  }

  return `<p>${printMessage}</p>`
}

export default getInformationMessage
