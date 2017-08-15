import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { ListView} from 'react-native';
import {employeeFetch} from '../actions';
import EmployeeListItem from './employeeListItem';

class EmployeeList extends Component {

    componentWillMount(){

        this.props.employeeFetch();

        this.createDataSource(this.props);



    }

    componentWillReceiveProps(nextProps){    // nexrProps are the next set Of props that this component will
                                            // be rendered with, this.props still the old set of props

        this.createDataSource(nextProps);

    }

    createDataSource({employees}){

        const ds = new ListView.DataSource({

            rowHasChanged: (r1,r2) => r1 !== r2

        });

        this.dataSource = ds.cloneWithRows(employees);

    }

    renderRow(employee){

        return <EmployeeListItem employee = {employee}/>



    }


    render(){

        console.log(this.props);

        return(

        <ListView

            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}

        />


        );

    }

}

const mapStateToProps = state => {

    const employees = _.map(state.employees, (val, uid) => {   //uid is the key of the record
                                                               // val has the name phone shift properties
        return {...val, uid};    // {shift: Monday, name: 'asdas' , id:'3232'
    } );

return {employees};

};

export default connect(mapStateToProps, {employeeFetch} ) (EmployeeList);