import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';

import Logo from './logo';

export default class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Text style={styles.leabelColor}>Join Us</Text>
        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email"
            placeholderTextColor='#4a148c'/>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor='#4a148c'/>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Confirm Password"
            secureTextEntry={true}
            placeholderTextColor='#4a148c'/>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpTextCont}>
          <Text style={styles.signUpText}>Already have an account ? </Text>
          <Text style={styles.signUpButton} onPress={Actions.signIn}> SignIn</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  leabelColor:{
    marginVertical: 15,
    color: '#4a148c',
    fontSize: 18
  },
  inputBox: {
    width: 310,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#4a148c',
    marginVertical: 10
  },
  buttonText: {
    width: 310,
    fontSize: 16,
    backgroundColor: '#4a148c',
    color: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginVertical: 10,
    textAlign: 'center'
  },
  signUpTextCont: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16
  },
  signUpText: {
    fontSize: 16,
    color: '#4a148c'
  },
  signUpButton: {
    fontSize: 18,
    color: '#4a148c',
    fontWeight: '500'
  }
})
