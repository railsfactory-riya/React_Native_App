import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import data from './json/data.json';
import NavBar from './navBar';
import VideoItem from './videoItem';

export default class Trending extends Component {
  render() {
    let video = data.items;
    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Trending Videos</Text>
        <View style={styles.container}>
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

function nFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "G" },
    { value: 1E12, symbol: "T" },
    { value: 1E15, symbol: "P" },
    { value: 1E18, symbol: "E" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol + ' views';
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pageTitle: {
    fontSize: 18,
    color: '#3c3c3c',
    paddingHorizontal: 15,
    paddingTop: 4
  }
})
