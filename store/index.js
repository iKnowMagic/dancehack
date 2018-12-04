import { store } from 'react-easy-state'

const state = store({
  play: false,
  seconds: 0,
  counting: false,
  setPlay(status) {
    state.play = status
  },
  setSeconds(number) {
    state.seconds = number
  },
  setCounting(counting) {
    state.counting = counting
  }
})

export default state
