/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Login from './components/Login';
import Biodata from './components/Biodata';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class LoginScreen extends Component<Props> {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
      <Login/>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>this.props.navigation.navigate('Biodata')}
      >
        <Text style={styles.buttonText}>SignIn</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

class BioScreen extends Component{

  static navigationOptions = {
    header: null
  }

  render(){
    return(
      <Biodata />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#e50000',
    paddingVertical: 10,
    margin: 20,
    marginTop: 0
  },
  buttonText: {
    textAlign: 'center',
    color: '#f2f2f2',
    fontWeight: '700',
    fontSize: 20
  }
});

const LogIn = createStackNavigator(
  {
    Login: LoginScreen,
    Biodata: BioScreen
  },
  {
    initialRouteName: 'Login'
  }
);


export default class Apps extends React.Component {
  render() {
    return <LogIn />;
  }
}
