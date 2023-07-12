function renderStars() {
  const containerStars = document.getElementById('containerStars')

  let str = ''
  for (let i = 0; i < 20; i++) {
    str = str + '*'
    containerStars.innerHTML += `<p>${str}</p>`
  }
}

export default renderStars
