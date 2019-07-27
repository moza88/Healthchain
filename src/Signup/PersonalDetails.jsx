import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { throws } from 'assert';


class PersonalDetails extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props

        return(

            <Form color='blue' >
                <h1 className="ui centered">Tell Us About Yourself</h1>
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

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Save and Continue</Button>
            </Form>

        )
    }
}

export default PersonalDetails;