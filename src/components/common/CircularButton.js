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
        backgroundColor:'#8ff450',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#8ff450',
        marginRight:5,
        marginLeft: 5
    },
    textStyle: {
        alignSelf: 'center',
        color:'#fff',
        fontSize: 15,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10

    }

}

export { Button };