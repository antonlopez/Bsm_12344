import React from 'react';
import { TextInput, View, Text } from 'react-native';


const Input = ({label, value, onChangeText, placeholder, secureTextEntry, keyboardType}) => {

    const {inputStyle, containerStyle, labelStyle} = styles;


    return(

        <View style = {containerStyle} >
            <Text style = {labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value = {value}
                onChangeText={onChangeText}
                autoCapitalize="none"
                keyboardType = {keyboardType}
            />

        </View>


    );



};

const styles ={                   // flex 2+1 = 3    so 2/3 will be the input and 1/3 label of the available space
    inputStyle:{
        color: '#fff',
        paddingRight: 5,
        paddingLeft:5,
        fontSize:18,
        lineHeight: 23,
        flex: 2,
        borderBottomColor:'#fff',
        borderBottomWidth: .5
    },
    labelStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        color:'#fff'
    },
    containerStyle:{
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'

    }

}


export {Input};