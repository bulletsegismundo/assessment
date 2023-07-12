function calculateDays(dateString) {
  const dateOfBirth = new Date(dateString)
  const currentDate = new Date()

  const timeDiff = currentDate.getTime() - dateOfBirth.getTime()
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

  return days
}

export default calculateDays
