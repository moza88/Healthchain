//UserDetails.jsx

import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';


class UserDetails extends Component{
    state = {  
        firstName: '',   
        lastName: '',
        email: '',   
        error: ''
      };

    saveAndContinue = (e) => {
        console.log('Save and Continue');
        e.preventDefault()
        this.props.nextStep();
        this.validate(e);
        
    }

    validate = (e) => {
        const {values: { firstName, lastName, email, phone, street_address, city, region, country, emergencyContactName, emergencyContactPhone}} = this.props;
        const target = e.target;

        if (!firstName || !lastName || !email || !phone || !street_address || !city || !region || !country || !emergencyContactName || !emergencyContactPhone) {
            this.setState({
                error: target.validationMessage,
            })        
            console.log(this.state.error + ' ' + target.validationMessage)
            console.log(firstName + lastName + email + phone + street_address + city + region + country + emergencyContactName + emergencyContactPhone);
        }else{
            this.props.nextStep();
        }
    }

    render(){
        const { values } = this.props;
        return(
            <Form>
                <input type='hidden' ref='uid' />
                <Form.Field>
                    <label>First Name*</label>
                    <input placeholder='John'
                    name='firstName'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue = {values.firstName}
                    ref='firstName'
                    required
                    />
                <div className="invalid-feedback d-block">
                    {this.state.error}
                </div>
                </Form.Field>
                <Form.Field>
                    <label>Last Name*</label>
                    <input placeholder='Doe'
                    name='lastName'
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={values.lastName}
                    ref='lastName'
                    required
                    />
                </Form.Field>
                <div className="invalid-feedback d-block">
                    {this.state.error}
                </div>
                <Form.Field>
                    <label>Email Address*</label>
                    <input placeholder='john.doe@gmail.com'
                    name='email'
                    type = 'email'
                    onChange={this.props.handleChange('email')}
                    defaultValue = {values.email}
                    ref='email'
                    required
                    />
                </Form.Field>
                <div className="invalid-feedback d-block">
                    {this.state.error}
                </div>
                <Form.Field>
                    <label>Phone Number*</label>
                    <input placeholder='(343) 343 34343'
                    name='phone'
                    type='tel'
                    onChange={this.props.handleChange('phone')}
                    defaultValue={values.phone}
                    ref='phone'
                    required
                    />
                </Form.Field>
                <div className="invalid-feedback d-block">
                    {this.state.error}
                </div>
                <Form.Field>
                    <label>Street Address*</label>
                    <input placeholder='333 South Point Road' 
                    name='street_address'
                    onChange={this.props.handleChange('street_address')}
                    defaultValue={values.street_address}
                    ref='street_address'
                    required
                    />
                </Form.Field>
                <div className="invalid-feedback d-block">
                    {this.state.error}
                </div>
                <Form.Field>
                    <label>City*</label>
                    <input placeholder='San Francisco'
                    name='city'
                    onChange={this.props.handleChange('city')}
                    defaultValue={values.city}
                    ref='city'
                    required
                    />
                </Form.Field>
                <div className="invalid-feedback d-block">
                    {this.state.error}
                </div>
                <Form.Field>
                    <label>Region*</label>
                    <input placeholder='IL'
                    name='country'
                    onChange={this.props.handleChange('region')}
                    defaultValue={values.region}
                    ref='region'
                    required
                    />
                </Form.Field>
                <Form.Field>
                    <label>Country*</label>
                    <input placeholder='U.S.A'
                    name='country'
                    onChange={this.props.handleChange('country')}
                    defaultValue={values.country}
                    ref='country'
                    required
                    />
                </Form.Field>
                <div className="invalid-feedback d-block">
                    {this.state.error}
                </div>
                <Form.Field>
                    <label>Emergency Contact Name*</label>
                    <input placeholder='Jane Doe' 
                    name='emergencyContactName'
                    type='text'
                    onChange={this.props.handleChange('emergencyContactName')}
                    defaultValue={values.emergencyContactName}
                    ref='emergencyContactName'
                    required
                    />
                </Form.Field>
                <div className="invalid-feedback d-block">
                    {this.state.error}
                </div>
                <Form.Field>
                    <label>Emergency Contact Phone Number*</label>
                    <input placeholder='(343) 343 34343'
                    name='emergencyContactPhone'
                    type='tel'
                    onChange={this.props.handleChange('emergencyContactPhone')}
                    defaultValue={values.emergencyContactPhone}
                    ref='emergencyContactPhone'
                    required
                    />
                </Form.Field>
                <div className="invalid-feedback d-block">
                    {this.state.error}
                </div>
                <Button onClick={this.validate}>Save and Continue</Button>
            </Form>
        )
    }
}

export default UserDetails;