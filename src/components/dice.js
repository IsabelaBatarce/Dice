import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

export default class Dice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {number: 1};
  }

  _onPressButton(){
    this.setState({number: Math.floor((Math.random() * 6) + 1)})
  }



  render() {

    if (this.state.number == 1) {
      <Image>
    } else {
      if (true) {}
    }
   
    return (
      <View style={styles.body}>
        <Image source={{uri: this.props.icon}}/>
        <Button 
          title="Lançar dado"
          color="#6a1b9a"

       />
      </View>
    );

  }

  _rollDice () {

  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dice: {
    margin: 20,
    height: 128,
    width: 128
  }
});
