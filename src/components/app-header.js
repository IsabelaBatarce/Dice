import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableHighlight, Alert } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.movieHeader}>
          <StatusBar hidden={true}/>
          <View style={styles.movieHeaderTitle}>
            <Image style={styles.movieHeaderLogo} source={require('../img/logo_top.png')} />
            <Text style={styles.movieHeaderTitleText}>{this.props.title}</Text>
          </View>
          
        </View>
      </View>
    );
  }

  _onPressButton() {
    Alert.alert(this.props.title);
  }
}




const styles = StyleSheet.create({
  container: {
    height: 56,
  },
  movieHeader: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#6a1b9a',
  },
  movieHeaderTitle: {
    paddingLeft: 10,
    paddingRight: 10,
    margin: 0,
    flex: 1,
    flexDirection: 'row'
  },
  movieHeaderTitleText: {
    fontWeight: "500",
    color: "#ffffff",
    fontSize: 20,
    margin: 0,
    padding: 0,
    paddingLeft: 10
  },
  movieHeaderLogo: {
    width: 32,
    height: 32
  },
  movieHeaderButton: {
    marginRight: 10,
    width: 32,
    height: 32,
  },
  movieHeaderButtonText: {
    fontSize: 30,
    textAlign: 'center',
    lineHeight: 32,
    color: '#ffffff'
  }


});