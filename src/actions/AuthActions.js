import { Actions } from 'react-native-router-flux';
import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED, LOGIN_USER_LOADING} from './types'
import firebase from 'firebase';

export const emailChanged = (text) => {

    return{                 //we want to return an action which is just a plain javascript object
        type: EMAIL_CHANGED,
        payload: text                    //because we want to communicate the new text provided

    };

};

export const passwordChanged = (text) => {

    return{
        type: PASSWORD_CHANGED,
        payload: text

    };

};

export const loginUser = ({email, password}) => {

    return (dispatch) => {                                // reduxThunk is used here for the asynchronous action


        dispatch({ type: LOGIN_USER_LOADING } );

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch( (error) => {
                console.log(error); // use for debug

                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));

            })

    };



};

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAILED

    })

}


const loginUserSuccess = (dispatch, user) => {

    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user

    });

    Actions.main();



}