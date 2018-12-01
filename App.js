import React from 'react';
import { StyleSheet, Text, View, Vibration, Button } from 'react-native';

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
        <Button title="Start Dance Explorer" onPress={this.StartExplorer} />
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
});
