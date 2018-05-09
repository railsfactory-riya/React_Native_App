import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import { Router } from 'react-native-router-flux';

import scenes from './Route';

export default class App extends Component {
  render() {
    return <Router scenes={scenes} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
