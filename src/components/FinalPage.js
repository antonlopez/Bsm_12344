import React, {Component} from 'react';
import {View, ImageBackground, Text, StatusBar} from 'react-native'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { answerUpdate, updateCheckbox,resetCheckbox } from '../actions';
import { CardSection, Button, Input } from './common';






class FinalPage extends Component{




    onButtonNextPressed() {

        Actions.StartPage();



    }







    render(){



        return(
            <ImageBackground
                source={require('../img/final.jpg')}
                style={styles.backgroundImage}
            >
                <StatusBar barStyle="light-content"/>
                <View style={{paddingTop: 50}}>

                    <CardSection style ={{paddingTop: 20, backgroundColor: 'transparent', borderBottomWidth: 0, alignSelf:'center'}}>
                        <Text style={styles.textStyle}> Thank you!</Text>

                    </CardSection>


                    <CardSection style ={{paddingTop: 20, backgroundColor: 'transparent', borderBottomWidth: 0, alignSelf:'center'}}>
                        <Text style={styles.textStyle}> Insert Ads here</Text>

                    </CardSection>


                    <CardSection style ={styles.buttonContainer}>
                        <Button onPress={this.onButtonNextPressed.bind(this)}>
                            Start a new Survey!
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
        borderBottomWidth: 0,
    },
    buttonContainer:{paddingTop: 120,
        backgroundColor: 'transparent',
        borderBottomWidth: 0},
    textStyle :{
        fontSize: 55,
        color: '#fff',
        textAlign: 'center'

    },
    QuestionTextStyle :{
        fontSize: 15,
        color: '#fff',
        alignSelf: 'center'

    },
    labelStyle: {
        marginLeft: 4,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2f4f4f'
    }

};


const mapToStateProps = state => {


    const { q7, } = state.studentInfo;

    const {ch1, ch2,ch3,ch4,ch5,ch6, otherBox} = state.checkbox;



    return {q7, ch1,ch2,ch3,ch4,ch5,ch6,otherBox};

};



export default  connect(mapToStateProps, {answerUpdate, updateCheckbox, resetCheckbox}) (FinalPage);