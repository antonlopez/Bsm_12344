import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {STUDENT_UPDATE,
        STUDENT_CREATE,
        QUESTION_UPDATE,
        SMILEY_UPDATE,
        SMILEY_CREATE,
        ANSWER_UPDATE,
        CHECKBOX_UPDATE,
        RESET,
        RESET_SURVEY,
        QUESTION_FETCH_SUCCESS  } from './types';

export const studentUpdate = ({props, value}) => {

    return {
        type: STUDENT_UPDATE,
        payload: {props, value}

    };


};

export const studentCreate = ({name, age, major}) => {

    const {currentUser} = firebase.auth();

    return (dispatch) => {

        firebase.database().ref(`/users/${currentUser.uid}/students`)
            .push({name, age, major})
            .then(() => {

                    dispatch({type: STUDENT_CREATE});
                    Actions.Q1();

                }

            );

    };



};


export const studentInfoUpload = ({name, age, major, q1 , q2, q3, q4, q5, q6, q7, phone, email}) => {

    const {currentUser} = firebase.auth();

    return (dispatch) => {

        firebase.database().ref(`/users/${currentUser.uid}/students`)
            .push({name, age, major, q1 , q2, q3, q4, q5, q6, q7, phone, email})
            .then(() => {

                    dispatch({type: RESET_SURVEY});
                     //Actions.FinalPage();

                }

            );

    };



};



export const questionUpdate = ({props, value}) => {


    return {
        type: QUESTION_UPDATE,
        payload: {props, value}

    };


};


export const updateSmiley = ({props, value}) => {


    return {
        type: SMILEY_UPDATE,
        payload: {props, value}

    };


};

export const updateCheckbox = ({props, value}) => {


    return {
        type: CHECKBOX_UPDATE,
        payload: {props, value}

    };


};
export const resetCheckbox = () => {


    return (dispatch) => {
        dispatch({ type: RESET } );


    };


};



export const answerUpdate = ({props, value}) => {

   // const {currentUser} = firebase.auth();


    return {
        type: ANSWER_UPDATE,
        payload: {props, value}

    };



};


export const questionFetch = () => {

    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/questions`)
            .on('value', snapshot => {        // anytime any data call this function with an object to describe the data inside

                dispatch({ type: QUESTION_FETCH_SUCCESS,
                    payload: snapshot.val()
                });
            });

    };


};

