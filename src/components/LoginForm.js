import React, {Component} from 'react';
import {Text, Image, View, ImageBackground, StatusBar } from 'react-native'
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, Button, Spinner } from './common';



class LoginForm extends Component{

    onEmailChange(text){
    this.props.emailChanged(text);

    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPressed(){
        const {email, password} = this.props;

        this.props.loginUser({email, password});

    }

    renderButton(){

        if (this.props.loading){
        return <Spinner size = "large"/>;
              }

        return (<Button onPress={this.onButtonPressed.bind(this)}>
            Login
        </Button>);
    }


    render(){

        return(
            <ImageBackground
                source={require('../img/background.png')}
                style={styles.backgroundImage}
            >

             <StatusBar barStyle="light-content"/>

            <Card >


                <CardSection style={{paddingTop: 365, backgroundColor: 'transparent'}}>
                    <Input label="Email"
                            placeholder="email@gmail.com"
                           onChangeText={this.onEmailChange.bind(this)}
                           value ={this.props.email}
                    />
                </CardSection>



                <CardSection style={{backgroundColor: 'transparent'}}>
                    <Input label="Password"
                           placeholder="Password"
                           secureTextEntry
                           onChangeText= {this.onPasswordChange.bind(this)}
                           value = {this.props.password}
                    />
                </CardSection>

                <Text style={ styles.errorTextStyle} >
                    {this.props.error}</Text>

                <CardSection style ={{backgroundColor: 'transparent'}} >
                    {this.renderButton()}
                </CardSection>
            </Card>

            </ImageBackground>

        );

    }
}


const styles = {
    errorTextStyle: {
      fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        backgroundColor: 'transparent'


    },
    imageStyle : {
        width: 300,
        height: 200,



    },
    imgContainer: {
        justifyContent: 'center',         // up and down
        alignItems: 'center',             // left or right



    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    }





};

const mapStateToprops = state => {

    return{
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };



};




export default connect(mapStateToprops, {emailChanged , passwordChanged, loginUser})(LoginForm);
