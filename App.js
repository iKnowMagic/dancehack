import React from 'react';
import { StyleSheet, Text, View, Vibration, Button, Image, TouchableOpacity } from 'react-native';
import { isRequired } from 'react-native/Libraries/StyleSheet/ColorPropType';

export default class App extends React.Component {
  state = { vibrate: null }
  StartExplorer() {
    /**
     * L = 500
     * R = 1000, 500
     * F = 1000, 1000, 500
     * B = 1000, 1000, 1000, 500
     *
     */
    function initApp() {
      const plot = [
        1000,
        5000,
        2000, 1000, 1000, 1000,
        5000, 
        4000, 1000,
        4000, 1000,
        4000, 1000,
        3000, 1000, 1000,
        3000, 1000, 1000,
        5000,
        5000,
        5000,
        3000, 1000, 1000,
        4000, 1000,
        4000, 1000,
        2000, 1000, 1000, 1000,
        2000, 1000, 1000, 1000,
        4000, 1000,

        5000,
        2000, 1000, 1000, 1000,
        5000, 
        4000, 1000,
        4000, 1000,
        4000, 1000,
        3000, 1000, 1000,
        3000, 1000, 1000,
        5000,
        5000,
        5000,
        3000, 1000, 1000,
        4000, 1000,
        4000, 1000,
        2000, 1000, 1000, 1000,
        2000, 1000, 1000, 1000,
        4000, 1000,

        5000,
        2000, 1000, 1000, 1000,
        5000, 
        4000, 1000,
        4000, 1000,
        4000, 1000,
        3000, 1000, 1000,
        3000, 1000, 1000,
        5000,
        5000,
        5000,
        3000, 1000, 1000,
        4000, 1000,
        4000, 1000,
        2000, 1000, 1000, 1000,
        2000, 1000, 1000, 1000,
        4000, 1000,
      ]
      return plot
    }
    let plot = initApp()
    setTimeout(function() {
      Vibration.vibrate(plot)
    }, 10000)
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
