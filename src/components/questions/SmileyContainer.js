import React, {Component} from 'react';
import {View, ImageBackground, Text} from 'react-native'
import { connect } from 'react-redux';
import { studentUpdate, studentCreate} from '../../actions';
import amazed from '../../img/smileys/amazed.png';
import cool from  '../../img/smileys/cool.png';
import happy from  '../../img/smileys/happy.png';

import { SmileyButton } from '../common';



class SmileyContainer extends Component{











    render(){

        return(


                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 15, paddingRight:15}}>
                    <SmileyButton text = "Amazed!" source ={this.props.source} onPress={this.props.onPress}  />
                    {/*<SmileyButton text = "Happy!" source ={happy} onPress={()=>this.onButtonPressed(happy)}  />*/}
                    {/*<SmileyButton text = "Cool!" source ={cool} onPress={()=>this.onButtonPressed(cool)}  />*/}
                </View>








        );

    }
}


const styles = {
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    },
    inputContainer:{paddingTop: 20,
        backgroundColor: 'transparent',
        borderBottomWidth: 0
    },
    buttonContainer:{paddingTop: 40,
        backgroundColor: 'transparent',
        borderBottomWidth: 0},
    textStyle :{
        fontSize: 20,
        color: '#fff',
        alignSelf: 'center'

    }

};






export default  SmileyContainer;