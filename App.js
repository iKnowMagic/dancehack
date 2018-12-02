import React from 'react';
import { StyleSheet, Text, View, Vibration, Button, Image, TouchableOpacity } from 'react-native';
import { isRequired } from 'react-native/Libraries/StyleSheet/ColorPropType';

export default class App extends React.Component {
  state = { vibrate: null }
  StartExplorer() {

    function initApp() {
      const plot = [
        5000,
        3200, 600, 600, 600,
        5000,
        4400, 600,
        4400, 600,
        4400, 600,
        3800, 600, 600,
        3800, 600, 600,
        5000,
        5000,
        5000,
        3800, 600, 600,
        4400, 600,
        4400, 600,
        3200, 600, 600, 600,
        3200, 600, 600, 600,
        4400, 600,

        5000,
        3200, 600, 600, 600,
        5000,
        4400, 600,
        4400, 600,
        4400, 600,
        3800, 600, 600,
        3800, 600, 600,
        5000,
        5000,
        5000,
        3800, 600, 600,
        4400, 600,
        4400, 600,
        3200, 600, 600, 600,
        3200, 600, 600, 600,
        4400, 600,

        5000,
        3200, 600, 600, 600,
        5000,
        4400, 600,
        4400, 600,
        4400, 600,
        3800, 600, 600,
        3800, 600, 600,
        5000,
        5000,
        5000,
        3800, 600, 600,
        4400, 600,
        4400, 600,
        3200, 600, 600, 600,
        3200, 600, 600, 600,
        4400, 600
      ]
      return plot
    }
    let plot = initApp()
    setTimeout(function () {
      Vibration.vibrate(plot)
    }, 2000)
  }
  stopExplorer() {
    Vibration.cancel()
  }
  componentDidMount() {
    // Vibration.vibrate([250, 250])
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.StartExplorer}>
          <Image source={require('./assets/play.png')} style={styles.image} />
        </TouchableOpacity>
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
