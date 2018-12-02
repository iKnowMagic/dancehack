import React from 'react';
import { StyleSheet, Text, View, Vibration, Button, Image, TouchableOpacity } from 'react-native';
import { isRequired } from 'react-native/Libraries/StyleSheet/ColorPropType';

export default class App extends React.Component {
  StartExplorer() {
    /**
     * L = 500
     * R = 500, 500
     * F = 500, 500, 500
     * B = 500, 500, 500, 500
     *
     */
    function initApp() {
      const plot = [
        500,
        5000,
        5000, 500, 500,
        5000, 500,
        5000, 500,
        5000, 500,
        5000, 500, 500,
        5000, 500, 500,
        5000,
        5000,
        5000,
        5000, 500, 500,
        5000, 500,
        5000, 500,
        5000, 500, 500, 500,
        5000, 500, 500, 500,
        5000, 500
      ]
      return plot
    }
    let plot = initApp()
    setTimeout(function() {
      Vibration.vibrate(plot)
    }, 10000)

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
