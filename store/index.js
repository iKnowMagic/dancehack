import { store } from 'react-easy-state'

const state = store({
  play: false,
  setPlay(status) {
    state.play = status
  }
})

export default state
