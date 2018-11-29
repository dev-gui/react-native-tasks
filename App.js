import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import commomStyles from './src/commomStyles'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontFamily: commomStyles.fontFamily,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
