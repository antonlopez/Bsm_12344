import {ANSWER_UPDATE, STUDENT_CREATE, RESET_SURVEY} from '../actions/types';

const INITIAL_STATE = { name:'', age:'', major:'', q1:'', q2:'', q3:'', q4:'', q5:'', q6:'', q7:false, phone:'', email:'' };

export default (state = INITIAL_STATE, action) => {

    switch(action.type){

        case ANSWER_UPDATE:              //action.payload === {prop: 'name', value: 'jane' }
            return {...state, [action.payload.props] : action.payload.value } ; // [] key interpolation

        case RESET_SURVEY:
            return INITIAL_STATE;



        default:
            return state;

    }


}