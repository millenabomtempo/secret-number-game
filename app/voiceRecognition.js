const shotElement = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.leng = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
  const shot = e.results[0][0].transcript
  
  showShot(shot)

  validateShotValue(shot)

}

function showShot(shot) {
  shotElement.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${shot}</span>
  `
}

recognition.addEventListener('end', () => recognition.start())