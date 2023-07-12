import calculateDays from './calculateDays.js'

function getPrintMessage(fname, lname, birthday) {
  const numberOfDays = calculateDays(birthday)
  const eighteenYearOldDayCount = 365 * 18
  const isLessThanEighteen = numberOfDays < eighteenYearOldDayCount
  const adultMessage = `${fname} ${lname}, you have been breathing for ${numberOfDays} days.`
  const minorMessage = 'You are probably not old enough.'
  const printMessage = isLessThanEighteen ? minorMessage : adultMessage

  return printMessage
}

export default getPrintMessage
