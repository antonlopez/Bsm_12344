import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';

const SmileyButton = ({onPress, text, source}) => {

    return(

            <View>
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
        fontSize: 14,
        alignSelf: 'center'
    }


};

export { SmileyButton };