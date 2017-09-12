import React, {Component} from 'react';
import {View, ImageBackground, Text, StatusBar} from 'react-native'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import CheckBox from 'react-native-checkbox';
import { answerUpdate, updateCheckbox,resetCheckbox,studentInfoUpload } from '../../actions';
import { CardSection, Button, Input } from '../common';
import non_selected from '../../img/orange_circle.png';
import selected from '../../img/orange_circle_selected.png';





class Q7 extends Component{




    onButtonNextPressed() {

        const{name, age, major, q1, q2, q3, q4, q5, q6, q7, phone, email } = this.props;

        this.props.studentInfoUpload({name, age, major, q1, q2, q3, q4, q5, q6, q7, phone, email });
        Actions.FinalPage();
        this.props.resetCheckbox();




    }



    onButtonPressed(id, ch){

        this.props.updateCheckbox({props: ch, value: true });
        this.props.answerUpdate({props:'q7', value: id});


    }

    updateOther(text){
        this.props.resetCheckbox();
        this.props.answerUpdate({props: 'q7', value: text});


    }

    textBox(id, text){
        this.props.answerUpdate({props: id, value: text});

    }



    render(){

        const text = 'Would you like to hear more about the UTEP BSM?';

        let phone =null;
        let email =null;

        if (this.props.q7){
            phone =  <Input label="Phone:"
                                    placeholder="555-555-5555"
                                    placeholderTextColor='#39393a'
                                    onChangeText={text => this.textBox('phone', text)}
                                    keyboardType="number-pad"
                      /> ;
            email=  <Input label="Email:"
                           placeholder="Your-Email@email.com"
                           placeholderTextColor='#39393a'
                           onChangeText={text => this.textBox('email', text)}

            /> ;


        }

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
                                onChange={() => this.onButtonPressed(true, 'ch1')}
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
                                onChange={() => this.onButtonPressed(false, 'ch2')}
                                checked={this.props.ch2}
                            />


                        </View>

                    </CardSection>


                    <CardSection style ={{paddingTop: 25, backgroundColor: 'transparent', borderBottomWidth: 0,}}>
                        {phone}
                    </CardSection>
                    <CardSection style ={styles.inputContainer}>
                        {email}
                    </CardSection>


                    <CardSection style ={styles.buttonContainer}>
                        <Button onPress={this.onButtonNextPressed.bind(this)}>
                            Finish
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


    const { name, age, major, q1, q2, q3, q4, q5, q6, q7, phone, email } = state.studentInfo;

    const {ch1, ch2} = state.checkbox;



    return {ch1,ch2,name, age, major, q1, q2, q3, q4, q5, q6, q7, phone, email};

};



export default  connect(mapToStateProps, {answerUpdate, updateCheckbox, resetCheckbox,studentInfoUpload}) (Q7);