/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, FlatList, View, Text} from 'react-native';

export default class Component12 extends Component {
  
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={{padding: 10 ,flex: 1, justifyContent: "center", flexDirection: "column"}}>
        <FlatList data={[1,2,3,4,5,6,7]}
        renderItem={({item})=> <Text>{item}</Text> } />
      </View>
    );
  }
}


  


