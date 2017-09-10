import {SMILEY_UPDATE, RESET} from '../actions/types';
import{amazed, cool, happy, mad, meh, No_answer, sad, tired, very_happy } from '../img/smileys'

const INITIAL_STATE = { amazed: amazed, cool:cool, happy:happy, mad:mad, meh:meh, No_answer:No_answer, sad: sad, tired:tired, very_happy: very_happy};

export default (state = INITIAL_STATE, action) => {

    switch(action.type){

        case SMILEY_UPDATE:              //action.payload === {prop: 'name', value: 'jane' }

            return {...INITIAL_STATE, [action.payload.props] : action.payload.value } ; // [] key interpolation

        case RESET:
            return INITIAL_STATE;

        default:
            return state;

    }


}