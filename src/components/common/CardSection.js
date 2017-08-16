import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {


    return(   // using [] the style on the right will override the one on the left
        <View style = {[style.containerStyle, props.style]}>
            {props.children}

        </View>

    );

};

const style = {
    containerStyle: {
        borderBottomWidth: 0,
        padding: 5,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'



    }

};

export { CardSection };