/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



export default class Component1 extends Component {
    render() {
      return (
        <View style={styles.container}>
  
          <MyText message="World" option="1234"></MyText>
  
        </View>
      );
    }
  }
  
  class MyText extends Component {
  
    constructor(props){
      super(props)
    }
  
  
    render() {
        return (
            <Text style={styles.instructions}>Hello World  {this.props.message}. {this.props.option}</Text>
        );
      }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  
  
