import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style = {viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
        </View>
            );

};

const styles ={
  viewStyle:{
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',         // up and down
    alignItems: 'center',             // left or right
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, Height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
      fontSize: 20
  }
};

export { Header };