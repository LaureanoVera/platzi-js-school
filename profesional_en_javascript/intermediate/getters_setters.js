let movieValue = {
  state: false,
  muted: false
}

const playMovie = () => {
  console.log('Play movie!')
  movieValue.state = true
  movieValue.muted = false
}

const pauseMovie = () => {
  console.log('Pause movie.')
  movieValue.state = false
}

const player = {
  play: () => playMovie(),
  pause: () => pauseMovie(),
  get muted() {
    console.log('Muted movie.');
    movieValue.muted = true
  },
  set muted(value) {
    movieValue.muted = value
  }
}

const autoplay = () => {
  if (!movieValue.muted) {
    player.muted = true
  }
  player.play()

  console.log(movieValue);
}