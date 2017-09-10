import React, {Component} from 'react';
import {View, ImageBackground, Text, StatusBar} from 'react-native'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { questionUpdate, updateSmiley, answerUpdate } from '../../actions';
import { CardSection, Button, SmileyButton } from '../common';
import{amazed_green, cool_green, happy_green, mad_green, meh_green, No_answer_green, sad_green, tired_green, very_happy_green } from '../../img/smileys'




class Q1 extends Component{


    onButtonPressed(id) {
        console.log(this.props.name, this.props.age , this.props.major);

        this.props.answerUpdate({props: 'q1', value: id});
       // this.props.updateSmiley({props: id, value: id});

        if(id ==='cool'){
            this.props.updateSmiley({props: id, value: cool_green});
        }
        if(id==='amazed'){
            this.props.updateSmiley({props: id, value: amazed_green});

        }
        if(id==='happy'){
            this.props.updateSmiley({props: id, value: happy_green});

        }
        if(id==='mad'){
            this.props.updateSmiley({props: id, value: mad_green});

        }
        if(id==='meh'){
            this.props.updateSmiley({props: id, value: meh_green});

        }
        if(id==='No_answer'){
            this.props.updateSmiley({props: id, value: No_answer_green});

        }
        if(id==='sad'){
            this.props.updateSmiley({props: id, value: sad_green});

        }
        if(id==='tired'){
            this.props.updateSmiley({props: id, value: tired_green});

        }
        if(id==='very_happy'){
            this.props.updateSmiley({props: id, value: very_happy_green});

        }




    }

    onButtonNextPressed() {
        Actions.Q2();

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
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight:15}}>
                            <SmileyButton text = "Amazed!" source ={this.props.amazed} onPress={()=>this.onButtonPressed('amazed')}  />
                            <SmileyButton text = "Happy!" source ={this.props.happy} onPress={()=>this.onButtonPressed('happy')}  />
                            <SmileyButton text = "Cool!" source ={this.props.cool} onPress={()=>this.onButtonPressed('cool')}  />
                        </View>



                    </CardSection>

                    <CardSection style ={styles.inputContainer}>


                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight:15}}>
                            <SmileyButton text = "Mad!" source ={this.props.mad} onPress={() => this.onButtonPressed('mad')}  />
                            <SmileyButton text = "Meh" source ={this.props.meh} onPress={()=>this.onButtonPressed('meh')}  />
                            <SmileyButton text = "No answer" source ={this.props.No_answer} onPress={()=>this.onButtonPressed('No_answer')}  />
                        </View>

                    </CardSection>

                    <CardSection style ={styles.inputContainer}>


                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight:15}}>
                            <SmileyButton text = "Sad" source ={this.props.sad} onPress={() => this.onButtonPressed('sad')}  />
                            <SmileyButton text = "Tired" source ={this.props.tired} onPress={()=>this.onButtonPressed('tired')}  />
                            <SmileyButton text = "Very Happy!" source ={this.props.very_happy} onPress={()=>this.onButtonPressed('very_happy')}  />
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
    buttonContainer:{paddingTop: 40,
        backgroundColor: 'transparent',
        borderBottomWidth: 0},
    textStyle :{
        fontSize: 25,
        color: '#fff',
        alignSelf: 'center'

    }

};


const mapToStateProps = state => {


    const {amazed, cool, happy, mad, meh, No_answer, sad, tired, very_happy} = state.smileys;




    return { amazed, cool, happy, mad, meh, No_answer, sad, tired, very_happy};

};



export default  connect(mapToStateProps, {answerUpdate, updateSmiley }) (Q1);