//UserDetails.jsx

import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class UserDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form>
                <h1 className="ui centered">Enter Your Details</h1>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue = {values.firstName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name'
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email Address</label>
                    <input placeholder='Email'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Street Address</label>
                    <input placeholder='265 North Point Road' 
                    onChange={this.props.handleChange('street_address')}
                    defaultValue={values.street_address}
                    />
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input placeholder='San Francisco'
                    onChange={this.props.handleChange('city')}
                    defaultValue={values.city}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Country</label>
                    <input placeholder='U.S.A'
                    onChange={this.props.handleChange('country')}
                    defaultValue={values.country}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save and Continue</Button>
            </Form>
        )
    }
}

export default UserDetails;