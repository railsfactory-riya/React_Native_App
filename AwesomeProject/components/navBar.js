import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux'


export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={Actions.home}>
          <Icon name="home" size={25} />
          <Text style={styles.tabTitle}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={Actions.trending}>
          <Icon name="whatshot" size={25} />
          <Text style={styles.tabTitle}>Trending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={Actions.subscriptions}>
          <Icon name="subscriptions" size={25} />
          <Text style={styles.tabTitle}>Subscriptions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={Actions.library}>
          <Icon name="folder" size={25} />
          <Text style={styles.tabTitle}>Library</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  tabBar :{
    backgroundColor: '#FFF',
    height: 60,
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabTitle: {
    fontSize: 11,
    color: '#3c3c3c',
    paddingHorizontal: 15,
    paddingTop: 4
  }
});
