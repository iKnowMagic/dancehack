import React from 'react';
import { StyleSheet, Text, View, Vibration, Button, Image, TouchableOpacity } from 'react-native';
import { isRequired } from 'react-native/Libraries/StyleSheet/ColorPropType';

export default class App extends React.Component {
  initApp() {
  }
  StartExplorer() {
    Vibration.vibrate([250, 10000, 250, 2000, 250, 250, 250, 250])
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
