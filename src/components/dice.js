import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

export default class Dice extends React.Component {

  constructor(props) {
    super(props);
    this.state = {number: 1};
    this._rollDice = this._rollDice.bind(this);
  }

 _rollDice () {
    this.setState({number: Math.floor((Math.random() * 6) + 1)})
  }



  render() {

    if(this.state.number == 1){
      var img = <Image
            source={require('./numero1.png')}
          />;
    } else{
      if(this.state.number == 2){
        var img = <Image
            source={require('./numero2.png')}
          />;
      } else{
        if(this.state.number == 3){
          var img = <Image
            source={require('./numero3.png')}
          />;
        } else{
          if(this.state.number == 4){
            var img = <Image
            source={require('./numero4.png')}
          />;
          } else{
            if(this.state.number == 5){
              var img = <Image
            source={require('./numero5.png')}
          />;
            } else{
              var img = <Image
            source={require('./numero6.png')}
          />;
            }
          }
        }
      }
    }
   
    return (
      
      <View style={styles.body}>
        <Text>Teste sua sorte!</Text>
        <View style={styles.botao}>
        
            {img}
        </View>
        
        <Button 
          title="Lançar dado"
          color="#6a1b9a"
          onPress={this._rollDice}
          style={styles.botao}

       />
      </View>
    );

  }

  
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  dice: {
    margin: 20,
    height: 128,
    width: 128
  },
  botao:{
    
    marginBottom: 20
  }
});
