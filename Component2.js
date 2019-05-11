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
  
          <BlinkText message="Hello World Form PC" interval={100}/>
  
        </View>
      );
    }
  }
  
  class BlinkText extends Component {
  
    constructor(props){
      super(props)
      this.state = {isVisible: true};

      setInterval(() => {
        this.setState(oldState=>{
          return {isVisible: !oldState.isVisible}
        })
      }, this.props.interval);
    }
  
    render() {
      let display = this.state.isVisible ? this.props.message : '';
        return (
            <Text style={styles.instructions}>
              {display}
            </Text>
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
  
  
