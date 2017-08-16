import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import StartPage from './components/startPage';

const RouterComponent = () => {


    return(

        <Router>
           <Scene key="auth">
            <Scene
                hideNavBar ={true}
                key="login"
                component={LoginForm}

            />
           </Scene>

            <Scene key="main">
             <Scene
                key="startPage"
                component={StartPage}
                hideNavBar={true}

             />
                <Scene
                    key="startSurvey"
                    component={EmployeeCreate}
                    hideNavBar={true}

                />
            </Scene>


        </Router>

    );


};

export default RouterComponent;