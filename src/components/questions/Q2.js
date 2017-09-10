import React, {Component} from 'react';
import {View, ImageBackground, Text, StatusBar} from 'react-native'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import CheckBox from 'react-native-checkbox';
import { answerUpdate, updateCheckbox,resetCheckbox } from '../../actions';
import { CardSection, Button, SmileyButton } from '../common';
import non_selected from '../../img/orange_circle.png';
import selected from '../../img/orange_circle_selected.png';





class Q2 extends Component{




    onButtonNextPressed() {

       this.props.resetCheckbox();
        Actions.Q3();


    }



    onButtonPressed(id, ch){

       this.props.updateCheckbox({props: ch, value: true });
       this.props.answerUpdate({props:'q2', value: id});

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
                        <Text style={styles.textStyle}> What year are you in college? </Text>

                    </CardSection>

                    <CardSection style ={{paddingTop: 40, backgroundColor: 'transparent', borderBottomWidth: 0}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight:15, paddingTop: 15}}>
                            <CheckBox
                                label='Freshman'
                                checked={this.props.ch1}
                                checkedImage={selected}
                                uncheckedImage={non_selected}
                                onChange={() => this.onButtonPressed('Freshman', 'ch1')}
                            />
                            <CheckBox
                                label='Junior'
                                checkedImage={selected}
                                uncheckedImage={non_selected}
                                onChange={() => this.onButtonPressed('Junior', 'ch2')}
                                checked={this.props.ch2}

                            />

                        </View>

                    </CardSection>
                    <CardSection style ={styles.inputContainer}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight:15, paddingTop: 15}}>
                            <CheckBox
                                label='Sophomore'
                                checkedImage={selected}
                                uncheckedImage={non_selected}
                                onChange={() => this.onButtonPressed('Sophomore', 'ch3')}
                                checked={this.props.ch3}
                            />
                            <CheckBox
                                label='Senior'
                                onChange={() => this.onButtonPressed('Senior', 'ch4')}
                                checkedImage={selected}
                                uncheckedImage={non_selected}
                                checked={this.props.ch4}
                            />

                        </View>

                    </CardSection>

                    <CardSection style ={styles.inputContainer}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight:15, paddingTop: 15}}>
                            <CheckBox
                                label='Grad Student'
                                checkedImage={selected}
                                uncheckedImage={non_selected}
                                onChange={(checked) => this.onButtonPressed('Grad Student', 'ch5')}
                                checked={this.props.ch5}
                            />


                        </View>


                    </CardSection>
                    <CardSection style ={styles.inputContainer}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight:15, paddingTop: 15}}>
                            <CheckBox
                                label='Alumni/Faculty/Staff'
                                checkedImage={selected}
                                uncheckedImage={non_selected}
                                onChange={() => this.onButtonPressed('Alumni/Faculty/Staff', 'ch6')}
                                checked={this.props.ch6}
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
        borderBottomWidth: 0
    },
    buttonContainer:{paddingTop: 120,
        backgroundColor: 'transparent',
        borderBottomWidth: 0},
    textStyle :{
        textAlign: 'center',
        fontSize: 25,
        color: '#fff',
        alignSelf: 'center',
        justifyContent:'center'

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


    const { q2, counter } = state.studentInfo;

    const {ch1, ch2,ch3,ch4,ch5,ch6} = state.checkbox;



    return {q2, counter, ch1,ch2,ch3,ch4,ch5,ch6};

};



export default  connect(mapToStateProps, {answerUpdate, updateCheckbox, resetCheckbox}) (Q2);