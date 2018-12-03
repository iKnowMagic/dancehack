import React from 'react'
import { StyleSheet, View, Vibration, Image, TouchableOpacity } from 'react-native'
import { view } from 'react-easy-state'
import store from './store'

class App extends React.Component {

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
    setTimeout(function () {
      Vibration.vibrate(plot)
    }, 500)
  }
  StopExplorer() {
    Vibration.cancel()
    store.setPlay(false)
  }
  componentDidMount() {
  }
  render() {
    return (
      <View style={styles.container}>
        {store.play === false && <TouchableOpacity style={styles.button} onPress={this.StartExplorer}>
          <Image source={require('./assets/play.png')} style={styles.image} />
        </TouchableOpacity>}
        {store.play === true && <TouchableOpacity style={styles.button} onPress={this.StopExplorer}>
          <Image source={require('./assets/stop.png')} style={styles.image} />
        </TouchableOpacity>}
      </View>
    );
  }

}

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
  }
});


export default view(App)
