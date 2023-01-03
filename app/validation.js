function  validateShotValue(shot) {
  const number = +shot

  if (isInvalidShot(number)) {
    shotElement.innerHTML += '<div>Valor inválido</div>'
    return
  }

  if(isShotLargerOrLowerThanValue(number)) {
    shotElement.innerHTML += `<div>Valor inválido: Fale um número entre ${lowerValue} e ${largerValue}</div>`
    return
  }

  if(number === secretNumber) {
    document.body.innerHTML = `
      <h2>Você acertou!</h2>
      <h3>O número secreto era ${secretNumber}</h3>

      <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
  } else if (number > secretNumber) {
    shotElement.innerHTML += `
      <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `
  } else {
    shotElement.innerHTML += `
      <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `
  }
}

function isShotLargerOrLowerThanValue(number) {
  return number > largerValue || number < lowerValue
}

function isInvalidShot(number) {
  return Number.isNaN(number)
}

document.body.addEventListener('click', e => {
  if(e.target.id == 'jogar-novamente') {
    window.location.reload()
  }
})