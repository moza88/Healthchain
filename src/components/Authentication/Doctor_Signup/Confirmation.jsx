import React, { Component } from 'react';
import { Button, List} from 'semantic-ui-react';
import { withFirebase } from '../../Firebase';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

class ConfirmDetails extends Component{

    constructor(props){
        super(props);
        //this.ref = firebase.firestore().collection('users');
        this.ref = this.props.firebase.doGetDoctorCollection();

        this.unsubscribe = null;

        this.state = {
            firstName: '',
            lastName: '',
            typeOfDoctor: '',
            UPIN: '',
            email: '',
            phone: '',
            street_address: '',
            city: '',
            country: '',
        };
    }

    addTodo() {
        const {values: { firstName, lastName, typeOfDoctor, UPIN, email, phone, street_address, city, country, emergencyContactName, emergencyContactPhone}} = this.props;

        var firstName_save = firstName;
        var lastName_save = lastName;
        var typeOfDoctor_save = typeOfDoctor;
        var UPIN_save = UPIN;
        var email_save = email;
        var phone_save = phone;
        var street_address_save = street_address;
        var city_save = city;
        var country_save = country;

        this.ref.add({
          firstName: firstName_save,
          lastName: lastName_save,
          typeOfDoctor: typeOfDoctor_save,
          UPIN: UPIN_save,
          email: email_save,
          phone: phone_save,
          street_address: street_address_save,
          city: city_save,
          country: country_save,
        });
      
        this.setState({
            firstName: '',
            lastName: '',
            typeOfDoctor: '',
            UPIN: '',
            email: '',
            phone: '',
            street_address: '',
            city: '',
            country: '',
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
        const {values: { firstName, lastName, typeOfDoctor, UPIN, email, phone, street_address, city, country}} = this.props;

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
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button
                    title={'Add TODO'}
                    onClick={() => this.addTodo()}>Confirm</Button>
            </div>
        )
    }
}

const Confirmation = compose(withRouter, withFirebase,)(ConfirmDetails);

export default Confirmation;