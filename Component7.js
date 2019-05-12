/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Alert, View, } from 'react-native';

export default class Component7 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  clickMe(){
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Button 
          title="click Me"
          onPress={this.clickMe}
         />
      </View>
    );
  }
}


  


