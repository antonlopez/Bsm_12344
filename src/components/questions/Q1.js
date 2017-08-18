import React, {Component} from 'react';
import {View, ImageBackground, Text} from 'react-native'
import { connect } from 'react-redux';
import { studentUpdate, studentCreate} from '../../actions';

import { CardSection, Button, Input } from '../common';



class Q1 extends Component{


    onButtonPressed(){



    }




    render(){

        return(
            <ImageBackground
                source={require('../../img/survey_background.png')}
                style={styles.backgroundImage}
            >
                <View style={{paddingTop: 50}}>

                    <CardSection style ={styles.inputContainer}>
                        <Text style={styles.textStyle}> How do you feel today?   </Text>

                    </CardSection>

                    <CardSection style ={styles.inputContainer}>


                    </CardSection>

                    <CardSection style ={styles.inputContainer}>


                    </CardSection>


                    <CardSection style ={styles.buttonContainer}>

                    </CardSection>

                </View>

            </ImageBackground>

        );

    }
}


const styles = {
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    },
    inputContainer:{paddingTop: 20,
        backgroundColor: 'transparent',
        borderBottomWidth: 0
    },
    buttonContainer:{paddingTop: 40,
        backgroundColor: 'transparent',
        borderBottomWidth: 0},
    textStyle :{
        fontSize: 20,
        color: '#fff',
        alignSelf: 'center'

    }

};






export default  Q1;