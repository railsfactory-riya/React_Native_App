import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import NavBar from './navBar';


export default class Subscriptions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Subscriptions</Text>
        <NavBar />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
