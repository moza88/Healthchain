import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';

class Confirmation extends Component{

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values: { firstName, lastName, email, street_address, city, country}} = this.props;
        
        return(
            <div>
                <h1 className="ui centered">Confirm Your Details</h1>
                <p>Click to Confirm</p>
                <List>
                    <List.Item>
                        <List.Icon name = 'users' />
                        <List.Content>First Name: {firstName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name = 'users' />
                        <List.Content>Last Name: {lastName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name = 'mail' />
                        <List.Content>Email: {email}</List.Content>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>{city}, {country}</List.Content>
                    </List.Item>
                        
                    </List.Item>
                </List>

                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Confirm</Button>
            </div>
        )
    }
}

export default Confirmation;