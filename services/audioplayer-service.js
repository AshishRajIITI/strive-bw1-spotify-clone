function audioplayer(music) {
  // player state
  const state = {
    isPlaying: false,
    progress: null,
    timer: 0,
    selectedSong: ''
  }

  // sets and loads state with first selected song
  state.selectedSong = new Audio(`${music[0].url}`)

  // play&pause logic of player
  const elements = document.getElementsByClassName('playback-button')

  let x = state.selectedSong.addEventListener('loadeddata', () => {
    let duration = state.selectedSong.duration
    return x
  })

  Array.from(elements).forEach((element) => {
    element.addEventListener('click', () => {
      if (!state.isPlaying) {
        console.log('clicked')
        playAudio()
        state.isPlaying = true
      } else {
        console.log(state.selectedSong.currentTime)
        console.log(state.progress)
        console.log(state.timer)
        pauseAudio()
        state.isPlaying = false
      }
    })
  })

  function playAudio() {
    state.selectedSong.play()
  }

  function pauseAudio() {
    state.selectedSong.pause()
  }

  const progress = document.getElementById('progress')
  const timer = document.getElementById('timer')

  function progressLoop() {
    setInterval(function () {
      progress.value = Math.round(
        (state.selectedSong.currentTime / state.selectedSong.duration) * 100
      )
      timer.innerHTML = Math.round(state.selectedSong.currentTime) + ''
    })
  }

  progressLoop()
}

export { audioplayer }

// const selected = document.getElementsByClassName('playback-button')
//   console.log(selected)

//   selected.addEventListener('click', () => {
//     console.log('click')
//     playAudio()
//   })
