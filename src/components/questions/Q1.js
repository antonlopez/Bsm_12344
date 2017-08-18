import React, {Component} from 'react';
import {View, ImageBackground, Text, StatusBar} from 'react-native'
import { connect } from 'react-redux';
import { studentUpdate, studentCreate} from '../../actions';
import SmileyContainer from './SmileyContainer';
import { CardSection, Button } from '../common';



class Q1 extends Component{


    onButtonPressed(){



    }




    render(){

        return(
            <ImageBackground
                source={require('../../img/survey_background.png')}
                style={styles.backgroundImage}
            >
                <StatusBar barStyle="light-content"/>
                <View style={{paddingTop: 50}}>

                    <CardSection style ={styles.inputContainer}>
                        <Text style={styles.textStyle}> How do you feel today?   </Text>

                    </CardSection>

                    <CardSection style ={styles.inputContainer}>
                       <SmileyContainer/>



                    </CardSection>

                    <CardSection style ={styles.inputContainer}>
                        <SmileyContainer/>

                    </CardSection>


                    <CardSection style ={styles.buttonContainer}>
                    <SmileyContainer/>
                </CardSection>
                    <CardSection style ={styles.buttonContainer}>
                        <Button onPress={this.onButtonPressed.bind(this)}>
                            Next >
                        </Button>
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
        fontSize: 25,
        color: '#fff',
        alignSelf: 'center'

    }

};






export default  Q1;