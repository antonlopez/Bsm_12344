import React, {Component} from 'react';
import {View, ImageBackground, Text, StatusBar} from 'react-native'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import CheckBox from 'react-native-checkbox';
import { answerUpdate, updateCheckbox,resetCheckbox } from '../../actions';
import { CardSection, Button, SmileyButton } from '../common';
import non_selected from '../../img/orange_circle.png';
import selected from '../../img/orange_circle_selected.png';





class Q3 extends Component{




    onButtonNextPressed() {

        this.props.resetCheckbox();
        Actions.Q4();


    }



    onButtonPressed(id, ch){

        this.props.updateCheckbox({props: ch, value: true });
        this.props.answerUpdate({props:'q3', value: id});

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
                        <Text style={styles.textStyle}> Where do you live? </Text>

                    </CardSection>

                    <CardSection style ={{paddingTop: 40, backgroundColor: 'transparent', borderBottomWidth: 0}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight:15, paddingTop: 15}}>
                            <CheckBox
                                label='Off Campus'
                                checked={this.props.ch1}
                                checkedImage={selected}
                                uncheckedImage={non_selected}
                                onChange={() => this.onButtonPressed('Off Campus', 'ch1')}
                            />
                            <CheckBox
                                label='Miner Canyon'
                                checkedImage={selected}
                                uncheckedImage={non_selected}
                                onChange={() => this.onButtonPressed('Miner Canyon', 'ch2')}
                                checked={this.props.ch2}

                            />

                        </View>

                    </CardSection>
                    <CardSection style ={styles.inputContainer}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight:15, paddingTop: 15}}>
                            <CheckBox
                                label='Miner Heights'
                                checkedImage={selected}
                                uncheckedImage={non_selected}
                                onChange={() => this.onButtonPressed('Miner Heights', 'ch3')}
                                checked={this.props.ch3}
                            />
                            <CheckBox
                                label='Miner Village'
                                onChange={() => this.onButtonPressed('Miner Village', 'ch4')}
                                checkedImage={selected}
                                uncheckedImage={non_selected}
                                checked={this.props.ch4}
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
        alignSelf: 'center'

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


    const { q3 } = state.studentInfo;

    const {ch1, ch2,ch3,ch4,ch5,ch6} = state.checkbox;



    return {q3, ch1,ch2,ch3,ch4,ch5,ch6};

};



export default  connect(mapToStateProps, {answerUpdate, updateCheckbox, resetCheckbox}) (Q3);