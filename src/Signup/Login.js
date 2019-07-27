import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Flex, Box, Input, Button, Subhead, Text } from 'rebass';
import firebase from './firebase';
import { Form } from 'semantic-ui-react';

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
      <Form color='blue'>
        <h1 className="ui centered">Log In</h1>
        <Flex>
          <Box>
          </Box>
        </Flex>
        {error ? (
          <Flex>
            <Box>
              <Text>{error.message}</Text>
            </Box>
          </Flex>
        ) : null}
        <Flex>
          <Box>
            <form onSubmit={this.handleSubmit}>
              <Form.Field>
              <Input 
                type="text" 
                name="email" 
                placeholder="Email" 
                value={email} 
                onChange={this.handleInputChange} />

              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleInputChange}
              /></Form.Field>
              <Button children="Log In" />
            </form>
          </Box>
        </Flex>
      </Form>
    );
  }
}

export default withRouter(Login);
