// MainForm.jsx

import React, { Component } from 'react';
import UserDetails from './UserDetails';
import Confirmation from './Confirmation';
import Success from './Success';
import Credentials from '../Credentials/Credentials';

class MainForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        typeOfDoctor: '',
        UPIN: '',
        email: '',
        phone: '',
        street_address: '',
        city: '',
        country: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value})
    }

    render(){
        const {step} = this.state;
        const { firstName, lastName, typeOfDoctor, UPIN, email, phone, street_address, city, region, country} = this.state;
        const values = { firstName, lastName, typeOfDoctor, UPIN, email, phone, street_address, city, region, country};
        switch(step){
            case 1:
                return <UserDetails
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    />
 
            case 2:
                return <Confirmation
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    />
            case 3: 
                return <Credentials
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    values = {values}
                    />
            case 4:
                return <Success />
        }
    }
}

export default MainForm;