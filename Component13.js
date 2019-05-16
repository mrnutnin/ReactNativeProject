/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, FlatList, View, Text, Image, ImageBackground } from 'react-native';

export default class Component13 extends Component {

  constructor(props) {
    super(props);
  }

  renderListHeader() {
    return (
      <View>
        <Image style={{ width: '100%', height: 90, resizeMode: 'contain', marginTop: 10, marginBottom: 20}} source={require('./img/react.png')} />
      </View>
    )
  }

  renderItem(item) {
    return (
      <View style={styles.cardStyle}>
        <View style={{ flexDirection: 'row', margin: 7 }}>
          <Image style={styles.avatar} source={require('./img/skull.jpg')} />
          <View style={styles.titleSubTitleStyle}>
            <Text style={{ color: '#000000EE' }}> Kanomroo - Cover</Text>
            <Text style={{ color: '#000000AA' }}> 100,005,588 views</Text>
          </View>
        </View>
        <Image style={{ width: '100%', height: 210 }} source={require('./img/kanom.jpg')} />
      </View>
    );
  }

  render() {
    return (
      <View>
        <ImageBackground style={styles.imageBG} source={require('./img/bg.png')}>
          <FlatList style={{ paddingLeft: 15, paddingRight: 15 }} data={[1, 2, 3, 4]}
            ListHeaderComponent={this.renderListHeader}
            renderItem={({ item }) => this.renderItem(item)} />
        </ImageBackground>
      </View>
    );
  }

}

const styles = StyleSheet.create(
  {
    cardStyle: {
      flexDirection: 'column',
      flex: 1, backgroundColor: 'white',
      marginBottom: 20,
      borderRadius: 7
    },
    avatar: {
      width: 45,
      height: 45,
      borderRadius: (45 / 2) 
    },
    titleSubTitleStyle: {
      flexDirection: 'column',
      marginLeft: 7 
    },
    imageBG: {
      height: '100%',
      width: '100%' 
    }
  }
)



