import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import employeeReducer from './employeeReducer';
import StudentInfoReducer from './StudentInfoReducer';
import SmileysReducer from './SmileysReducer';
import CheckBoxReducer from './CheckBoxReducer';

export default combineReducers({

    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: employeeReducer,
    studentInfo: StudentInfoReducer,
    smileys: SmileysReducer,
    checkbox: CheckBoxReducer


});