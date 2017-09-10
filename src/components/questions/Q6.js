import React, {Component} from 'react';
import {View, ImageBackground, Text, StatusBar} from 'react-native'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import CheckBox from 'react-native-checkbox';
import { answerUpdate, updateCheckbox,resetCheckbox } from '../../actions';
import { CardSection, Button, SurveyInput } from '../common';
import non_selected from '../../img/orange_circle.png';
import selected from '../../img/orange_circle_selected.png';





class Q6 extends Component{




    onButtonNextPressed() {

        this.props.resetCheckbox();
        Actions.Q7();


    }



    onButtonPressed(id, ch){

        this.props.updateCheckbox({props: ch, value: true });
        this.props.answerUpdate({props:'q6', value: id});


    }

    updateOther(text){
        this.props.resetCheckbox();
        this.props.answerUpdate({props: 'q6', value: text});


    }



    render(){

        const text = 'For another occasion, will you be interested in a brief 5-10 minutes presentation on how the bible says you can have a relationship with God?';



        return(
            <ImageBackground
                source={require('../../img/survey_background.png')}
                style={styles.backgroundImage}
            >
                <StatusBar barStyle="light-content"/>
                <View style={{paddingTop: 50}}>

                    <CardSection style ={{paddingTop: 20, backgroundColor: 'transparent', borderBottomWidth: 0, alignSelf:'center'}}>
                        <Text style={styles.textStyle}> {text}</Text>

                    </CardSection>

                    <CardSection style ={{paddingTop: 40, backgroundColor: 'transparent', borderBottomWidth: 0}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight:15, paddingTop: 15}}>

                            <CheckBox
                                label='Yes'
                                checkedImage={selected}
                                uncheckedImage={non_selected}
                                onChange={() => this.onButtonPressed('yes', 'ch1')}
                                checked={this.props.ch1}

                            />

                        </View>

                    </CardSection>
                    <CardSection style ={styles.inputContainer}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight:10, paddingTop: 15}}>
                            <CheckBox
                                label='No'
                                checkedImage={selected}
                                uncheckedImage={non_selected}
                                onChange={() => this.onButtonPressed('No', 'ch2')}
                                checked={this.props.ch2}
                            />


                        </View>

                    </CardSection>



                    <CardSection style ={styles.buttonContainer}>
                        <Button onPress={this.onButtonNextPressed.bind(this)}>
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
        borderBottomWidth: 0,
    },
    buttonContainer:{paddingTop: 120,
        backgroundColor: 'transparent',
        borderBottomWidth: 0},
    textStyle :{
        fontSize: 18,
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


    const { q6, } = state.studentInfo;

    const {ch1, ch2,ch3,ch4,ch5,ch6, otherBox} = state.checkbox;



    return {q6, ch1,ch2,ch3,ch4,ch5,ch6,otherBox};

};



export default  connect(mapToStateProps, {answerUpdate, updateCheckbox, resetCheckbox}) (Q6);