const easylover = new Audio('../assets/easylover.mp3')

function audioplayer() {
  // player state
  const state = {
    isPlaying: false
  }

  const elements = document.getElementsByClassName('playback-button')
  console.log(elements)

  Array.from(elements).forEach((element) => {
    element.addEventListener('click', () => {
      if (!state.isPlaying) {
        console.log('clicked')
        playAudio()
        state.isPlaying = true
      } else {
        pauseAudio()
        state.isPlaying = false
      }
    })
  })

  function playAudio() {
    easylover.play()
  }

  function pauseAudio() {
    easylover.pause()
  }
}

export { audioplayer }

// const selected = document.getElementsByClassName('playback-button')
//   console.log(selected)

//   selected.addEventListener('click', () => {
//     console.log('click')
//     playAudio()
//   })
