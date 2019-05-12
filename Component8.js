/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Alert, View, Image, TouchableHighlight} from 'react-native';

export default class Component8 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  clickMe(){
    Alert.alert("Just Click!")
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <TouchableHighlight onPress={this.clickMe} underlayColor= "gray">
          <View>
            <Image resizeMode="center" source={require('./img/googleMap.png')} 
              style={{width: 300, height: 70, marginTop:20 }}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}


  


