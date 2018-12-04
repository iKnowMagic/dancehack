import React from 'react'
import { StyleSheet, View, Vibration, Image, Text, TouchableOpacity } from 'react-native'
import { view } from 'react-easy-state'
import { KeepAwake } from 'expo'
import TimerMixin from 'react-timer-mixin'
import createReactClass from 'create-react-class'
import store from './store'

var App = createReactClass({
  mixins: [TimerMixin],
  StartExplorer() {
    function initApp() {
      const plot = [
        4000,
        4000, 600, 600, 600,
        4000,
        4000, 600,
        4000, 600,
        4000, 600,
        4000, 600, 600,
        4000, 600, 600,
        4000,
        4000,
        4000,
        4000, 600, 600,
        4000, 600,
        4000, 600,
        4000, 600, 600, 600,
        4000, 600, 600, 600,
        4000, 600,

        4000,
        4000, 600, 600, 600,
        4000,
        4000, 600,
        4000, 600,
        4000, 600,
        4000, 600, 600,
        4000, 600, 600,
        4000,
        4000,
        4000,
        4000, 600, 600,
        4000, 600,
        4000, 600,
        4000, 600, 600, 600,
        4000, 600, 600, 600,
        4000, 600,

        4000,
        4000, 600, 600, 600,
        4000,
        4000, 600,
        4000, 600,
        4000, 600,
        4000, 600, 600,
        4000, 600, 600,
        4000,
        4000,
        4000,
        4000, 600, 600,
        4000, 600,
        4000, 600,
        4000, 600, 600, 600,
        4000, 600, 600, 600,
        4000, 600,

        4000, 600, 600, 600, 600, 600, 600, 600
      ]
      return plot
    }
    let plot = initApp()
    store.setPlay(true)
    Vibration.vibrate(plot)
  },
  StopExplorer() {
    Vibration.cancel()
    store.setPlay(false)
  },
  StartCountDown() {
    store.setSeconds(5)
    store.setCounting(true)
    const timer = this.setInterval(function() {
      store.setSeconds(store.seconds - 1)
      if (store.seconds <= 1) {
        this.StartExplorer()
        store.setCounting(false)
        clearInterval(timer)
      }
    }, 1000)
  },
  componentDidMount() {
  },
  componentWillUnmount() {
  },
  render() {
    return (
      <View style={styles.container}>
        <KeepAwake />
        {store.play === false && store.counting === false && <TouchableOpacity style={styles.button} onPress={this.StartCountDown}>
          <Image source={require('./assets/play.png')} style={styles.image} />
        </TouchableOpacity>}
        {store.play === true  && store.counting === false && <TouchableOpacity style={styles.button} onPress={this.StopExplorer}>
          <Image source={require('./assets/stop.png')} style={styles.image} />
        </TouchableOpacity>}
        {store.counting === true && <Text style={styles.counter}>{store.seconds}</Text>}
      </View>
    );
  }

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginBottom: 20
  },
  image: {
    flex: 1,
    resizeMode: 'center'
  },
  counter: {
    fontSize: 200
  }
});


export default view(App)
