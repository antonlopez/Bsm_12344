import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress , children}) => {

    return(
    <TouchableOpacity onPress={onPress} style = {Styles.buttonStyle}>
        <Text style={Styles.textStyle}> {children} </Text>
    </TouchableOpacity>


    );

};

const Styles = {
    buttonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor:'#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginRight:5,
        marginLeft: 5
    },
    textStyle: {
        alignSelf: 'center',
        color:'#007aff',
        fontSize: 15,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10

    }

}

export { Button };
