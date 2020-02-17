import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Flex, Box, Input, Subhead, Text } from 'rebass';
import { Form, Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../../constants/routes';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

class LoginBase extends Component {
  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE};
  }
  
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChange = (e, { value }) => this.setState({ value })

  /*
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };*/

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  
  render() {
    const { email, password, error } = this.state;
    return (
      <div>
      <Form color='blue'>
        <h1 className="ui centered">Log In</h1>
                           
            <form onSubmit={this.onSubmit}>
              <Form.Field>
              <label><b>Email</b></label>

              <Input 
                name="email" 
                type="email"
                placeholder="Email" 
                value={email} 
                onChange={this.handleInputChange} />

              <label><b>Password</b></label>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleInputChange}
              /></Form.Field>
              <Button color='blue' children="Log In" />

            </form>
            <p><Link to={ROUTES.SIGNUP}>Don't have an account? Sign Up</Link> | <Link to={ROUTES.FORGOT_PASSWORD_FORM}>Forgot My Password</Link></p>
          
      </Form>

      </div>
    );
  }
}

const Login = compose(withRouter, withFirebase,)(LoginBase);

export default withRouter(Login);
