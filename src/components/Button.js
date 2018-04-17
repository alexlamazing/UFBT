import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

const Button = (props) => {

  const styles = {
    textStyle: {
      alignSelf: 'center',
      color: props.buttonColor,
      fontSize: 18,
      paddingTop: 15,
      paddingBottom: 15
    },
    buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderBottomWidth: 2,
      borderColor: props.borderColor
    }
  }

  return (
    <TouchableHighlight underlayColor='#f0f0f0' onPress={props.onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>
        {props.children}
      </Text>
    </TouchableHighlight>
  );
}

export default Button;
