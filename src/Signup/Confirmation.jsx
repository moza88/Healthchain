import React, { Component } from 'react';
import { Button, List} from 'semantic-ui-react';
import firebase from "firebase";
import config from './../firebase';
import { Container, Flex, Box, Input, Subhead, Text } from 'rebass';

class Confirmation extends Component{

    constructor(props){
        super(props);
        this.ref = firebase.firestore().collection('users');
        
        this.unsubscribe = null;

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            street_address: '',
            city: '',
            country: '',
            emergencyContactName: '',
            emergencyContactPhone: '',
        };
    }

    addTodo() {
        const {values: { firstName, lastName, email, phone, street_address, city, country, emergencyContactName, emergencyContactPhone}} = this.props;

        var firstName_save = firstName;
        var lastName_save = lastName;
        var email_save = email;
        var phone_save = phone;
        var street_address_save = street_address;
        var city_save = city;
        var country_save = country;
        var emergencyContactName_save = emergencyContactName;
        var emergencyContactPhone_save = emergencyContactPhone;

        this.ref.add({
          firstName: firstName_save,
          lastName: lastName_save,
          email: email_save,
          phone: phone_save,
          street_address: street_address_save,
          city: city_save,
          country: country_save,
          emergencyContactName: emergencyContactName_save,
          emergencyContactPhone: emergencyContactPhone_save,
        });
      
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            street_address: '',
            city: '',
            country: '',
            emergencyContactName: '',
            emergencyContactName: '',
        });

        this.props.nextStep();
      }
    
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    componentDidUpdate(prevProps, prevState) {

        // check on previous state
        // only write when it's different with the new state
        if (prevState !== this.state) {
        }
    }

 
    
    render(){
        const {values: { firstName, lastName, email, phone, street_address, city, country, emergencyContactName, emergencyContactPhone}} = this.props;

        return(
            <div>
                

                <h1 className="ui centered">Please Confirm Your Details</h1>
                <List>
                    <List.Item>
                        <List.Content><b>Name: </b> {firstName} {lastName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content><b>Phone: </b> {phone}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content><b>Email: </b> {email}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content><b>Address: </b>{street_address} | {city}, {country}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content><b>Emergency Contact Name: </b>{emergencyContactName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content><b>Emergency Contact Phone: </b>{emergencyContactPhone}</List.Content>
                    </List.Item>
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button
                    title={'Add TODO'}
                    onClick={() => this.addTodo()}>Confirm</Button>
            </div>
        )
    }
}

export default Confirmation;