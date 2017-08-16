import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import employeeReducer from './employeeReducer';
import StudentInfoReducer from './StudentInfoReducer';

export default combineReducers({

    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: employeeReducer,
    studentInfo: StudentInfoReducer


});