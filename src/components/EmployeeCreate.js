import React, {Component} from 'react';
import {Picker, Text} from 'react-native';
import{connect} from 'react-redux';
import { employeeUpdate, employeeCreate} from '../actions';
import {Card, CardSection, Button, Input} from './common';

class EmployeeCreate extends Component{

    onButtonPress(){

        const {name, phone, shift} = this.props;

        console.log(name,phone,shift);

        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});  // we initiate shift
    }

    render(){

        return(
           <Card>

               <CardSection>
                   <Input label = "Name"
                          placeHolder="Insert Name"
                          value = {this.props.name}
                          onChangeText = { text => this.props.employeeUpdate({props: 'name', value: text})}
                   />

               </CardSection>


               <CardSection>
                   <Input label = "Phone"
                          placeHolder="555-555-5555"
                          //value = {this.props.phone}
                          onChangeText = { text => this.props.employeeUpdate({props: 'phone', value: text})}
                   />

               </CardSection>



               <CardSection style={{flexDirection: 'column'}}>
                   <Text style={styles.pickerTextStyle}>Select Shift</Text>
                   <Picker
                       selectedValue={this.props.shift}
                       onValueChange={value => this.props.employeeUpdate({props: 'shift', value})}
                   >
                       <Picker.Item label="Monday" value="Monday" />
                       <Picker.Item label="Tuesday" value="Tuesday" />
                       <Picker.Item label="Wednesday" value="Wednesday" />
                       <Picker.Item label="Thursday" value="Thursday" />
                       <Picker.Item label="Friday" value="Friday" />
                       <Picker.Item label="Saturday" value="Saturday" />
                       <Picker.Item label="Sunday" value="Sunday" />
                   </Picker>

               </CardSection>


               <CardSection>
                   <Button onPress={this.onButtonPress.bind(this)} > Create </Button>

               </CardSection>


           </Card>


        );
    }

}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20

    }

}

const mapToStateProps = state => {

    const { name, phone, shift} = state.employeeForm;

    return {name, phone, shift};

};


export default connect(mapToStateProps, {employeeUpdate, employeeCreate}) (EmployeeCreate);