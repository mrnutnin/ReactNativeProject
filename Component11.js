/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Alert, View, Image} from 'react-native';

export default class Component11 extends Component {
  
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={{padding: 10 ,flex: 1, justifyContent: "center", flexDirection: "column"}}>
        <Image resizeMode='center' style={{width: undefined, height: 100}} source={require('./img/react.png')} />
        <Image resizeMode='center' style={{width: 200, height: 200}} source={{uri: "http://static.facegfx.com/vector/2013/11/11/facegfx-vector-set-of-tiger-vector-picture-art-18.jpg"}} />     
      </View>
    );
  }
}


  


