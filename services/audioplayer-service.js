function audioplayer() {
  const x = document.getElementById('pause-button')
  console.log(x)

  x.addEventListener('click', () => {
    console.log('click')
  })

  // function playAudio() {
  //   x.play()
  // }

  // function pauseAudio() {
  //   x.pause()
  // }
}

export { audioplayer }
