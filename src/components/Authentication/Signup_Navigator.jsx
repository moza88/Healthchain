import React, { Component } from 'react';
import { Dropdown, Form} from "semantic-ui-react";
import Patient_Signup from './Patient_Signup/MainForm';
import Doctor_Signup from './Doctor_Signup/MainForm';
import ReactDOM from 'react-dom';

const options = [
    { key: 'doctor', text: 'Doctor', value: 'Doctor' },
    { key: 'patient', text: 'Patient', value: 'Patient' },
  ]

function IdentifyRole(props){
    switch (props.user) {
        case 'Doctor': 
            return <Doctor_Signup />;
        case 'Patient':
            return <Patient_Signup />;
        default: 
            return <div></div>
    }
}

class Signup_Navigator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange = (e, { value }) => this.setState({ value })
   /* handleChange() {
        this.setState(state => ({
            user: state.user
        }));
    }*/

    render(){
        const {value} = this.state;
        return(
            <div>
            <h1 className="ui centered">{value} Registration</h1>
            <Form>
                <Form.Field>
                <label>Please tell us if you are a patient or the type of provider</label>
                <Dropdown
                    name="user"
                    placeholder='Who are you?'
                    fluid
                    selection
                    floating
                    options={options}
                    onChange={this.handleChange}
                    value={value}
                    />
                </Form.Field>
            </Form>
            <IdentifyRole user={value}/>
            </div>
        )
    }
}

ReactDOM.render(
  <Signup_Navigator />,
  document.getElementById('root')
);

export default Signup_Navigator;