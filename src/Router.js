import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import StartPage from './components/startPage';
import Q1 from './components/questions/Q1';
import Q2 from './components/questions/Q2';
import Q3 from './components/questions/Q3';
import Q4 from './components/questions/Q4';
import Q5 from './components/questions/Q5';
import Q6 from './components/questions/Q6';
import Q7 from './components/questions/Q7';
import FinalPage from './components/FinalPage';

const RouterComponent = () => {


    return(

        <Router>
           <Scene key="auth">




               <Scene
                   key="StartPage"
                   component={StartPage}
                   hideNavBar={true}

               />
               <Scene
                   key="Q1"
                   component={Q1}
                   hideNavBar={true}

               />

               <Scene
                   key="Q2"
                   component={Q2}
                   hideNavBar={true}

               />
               <Scene
                   key="Q3"
                   component={Q3}
                   hideNavBar={true}

               />
               <Scene
                   key="Q4"
                   component={Q4}
                   hideNavBar={true}

               />
               <Scene
                   key="Q5"
                   component={Q5}
                   hideNavBar={true}

               />
               <Scene
                   key="Q6"
                   component={Q6}
                   hideNavBar={true}

               />
               <Scene
                   key="Q7"
                   component={Q7}
                   hideNavBar={true}

               />
               <Scene
                   key="FinalPage"
                   component={FinalPage}
                   hideNavBar={true}

               />
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









            </Scene>


        </Router>

    );


};

export default RouterComponent;