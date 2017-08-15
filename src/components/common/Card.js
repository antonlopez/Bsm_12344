import React from 'react';
import {View} from 'react-native';

const Card = (props) => {
    return(

    <View style ={styles.containerStyle}>
        {/*we pass wathever is inside the tag*/}
        {props.children}

    </View>


    );

};


const styles ={

    containerStyle:{                          // name of the styles can be anything
        borderWidth: 1,                       // pixel width
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10



    }


}


export { Card } ;