import React from 'react';
import {View} from 'react-native';

const Card = (props) => {
    return(

    <View style ={[styles.containerStyle, props.style]}>
        {/*we pass whatever is inside the tag*/}
        {props.children}

    </View>


    );

};


const styles ={

    containerStyle:{                          // name of the styles can be anything



        marginLeft: 5,
        marginRight: 5,
        marginTop: 10



    }


}


export { Card } ;