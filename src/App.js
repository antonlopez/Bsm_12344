import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; // appy reduxthunk with applyMiddleware
import reducers from './reducers'
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component{

    componentWillMount(){
        const config = {
          
        };
        firebase.initializeApp(config);

    }



    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));    // reduxthunk
        return (
            <Provider store={store}>
               <Router/>

            </Provider>


        );

    }
}

export default App;
