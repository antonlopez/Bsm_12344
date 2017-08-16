import {STUDENT_UPDATE, STUDENT_CREATE} from '../actions/types';

const INITIAL_STATE = { name:'', age:'', major:''};

export default (state = INITIAL_STATE, action) => {

    switch(action.type){

        case STUDENT_UPDATE:              //action.payload === {prop: 'name', value: 'jane' }
            return {...state, [action.payload.props] : action.payload.value } ; // [] key interpolation

        case STUDENT_CREATE:
            return INITIAL_STATE;

        default:
            return state;

    }


}