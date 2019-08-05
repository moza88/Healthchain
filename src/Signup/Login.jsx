import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Flex, Box, Input, Subhead, Text } from 'rebass';
import firebase from './../firebase';
import { Form, Button} from 'semantic-ui-react';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null,
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  };
  render() {
    const { email, password, error } = this.state;
    return (
      <div>
      <Form color='blue'>
        <h1 className="ui centered">Log In</h1>
                           
            <form onSubmit={this.handleSubmit}>
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
              <Button children="Log In" />
            </form>
      </Form>
      </div>
    );
  }
}

export default withRouter(Login);
