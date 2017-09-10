import React, {Component} from 'react';
import {View, ImageBackground, Text, StatusBar} from 'react-native'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import CheckBox from 'react-native-checkbox';
import { answerUpdate, updateCheckbox,resetCheckbox } from '../../actions';
import { CardSection, Button, SurveyInput } from '../common';
import non_selected from '../../img/orange_circle.png';
import selected from '../../img/orange_circle_selected.png';





class Q5 extends Component{




    onButtonNextPressed() {

        this.props.resetCheckbox();
        Actions.Q6();


    }



    onButtonPressed(id, ch){

        this.props.updateCheckbox({props: ch, value: true });
        this.props.answerUpdate({props:'q5', value: id});


    }

    updateOther(text){
        this.props.resetCheckbox();
        this.props.answerUpdate({props: 'q5', value: text});


    }



    render(){



        return(
            <ImageBackground
                source={require('../../img/survey_background.png')}
                style={styles.backgroundImage}
            >
                <StatusBar barStyle="light-content"/>
                <View style={{paddingTop: 50}}>

                    <CardSection style ={{paddingTop: 20, backgroundColor: 'transparent', borderBottomWidth: 0, alignSelf:'center'}}>
                        <Text style={styles.textStyle}> How could you describe your spiritual beliefs now? </Text>

                    </CardSection>

                    <CardSection style ={{paddingTop: 40, backgroundColor: 'transparent', borderBottomWidth: 0}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight:15, paddingTop: 15}}>
                            <CheckBox
                                label='Christian'
                                checked={this.props.ch1}
                                checkedImage={selected}
                                uncheckedImage={non_selected}
                                onChange={() => this.onButtonPressed('Christian', 'ch1')}
                            />
                            <CheckBox
                                label='Catholic'
                                checkedImage={selected}
                                uncheckedImage={non_selected}
                                onChange={() => this.onButtonPressed('Catholic', 'ch2')}
                                checked={this.props.ch2}

                            />

                        </View>

                    </CardSection>
                    <CardSection style ={styles.inputContainer}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight:10, paddingTop: 15}}>
                            <CheckBox
                                label='Muslim'
                                checkedImage={selected}
                                uncheckedImage={non_selected}
                                onChange={() => this.onButtonPressed('Muslim', 'ch3')}
                                checked={this.props.ch3}
                            />
                            <CheckBox
                                label='Buddhist'
                                onChange={() => this.onButtonPressed('Buddhist', 'ch4')}
                                checkedImage={selected}
                                uncheckedImage={non_selected}
                                checked={this.props.ch4}
                            />

                        </View>

                    </CardSection>

                    <CardSection style ={styles.inputContainer}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight:35, paddingTop: 15}}>
                            <CheckBox
                                label='Atheist/Agnostic'
                                checkedImage={selected}
                                uncheckedImage={non_selected}
                                onChange={(checked) => this.onButtonPressed('Atheist/Agnostic', 'ch5')}
                                checked={this.props.ch5}
                            />
                            <CheckBox
                                label='none'
                                checkedImage={selected}
                                uncheckedImage={non_selected}
                                onChange={() => this.onButtonPressed('none', 'ch6')}
                                checked={this.props.ch6}
                            />


                        </View>


                    </CardSection>
                    <CardSection style ={styles.inputContainer}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight:15, paddingTop: 15}}>

                            <SurveyInput
                                label = "Other:"
                                //value = {this.props.otherBox}
                                onChangeText = { text => this.updateOther(text)}
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
        fontSize: 25,
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


    const { q5, } = state.studentInfo;

    const {ch1, ch2,ch3,ch4,ch5,ch6, otherBox} = state.checkbox;



    return {q5, ch1,ch2,ch3,ch4,ch5,ch6,otherBox};

};



export default  connect(mapToStateProps, {answerUpdate, updateCheckbox, resetCheckbox}) (Q5);