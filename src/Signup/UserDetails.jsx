//UserDetails.jsx

import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';


class UserDetails extends Component{
    

    saveAndContinue = (e) => {
        console.log('Save and Continue');
        e.preventDefault()


          this.props.nextStep();
        
    }

    render(){
        const { values } = this.props;
        return(
            <Form>
                <h1 className="ui centered">Tell Us About Yourself</h1>
                <input type='hidden' ref='uid' />
                <Form.Field>
                    <label>First Name*</label>
                    <input placeholder='John'
                    name='firstName'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue = {values.firstName} 
                    ref='firstName'
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name*</label>
                    <input placeholder='Doe'
                    name='lastName'
                    onChange={this.props.handleChange('lastName')}
                    value={values.lastName}
                    ref='lastName'
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email Address*</label>
                    <input placeholder='john.doe@gmail.com'
                    name='email'
                    type = 'email'
                    onChange={this.props.handleChange('email')}
                    defaultValue = {values.email}
                    ref='email'
                    />

                </Form.Field>
                <Form.Field>
                    <label>Phone Number*</label>
                    <input placeholder='(343) 343 34343'
                    name='phone'
                    type='tel'
                    onChange={this.props.handleChange('phone')}
                    defaultValue={values.phone}
                    ref='phone'
                    />
                </Form.Field>
                <Form.Field>
                    <label>Street Address*</label>
                    <input placeholder='333 South Point Road' 
                    name='street_address'
                    onChange={this.props.handleChange('street_address')}
                    defaultValue={values.street_address}
                    ref='street_address'
                    />
                </Form.Field>
                <Form.Field>
                    <label>City*</label>
                    <input placeholder='San Francisco'
                    name='city'
                    onChange={this.props.handleChange('city')}
                    defaultValue={values.city}
                    ref='city'
                    />
                </Form.Field>
                <Form.Field>
                    <label>Country*</label>
                    <input placeholder='U.S.A'
                    name='country'
                    onChange={this.props.handleChange('country')}
                    defaultValue={values.country}
                    ref='country'
                    />
                </Form.Field>
                <Form.Field>
                    <label>Emergency Contact Name*</label>
                    <input placeholder='Jane Doe' 
                    name='emergencyContactName'
                    type='text'
                    onChange={this.props.handleChange('emergencyContactName')}
                    defaultValue={values.emergencyContactName}
                    ref='emergencyContactName'
                    />
                </Form.Field>
                <Form.Field>
                    <label>Emergency Contact Phone Number*</label>
                    <input placeholder='(343) 343 34343'
                    name='emergencyContactPhone'
                    type='tel'
                    onChange={this.props.handleChange('emergencyContactPhone')}
                    defaultValue={values.emergencyContactPhone}
                    ref='emergencyContactPhone'
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save and Continue</Button>
            </Form>
        )
    }
}

export default UserDetails;