import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Flex, Box, Input, Subhead, Text } from 'rebass';
import { withFirebase } from '../../Firebase/context';
import { Form, Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Forgot_Password_Page = () => (
    <div>
        <h1>PasswordForget</h1>
        <Password_Forget_Form/>
    </div>
);

const INITIAL_STATE = {
    email: '',
    error: null,
};

class Forgot_Password extends Component {
    constructor(props) {
        super(props);

        this.state = {... INITIAL_STATE};
    }

    onSubmit = event => {
        const {email} = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE});
            })
            .catch(error => {
                this.setState({error});
            });
        event.preventDefault();
    };
    
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    };

    render() {
        const { email, error } = this.state;

        const isInvalid = email === '';

        return(
            <div>
                <Form color='blue'>
                    <h1 className="ui centered">Log In</h1>
                        <form onSubmit={this.handleSubmit}></form>
                        <Form.Field>
                            <label><b>Email</b></label>
                            <Input 
                                name="email" 
                                type="email"
                                placeholder="Email" 
                                onChange={this.onChange}
                                value= {this.state.email} />
                        </Form.Field>
                        <Button disabled= {isInvalid} type= "submit">
                            Reset my Password
                        </Button>
                        {error & <p>{error.message}</p>}
                </Form>
            </div>
        );
    }
}

const Password_Forgot_Link = () => (
    <p>
        <Link to='/forgot_password'>Forgot Password?></Link>
    </p>
);

export default Forgot_Password_Page;

const Password_Forget_Form = withFirebase(Forgot_Password);

export {Password_Forget_Form, Password_Forgot_Link};