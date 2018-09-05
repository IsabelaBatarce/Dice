import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dice from './src/components/dice';
import AppHeader from './src/components/app-header';
export default class App extends React.Component {
  render() {
    return (
     <View style={styles.container}>
      <View>
      
        <AppHeader title="Dice" />
      
      </View>
      <View style={styles.fundo}>
         
         <Dice />
          
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  fundo: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
