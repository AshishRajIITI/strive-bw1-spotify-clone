function audioplayer() {
  const x = document.getElementById('myAudio')

  function playAudio() {
    x.play()
  }

  function pauseAudio() {
    x.pause()
  }
}

export { audioplayer }
