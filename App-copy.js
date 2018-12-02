import React from 'react';
import { StyleSheet, Text, View, Vibration, Button, Image, TouchableOpacity } from 'react-native';
import { isRequired } from 'react-native/Libraries/StyleSheet/ColorPropType';

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      vibrating: false
    }

    this.StartExplorer = this.StartExplorer.bind(this)
    this.StopExplorer = this.StopExplorer.bind(this)
  }
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
        1000,
        2000,
        2000, 600, 600, 600,
        2000, 600,
        2000, 600,
        2000, 600,
        2000, 600, 600,
        2000, 600, 600,
        2000,
        2000,
        2000,
        2000, 600, 600,
        2000, 600,
        2000, 600,
        2000, 600, 600, 600,
        2000, 600, 600, 600,
        2000, 600,

        2000,
        2000,
        2000, 600, 600, 600,
        2000, 600,
        2000, 600,
        2000, 600,
        2000, 600, 600,
        2000, 600, 600,
        2000,
        2000,
        2000,
        2000, 600, 600,
        2000, 600,
        2000, 600,
        2000, 600, 600, 600,
        2000, 600, 600, 600,
        2000, 600,

        2000,
        2000,
        2000, 600, 600, 600,
        2000, 600,
        2000, 600,
        2000, 600,
        2000, 600, 600,
        2000, 600, 600,
        2000,
        2000,
        2000,
        2000, 600, 600,
        2000, 600,
        2000, 600,
        2000, 600, 600, 600,
        2000, 600, 600, 600,
        2000, 600
      ]
      return plot
    }
    let plot = initApp()
    setTimeout(function() {
      this.setState({vibrating: true});
      Vibration.vibrate(plot)
    }, 10000)
  }
  stopExplorer() {
    Vibration.cancel()
    this.setState({vibrating: false});
  }
  componentDidMount() {
  }
  render() {
    return (
      <View style={styles.container}>
        {
          this.state.vibrating === false &&
          <TouchableOpacity style={styles.button} onPress={this.StartExplorer}>
            <Image source={require('./assets/play.png')} style={styles.image} />
          </TouchableOpacity>
        }
        {
          this.state.vibrating === true &&
          <TouchableOpacity style={styles.button} onPress={this.StopExplorer}>
            <Image source={require('./assets/stop.png')} style={styles.image} />
          </TouchableOpacity>
        }
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
