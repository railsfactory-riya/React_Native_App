import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';

import VideoItem from './videoItem';
import NavBar from './navBar';
import data from './json/data.json';
import SignIn from './account/signIn';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#12005e"
          barStyle="light-content"
        />
        <View style={styles.navBar}>
          <Image source={require('../img/my-icon.png')} style={{width: 50, height: 36}} />
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon style={styles.navItem} name="search" size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={Actions.signIn}>
              <Icon style={styles.navItem} name="account-circle" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
          data={data.items}
          renderItem={(video)=><VideoItem video={video.item}/>}
          keyExtractor={(item)=>item.id}
          ItemSeparatorComponent={()=><View style={{height: 0.5, backgroundColor: '#E5E5E5'}}/>}
          />
        </View>
        <NavBar />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBar: {
    height: 55,
    backgroundColor: '#FFF',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightNav: {
    flexDirection: 'row'
  },
  navItem: {
    marginLeft: 25
  },
  body: {
    flex: 1
  }
});
