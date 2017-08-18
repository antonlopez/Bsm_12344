import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';

const SmileyButton = ({onPress, text, source}) => {

    return(

            <View style={Styles.smileyText}>
        <TouchableOpacity onPress={onPress}>
            <Image
                source={source}
            />
            <Text style={Styles.textStyle}>{text}</Text>
        </TouchableOpacity>

            </View>





    );

};

const Styles = {
    textStyle:{
        color: '#fff',
        fontSize: 15
    },
    smileyText:{
        justifyContent: 'center'

    }


};

export { SmileyButton };