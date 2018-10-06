import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

export default Biodata = (props) => (
  <View style={forstyle.container}>
    <View style={forstyle.background}>
      <View>
        <Image style={forstyle.photo} source={require('../src/profile.png')}/>
      </View>
      <View style={forstyle.description}>
        <Text style={forstyle.name}>Lulu Irman Permana</Text>
        <Text style={forstyle.subtitle}>018</Text>
        <Text style={forstyle.subtitle}>XI RPL 1</Text>
      </View>
    </View>
      <View style={forstyle.footer}>
        <Text style={forstyle.smk}>SMK Telkom Purwokerto</Text>
        <Text>Powered By React Native</Text>
      </View>
  </View>
)

const forstyle = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
  },
  background: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e50000',
    width: 300,
    height: 300,
    padding: 0,
    borderRadius: 10,
    marginBottom: 0
  },
  photo: {
    width: 200,
    height: 200,
    marginTop: -20
  },
  description: {
    margin: 50,
    marginTop: 35,
    marginLeft: 5,
    marginRight: 5
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#f2f2f2'
  },
  subtitle: {
    color: '#f2f2f2',
    fontSize: 20,
  },
  footer: {
    marginTop: 80,
    alignItems: 'center'
  },
  smk: {
    fontSize: 20,
    fontWeight: 'bold',
  }
}
