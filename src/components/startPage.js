import React, {Component} from 'react';
import {View, ImageBackground} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { studentUpdate, studentCreate} from '../actions';

import { CardSection, Button, Input } from './common';



class StartPage extends Component{


    onButtonPressed(){
        const {name, age, major} = this.props;

        console.log(name, age, major);

        this.props.studentCreate({name, age, major});

        Actions.Q1();
    }




    render(){

        return(
            <ImageBackground
                source={require('../img/start.png')}
                style={styles.backgroundImage}
            >
            <View style={{paddingTop: 300}}>

                <CardSection style ={styles.inputContainer}>
                    <Input label = "Name:"
                           placeHolder="Insert Name"
                           value = {this.props.name}
                           onChangeText = { text => this.props.studentUpdate({props: 'name', value: text})}
                    />

                </CardSection>

                <CardSection style ={styles.inputContainer}>
                    <Input label = "Age:"
                           placeHolder="Insert Age"
                           keyboardType = "numeric"
                           value = {this.props.age}
                           onChangeText = { text => this.props.studentUpdate({props: 'age', value: text})}
                    />

                </CardSection>

                <CardSection style ={styles.inputContainer}>
                    <Input label = "Major:"
                           placeHolder="Insert "
                           value = {this.props.major}
                           onChangeText = { text => this.props.studentUpdate({props: 'major', value: text})}
                    />

                </CardSection>


                <CardSection style ={styles.buttonContainer}>
                <Button style={{borderWidth:5, borderColor: '#fff'}} onPress={this.onButtonPressed.bind(this)}>
                    Start
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
        borderBottomWidth: 0}

};

const mapToStateProps = state => {
    const { name, age, major } = state.studentInfo;

    return {name, age, major};

};




export default connect(mapToStateProps, {studentUpdate, studentCreate}) (StartPage);
