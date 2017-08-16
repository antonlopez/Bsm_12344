import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {STUDENT_UPDATE, STUDENT_CREATE} from './types';

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
                    Actions.startPage();

                }

            );

    };



};

