import validateUserId from './validateUserId.js'

function getRequirements(uid, fname, lname) {
  const requirements = []

  const userIdError = validateUserId(uid)

  if (userIdError) requirements.push(...userIdError)
  if (!fname) requirements.push('Invalid firstname.')
  if (!lname) requirements.push('Invalid lastname.')

  return requirements.length > 0 ? requirements : null
}

export default getRequirements
