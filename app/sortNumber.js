const lowerValue = 1
const largerValue = 1000

const secretNumber = generateRandomNumber()

function generateRandomNumber() {
  return parseInt(Math.random() * largerValue + 1)
}

const lowerValueElement = document.getElementById('menor-valor')
lowerValueElement.innerHTML = lowerValue

const largerValueElement = document.getElementById('maior-valor')
largerValueElement.innerHTML = largerValue