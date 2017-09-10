import {CHECKBOX_UPDATE, RESET} from '../actions/types';
import{amazed, cool, happy, mad, meh, No_answer, sad, tired, very_happy } from '../img/smileys'

const INITIAL_STATE = { ch1: false, ch2:false, ch3:false, ch4:false, ch5:false, ch6:false, ch7: false, ch8:false, ch9: false, otherBox:''};

export default (state = INITIAL_STATE, action) => {

    switch(action.type){

        case CHECKBOX_UPDATE:              //action.payload === {prop: 'name', value: 'jane' }

            return {...INITIAL_STATE, [action.payload.props] : action.payload.value } ; // [] key interpolation

        case RESET:
            return INITIAL_STATE;

        default:
            return state;

    }


}