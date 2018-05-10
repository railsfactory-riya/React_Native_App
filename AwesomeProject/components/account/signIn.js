import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Actions} from 'react-native-router-flux';

import data from '../json/user.json';
import Logo from './logo';


export default class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      TextInputEmail: '',
      TextInputPassword: '',
      valid_email: true,
      valid_password: true
    }
    this.signIn = this.signIn.bind(this);
  }

 //Sign IN
  signIn() {
    const { TextInputEmail } = this.state ;
    const { TextInputPassword } = this.state;
    if(TextInputEmail == '' && TextInputPassword == '') {
      Alert.alert("Please Enter All the Values.");
    }
    else if(TextInputEmail == '' && TextInputPassword != '') {
      Alert.alert("Please Enter Email ID.");
    }
    else if(TextInputEmail != '' && TextInputPassword == '') {
      Alert.alert("Please Enter Password.");
    }
    else {
      this.checkSignInData();
    }
  }

  checkSignInData() {
    const { TextInputEmail } = this.state ;
    const { TextInputPassword } = this.state;
    if (!TextInputEmail.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      this.setState({ valid_email: false })
      Alert.alert("Invalid Email ID.");
    }
    else if(TextInputEmail == data.users.email && TextInputPassword == data.users.password) {
      this.setState({ valid_email: true, valid_password: true })
      Actions.home();
    }
    else if(TextInputEmail != data.users.email && TextInputPassword != data.users.password) {
      this.setState({ valid_email: false, valid_password: false })
      Alert.alert("Incorrect User Details");
    }
    else if(TextInputEmail != data.users.email && TextInputPassword == data.users.password) {
      this.setState({ valid_email: false, valid_password: true })
      Alert.alert("Enter a valid Email ID");
    }
    else if(TextInputEmail == data.users.email && TextInputPassword != data.users.password) {
      this.setState({ valid_email: true, valid_password: false })
      Alert.alert("Incorrect Password");
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Text style={styles.leabelColor}>LogIn and Explore our App</Text>
        <View style={styles.container}>
          <TextInput
            style={ this.state.valid_email ? styles.inputBox : styles.inputErrorBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Email"
            placeholderTextColor='#4a148c'
            selectionColor="#4a148c"
            keyboardType="email-address"
            onSubmitEditing={()=> this.password.focus()}
            onChangeText={TextInputEmail => this.setState({TextInputEmail})}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor='#4a148c'
            selectionColor="#4a148c"
            ref={(input) => this.password = input}
            onChangeText={TextInputPassword => this.setState({TextInputPassword})}
          />
          <TouchableOpacity onPress={this.signIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpTextCont}>
          <Text style={styles.signUpText}>Do not have an account yet? </Text>
          <TouchableOpacity onPress={Actions.signUp}><Text style={styles.signUpButton}> SignUp</Text></TouchableOpacity>
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
  inputErrorBox: {
    width: 310,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'red',
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
    fontSize: 16,
    color: '#4a148c',
    fontWeight: 'bold'
  },
  errorText: {
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'left',
    width: 310,
    paddingHorizontal: 16,
    fontSize: 14
  }
})
