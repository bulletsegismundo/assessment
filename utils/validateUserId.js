function hasUppercase(userID) {
  return /[A-Z]/.test(userID)
}

function hasLowercase(userID) {
  return /[a-z]/.test(userID)
}

function hasNumber(userID) {
  return /\d/.test(userID)
}

function isCorrectLength(userID) {
  return userID.length >= 8 && userID.length <= 12
}

function validateUserID(userID) {
  const requirements = []

  if (!hasUppercase(userID)) {
    requirements.push('User id must have at least one uppercase letter.')
  }

  if (!hasLowercase(userID)) {
    requirements.push('User id must have at least one lowercase letter.')
  }

  if (!hasNumber(userID)) {
    requirements.push('User id must have at least one number.')
  }

  if (!isCorrectLength(userID)) {
    requirements.push('User id must be 8 to 12 characters long.')
  }

  return requirements.length === 0 ? null : requirements
}

export default validateUserID
